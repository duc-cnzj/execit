import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { SearchOutlined } from "@ant-design/icons";
import { List, Modal, Input, Divider, Button, Tag } from "antd";
import VirtualList, { ListRef } from "rc-virtual-list";
import pb from "../api/compiled";
import { flatten } from "lodash";
import { t } from "i18next";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { appendOpenedModal, setSearch } from "../store/actions";
import { visible } from "../store/reducers/search";
import Fuse from "fuse.js";
interface card {
  namespace: string;
  name: string;
  clusterName: string;
}
const options = {
  includeScore: true,
  keys: ["namespace", "name", "clusterName"],
};
const Search: React.FC<{ data: pb.card.ItemsList[] }> = ({ data: items }) => {
  const v = useSelector(visible);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    console.log(v, "v");
    setIsModalOpen(v);
  }, [v]);

  let cards: card[] = useMemo(
    () =>
      flatten(
        items.map((v): card[] => {
          return v.items.map((i) => ({
            clusterName: v.cluster_name,
            namespace: v.namespace,
            name: i.name,
          }));
        })
      ),
    [items]
  );
  const ref = useRef<ListRef>(null);

  const [data, setData] = useState<card[]>([]);

  const fuse = useMemo(() => new Fuse(data, options), [data]);

  const filterData = useCallback(
    (v: ChangeEvent<HTMLInputElement>) => {
      setSelected(0);
      ref.current?.scrollTo(0);
      if (!v.target.value) {
        setData(cards);
        return;
      }

      setData(fuse.search(v.target.value).map((v) => v.item));
    },
    [cards, fuse]
  );
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(cards);
  }, [cards]);

  const showModal = () => {
    dispatch(setSearch(true));
    setIsModalOpen(true);
  };

  const handleCancel = useCallback(() => {
    setData(cards);
    setIsModalOpen(false);
    dispatch(setSearch(false));
  }, [cards, dispatch]);

  useHotkeys(
    "ctrl+k, Meta+k",
    () => {
      isModalOpen ? handleCancel() : showModal();
    },
    [isModalOpen],
    { preventDefault: true }
  );
  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.code === "ArrowDown") {
        ev.preventDefault();
        ev.stopPropagation();
        setSelected((n) => {
          let nn = (n + 1) % data.length;
          ref.current?.scrollTo(69 * nn);
          return nn;
        });
      }
      if (ev.code === "ArrowUp") {
        ev.preventDefault();
        ev.stopPropagation();
        setSelected((n) => {
          let nn = (n - 1) % data.length;
          if (nn < 0) {
            nn += data.length;
          }
          ref.current?.scrollTo(69 * nn);
          return nn;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [data]);
  const ContainerHeight = 414;
  const finish = useCallback(() => {
    let item = data[selected];
    setTimeout(() => {
      dispatch(
        appendOpenedModal(item.clusterName + item.namespace + item.name)
      );
    }, 200);
    handleCancel();
  }, [data, selected, handleCancel, dispatch]);

  return (
    <Modal
      title={null}
      width={"70%"}
      destroyOnClose
      visible={isModalOpen}
      bodyStyle={{ height: ContainerHeight + 80 }}
      onOk={handleCancel}
      closeIcon={
        <Button
          style={{
            fontSize: 10,
            fontWeight: "bold",
            textTransform: "uppercase",
            borderRadius: 8,
            marginRight: 40,
          }}
          size="small"
        >
          esc
        </Button>
      }
      footer={null}
      maskClosable={false}
      onCancel={handleCancel}
    >
      <Input
        bordered={false}
        style={{ padding: 0 }}
        autoFocus
        onKeyDown={(ev: any) => {
          if (ev.code === "Enter" && data.length > 0) {
            finish();
          }
        }}
        onChange={filterData}
        placeholder={t("search container")}
        prefix={<SearchOutlined style={{ fontSize: 18, marginRight: 18 }} />}
      />
      <Divider style={{ margin: "10px 0" }} />
      <div>
        <List>
          <VirtualList
            ref={ref}
            data={data}
            height={ContainerHeight}
            itemHeight={47}
            itemKey={(item) => item.namespace + item.name}
          >
            {(item: card, index: number) => (
              <List.Item
                onClick={finish}
                id={item.namespace + item.name}
                key={item.namespace + item.name}
                onMouseEnter={() => setSelected(index)}
                className={classnames(
                  { "search__item--selected": index === selected },
                  "search__item"
                )}
              >
                <List.Item.Meta
                  title={
                    <div>
                      <Tag color="magenta" style={{ marginRight: 5 }}>
                        {item.clusterName}
                      </Tag>
                      <span
                        style={{
                          fontSize: 18,
                          marginRight: 5,
                          fontFamily: '"Fira code"',
                          fontWeight: 400,
                        }}
                      >
                        {item.name}
                      </span>
                    </div>
                  }
                  description={item.namespace}
                />
              </List.Item>
            )}
          </VirtualList>
        </List>
      </div>
    </Modal>
  );
};

export default memo(Search);
