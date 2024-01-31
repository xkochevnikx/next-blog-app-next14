"use client";

import { useTranslation } from "@/app/i18n/client";
// import { useTranslation } from "react-i18next";

import { languages } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";

const TheFooter = ({ lang }: { lang: string }): JSX.Element => {
  const router = useRouter();
  //todo - клиентский хук для переключения языка без провайдера

  const { t, i18n } = useTranslation(lang, "widget.account");

  //todo - клиентский хук при использовании провайдера
  // const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    // i18n.changeLanguage(lang);
    router.push(`/${lang}`);
  };

  return (
    <footer className="container">
      <h2>{t("content.title")}</h2>

      {languages
        .filter((l) => lang !== l)
        .map((l, index) => {
          return (
            <span key={l} onClick={() => changeLanguage(l)}>
              {lang}
            </span>
          );
        })}
    </footer>
  );
};

export { TheFooter };
