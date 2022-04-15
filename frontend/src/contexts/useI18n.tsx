import React, { useState, useCallback, useContext } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUs from "antd/lib/locale/en_US";
import { Locale } from "antd/lib/locale-provider";

const Lang = React.createContext<{
  lang: Locale;
  langName: string;
  setLang: (lang: string) => void;
}>({ lang: zhCN, setLang: () => {}, langName: "中文" });

export function useLang() {
    return useContext(Lang);
}

const useProvideLang = () => {
  const [langName, setLangName] = useState("中文");
  const [lang, setLang] = useState<Locale>(zhCN);
  const setLangFn = useCallback((l: string) => {
      console.log("setLangFn", l);
    switch (l) {
      case "zh":
        setLang(zhCN);
        setLangName("中文");
        break;
      default:
        setLangName("English");
        setLang(enUs);
        break;
    }
  }, []);
  return {
    langName,
    lang,
    setLang: setLangFn,
  };
};

export const ProvideI18n: React.FC = ({ children }) => {
  return (
    <Lang.Provider value={useProvideLang()}>
        { children }
    </Lang.Provider>
  );
};