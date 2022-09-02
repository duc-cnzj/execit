import React, { useState, useCallback, useContext } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUs from "antd/lib/locale/en_US";
import { Locale } from "antd/lib/locale-provider";
import { useTranslation } from "react-i18next";
import { getLang, setLang as SetLocalLang } from "../utils/token";

const Lang = React.createContext<{
  lang: Locale;
  langName: string;
  setLang: (lang: string) => void;
}>({ lang: enUs, setLang: () => {}, langName: "en" });

export function useLang() {
  return useContext(Lang);
}

const useProvideLang = () => {
  const localLang = getLang();
  const [langName, setLangName] = useState(
    localLang === "en" ? "English" : "中文"
  );
  const { i18n } = useTranslation();

  const [lang, setLang] = useState<Locale>(localLang === "en" ? enUs : zhCN);
  const setLangFn = useCallback(
    (l: string) => {
      console.log("setLangFn", l);
      switch (l) {
        case "zh":
          setLang(zhCN);
          setLangName("中文");
          SetLocalLang("zh");
          i18n.changeLanguage("zh");
          document.documentElement.setAttribute("lang", "zh");
          break;
        default:
          SetLocalLang("en");
          i18n.changeLanguage("en");
          setLangName("English");
          setLang(enUs);
          document.documentElement.setAttribute("lang", "en");
          break;
      }
    },
    [i18n]
  );
  return {
    langName,
    lang,
    setLang: setLangFn,
  };
};

export const ProvideI18n: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Lang.Provider value={useProvideLang()}>{children}</Lang.Provider>;
};
