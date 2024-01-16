"use client";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions, languages, cookieName } from "./settings";
import { useEffect } from "react";

//! это клиентская логика, с сервера летит перевод вида
`[Object: null prototype] [Module] {
languageSwitcher: [Getter],
  lang: [Getter],
  default: [Getter]
}`;

let resp;

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      async (language, namespace) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
  });

export function useTranslation(lang: string, ns: string) {
  const translator = useTranslationOrg(ns);
  const { i18n } = translator;
  useEffect(() => {
    if (!lang || i18n.resolvedLanguage === lang) return;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  return translator;
}
