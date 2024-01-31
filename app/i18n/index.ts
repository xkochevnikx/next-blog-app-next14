import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import LocizeBackend from "i18next-locize-backend";

//todo серверный хук для использования без провайдера
const initI18next = async (lang, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(LocizeBackend)
    .init(getOptions(lang, ns));
  return i18nInstance;
};

export async function useTranslation(lang, ns) {
  const i18nextInstance = await initI18next(lang, ns);
  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  };
}
