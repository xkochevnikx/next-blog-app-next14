"use client";

import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";
import { Trans } from "react-i18next/TransWithoutContext";

const TheFooter = ({ lang }: { lang: string }): JSX.Element => {
  const router = useRouter();
  const { t, i18n } = useTranslation(lang, "footer");

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    router.push(`/${lang}`);
  };

  return (
    <footer className="container">
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lang }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lang !== l)
        .map((l, index) => {
          return (
            <span key={l} onClick={() => changeLanguage(l)}>
              {t("lang")}
            </span>
          );
        })}
    </footer>
  );
};

export { TheFooter };
