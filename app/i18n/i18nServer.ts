import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import i18nConfig from "./i18nConfig";
import LocizeBackend from "i18next-locize-backend";

//
//todo серверный хук для использования в провайдере
export default async function initTranslations(
  lang,
  namespaces,
  i18nInstance?,
  resources?
) {
  i18nInstance = i18nInstance || createInstance();
  i18nInstance.use(initReactI18next);
  if (!resources) {
    i18nInstance.use(LocizeBackend);
  }
  await i18nInstance.init({
    lng: lang,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
    backend: {
      projectId: "",
      apiKey: "",
      version: "latest",
      private: true,
      referenceLng: "en",
    },
  });
  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
