import React, {
  useMemo,
  useRef,
  useEffect,
  useCallback,
  useState,
  memo,
} from "react";
import { useSelector } from "react-redux";
import { cardAllContainers } from "../api/card";
import { isPodExists } from "../api/container";
import { message, Radio, Tag, Upload, Button } from "antd";
import { selectSessions } from "../store/reducers/shell";
import { debounce } from "lodash";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { useWs, useWsReady } from "../contexts/useWebsocket";
import { UploadOutlined } from "@ant-design/icons";
import pb from "../api/compiled";
import { copyToPod } from "../api/cp";
import PodMetrics from "./PodMetrics";
import { getToken } from "../utils/token";
import { useTranslation } from "react-i18next";

const TabShell: React.FC<{
  resizeAt: number;
  cardId: number;
  clusterId: number;
  namespace: string;
  name: string;
  type: string;
}> = ({ cardId, clusterId, name, namespace, resizeAt }) => {
  const [list, setList] = useState<pb.container.Item[]>([]);
  const [sessionId, setSessionId] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [term, setTerm] = useState<Terminal>();
  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const fitAddon = useMemo(() => new FitAddon(), []);
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);
  const sessions = useSelector(selectSessions);
  const ws = useWs();
  const wsReady = useWsReady();

  let sname = useMemo(
    () => `${namespace}|${value}|${clusterId}`,
    [namespace, value, clusterId]
  );

  const listContainer = useCallback(
    () =>
      cardAllContainers(cardId).then((res) => {
        setList(res.data.items);
        return res;
      }),
    [cardId]
  );

  const sendMsg = useCallback(
    (msg: any) => {
      try {
        ws?.send(msg);
      } catch (e) {
        console.log(e);
      }
    },
    [ws]
  );

  const onTerminalSendString = useCallback((id: string, ws: WebSocket) => {
    return (str: string) => {
      let s = pb.websocket.TerminalMessageInput.encode({
        type: pb.websocket.Type.HandleExecShellMsg,
        message: {
          session_id: id,
          op: "stdin",
          data: str,
          cols: 0,
          rows: 0,
        },
      }).finish();
      ws?.send(s);
    };
  }, []);

  const debouncedFit_ = useCallback(
    () =>
      debounce(() => {
        try {
          fitAddon.fit();
        } catch (e) {
          console.log(e);
        }
      }, 300)(),
    [fitAddon]
  );

  const handleConnectionMessage = useCallback(
    (frame: pb.websocket.TerminalMessage, term: Terminal) => {
      if (!term) {
        return;
      }
      if (frame.op === "stdout") {
        term.write(frame.data);
      }

      if (frame.op === "toast") {
        message.error(frame.data);
        listContainer().then((res) => {
          let first = res.data.items[0];
          setValue(first.pod + "|" + first.container);
        });
      }
    },
    [listContainer]
  );

  const onTerminalResize = useCallback((id: string, ws: WebSocket) => {
    return debounce(({ cols, rows }: { cols: number; rows: number }) => {
      let s = pb.websocket.TerminalMessageInput.encode({
        type: pb.websocket.Type.HandleExecShellMsg,
        message: new pb.websocket.TerminalMessage({
          session_id: id,
          op: "resize",
          cols: cols,
          rows: rows,
        }),
      }).finish();
      ws?.send(s);
    }, 200);
  }, []);

  const handleCloseShell = useCallback(
    (id: string) => {
      if (id) {
        let s = pb.websocket.TerminalMessageInput.encode({
          type: pb.websocket.Type.HandleCloseShell,
          message: new pb.websocket.TerminalMessage({ session_id: id }),
        }).finish();
        sendMsg(s);
      }
    },
    [sendMsg]
  );

  let logCount = useMemo(() => sessions[sname]?.logCount, [sessions, sname]);
  let log = useMemo(() => sessions[sname]?.log, [sessions, sname]);
  useEffect(() => {
    if (logCount && term) {
      handleConnectionMessage(log, term);
    }
  }, [logCount, log, handleConnectionMessage, term]);

  useEffect(() => {
    listContainer().then((res) => {
      let first = res.data.items[0];
      setValue(first.pod + "|" + first.container);
    });
  }, [listContainer]);

  const getTerm = useCallback(
    (id: string, ws: WebSocket) => {
      let myterm = new Terminal({
        fontSize: 14,
        fontFamily: '"Fira code", "Fira Mono", monospace',
        bellStyle: "sound",
        cursorBlink: true,
        rows: 26,
      });
      myterm.loadAddon(fitAddon);
      myterm.onResize(onTerminalResize(id, ws));
      myterm.onData(onTerminalSendString(id, ws));
      ref.current !== null && myterm.open(ref.current);
      debouncedFit_();
      myterm.focus();
      return myterm;
    },
    [onTerminalResize, onTerminalSendString, debouncedFit_, fitAddon]
  );

  let sid = useMemo(() => sessions[sname]?.sessionID, [sessions, sname]);
  useEffect(() => {
    if (sid) {
      setSessionId(sid);
    }
  }, [sid]);

  useEffect(() => {
    if (wsReady && sessionId && ws) {
      const t = getTerm(sessionId, ws);
      setTerm(t);

      return () => {
        t.dispose();
        handleCloseShell(sessionId);
        console.log("close id: ", sessionId);
      };
    }
  }, [wsReady, sessionId, handleCloseShell, setTerm, ws, getTerm]);

  useEffect(() => {
    debouncedFit_();
  }, [debouncedFit_, resizeAt]);

  const initShell = useCallback(() => {
    let s = value.split("|");
    let ss = pb.websocket.WsHandleExecShellInput.encode({
      card_id: cardId,
      cluster_id: clusterId,
      type: pb.websocket.Type.HandleExecShell,
      namespace: namespace,
      pod: s[0],
      container: s[1],
    }).finish();
    sendMsg(ss);
  }, [value, sendMsg, clusterId, namespace, cardId]);

  useEffect(() => {
    if (value && wsReady) {
      initShell();
    }
  }, [initShell, value, wsReady]);

  const reconnect = useCallback(
    (e: any) => {
      setTimestamp(new Date().getTime());
      setValue((v) => {
        if (v === e.target.value) {
          let s = (e.target.value as string).split("|");
          isPodExists({
            cluster_id: clusterId,
            namespace: namespace,
            pod: s[0],
          }).then((res) => {
            if (res.data.exists) {
              initShell();
            } else {
              // message.error(`容器列表有更新，请重试！`);
              listContainer().then((res) => {
                let first = res.data.items[0];
                setValue(first.pod + "|" + first.container);
              });
            }
          });
        }
        return e.target.value;
      });
    },
    [initShell, listContainer, clusterId, namespace]
  );

  const beforeUpload = useCallback(
    (file: any) => {
      const isLt50M = file.size / 1024 / 1024 <= 50;
      if (!isLt50M) {
        message.error(t("The maximum file size cannot exceed 50MB!"));
      }
      setLoading(isLt50M);

      return isLt50M;
    },
    [t]
  );

  const [loading, setLoading] = useState(false);

  const props = {
    name: "file",
    beforeUpload: beforeUpload,
    action: process.env.REACT_APP_BASE_URL + "/api/files",
    headers: {
      authorization: getToken(),
    },
    showUploadList: false,
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        let [pod, container] = value.split("|");
        copyToPod({
          cluster_id: clusterId,
          pod: pod,
          container: container,
          namespace: namespace,
          file_id: info.file.response.id,
        })
          .then((res) => {
            console.log(res);
            message.success(
              t(
                "File {{name}} has been uploaded under container {{pod_file_path}}",
                { name: info.file.name, pod_file_path: res.data.pod_file_path }
              ),
              2
            );
          })
          .catch((e) => {
            message.error(
              t("File {{name}} failed to upload to container", {
                name: info.file.name,
              })
            );
          })
          .finally(() => {
            setLoading(false);
          });
      } else if (info.file.status === "error") {
        message.error(
          t("File {{info.file.name}} upload failed", { name: info.file.name })
        );
        setLoading(false);
      }
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Radio.Group value={value} style={{ marginBottom: 5 }}>
        {list.map((item) => (
          <Radio
            onClick={reconnect}
            key={item.pod + "|" + item.container}
            value={item.pod + "|" + item.container}
          >
            {item.container}
            <Tag color="magenta" style={{ marginLeft: 10 }}>
              {item.pod}
            </Tag>
          </Radio>
        ))}
      </Radio.Group>

      {value.length > 0 && term ? (
        <div style={{ display: "flex", justifyContent: "start" }}>
          <Upload {...props}>
            <Button
              disabled={loading}
              loading={loading}
              size="small"
              style={{ fontSize: 12, marginRight: 5, margin: "5px 0" }}
              icon={<UploadOutlined />}
            >
              {loading ? t("uploading...") : t("upload to container")}
            </Button>
          </Upload>
          <PodMetrics
            clusterId={clusterId}
            namespace={namespace}
            pod={value.split("|")[0]}
            timestamp={timestamp}
          />
        </div>
      ) : (
        <></>
      )}
      <div ref={ref} id="terminal" style={{ height: "100%" }}></div>
    </div>
  );
};

export default memo(TabShell);
