"use client";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { getOptions, languages } from "./settings";
import { useEffect } from "react";
import LocizeBackend from "i18next-locize-backend";

//todo клиентный хук для использования без провайдера

i18next
  .use(initReactI18next)
  .use(LocizeBackend)
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
