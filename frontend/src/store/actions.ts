import {
  APPEND_CREATE_PROJECT_LOG,
  CLEAR_CREATE_PROJECT_LOG,
  SET_SHELL_SESSION_ID,
  SET_SHELL_LOG,
  SET_SYNC_CARD,
  APPEND_OPENED_MODAL,
  REMOVE_OPENED_MODAL,
  CLEAR_OPENED_MODALS,
  SET_VISIBLE,
} from "./actionTypes";
import { Dispatch } from "redux";
import { message } from "antd";
import { setUid } from "../utils/uid";
import pb from "../api/compiled";

export const appendCreateProjectLog = (id: string, log: string) => ({
  type: APPEND_CREATE_PROJECT_LOG,
  data: {
    id,
    output: log,
  },
});

export const appendOpenedModal = (key: string) => ({
  type: APPEND_OPENED_MODAL,
  data: {
    key,
  },
});

export const setSearch = (visible: boolean) => ({
  type: SET_VISIBLE,
  visible,
});

export const removeOpenedModal = (key: string) => ({
  type: REMOVE_OPENED_MODAL,
  data: {
    key,
  },
});
export const clearOpenedModals = () => ({
  type: CLEAR_OPENED_MODALS,
});

export const clearCreateProjectLog = (id: string) => ({
  type: CLEAR_CREATE_PROJECT_LOG,
  data: {
    id,
  },
});

export const setShellSessionId = (id: string, sessionID: string) => ({
  type: SET_SHELL_SESSION_ID,
  data: {
    id: id,
    sessionID: sessionID,
  },
});

export const setShellLog = (id: string, log: pb.websocket.TerminalMessage) => ({
  type: SET_SHELL_LOG,
  data: {
    id: id,
    log: log,
  },
});
export const setSyncCard = () => ({
  type: SET_SYNC_CARD,
  data: {
    syncAt: new Date().toISOString(),
  },
});

export const handleEvents = (
  id: string,
  data: pb.websocket.Metadata,
  input: any
) => {
  return function (dispatch: Dispatch) {
    switch (data.type.valueOf()) {
      case pb.websocket.Type.SetUid:
        setUid(data.data);
        break;
      case pb.websocket.Type.HandleExecShell:
        if (data.result === pb.websocket.ResultType.Error) {
          message.error(data.data);
          break;
        }
        let res = pb.websocket.WsHandleShellResponse.decode(input);

        res.container &&
          res.terminal_message &&
          dispatch(
            setShellSessionId(
              `${res.container.namespace}|${res.container.pod}|${res.container.container}|${res.container.cluster_id}`,
              res.terminal_message.session_id
            )
          );
        break;
      case pb.websocket.Type.HandleSyncCard:
        dispatch(setSyncCard());
        break;
      case pb.websocket.Type.HandleExecShellMsg:
        let logRes = pb.websocket.WsHandleShellResponse.decode(input);
        logRes.container &&
          logRes.terminal_message &&
          dispatch(
            setShellLog(
              `${logRes.container.namespace}|${logRes.container.pod}|${logRes.container.container}|${logRes.container.cluster_id}`,
              logRes.terminal_message
            )
          );
        break;
      default:
        console.log("unknown event: ", data.type);
    }
  };
};
