"use client";

import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { Trans } from "react-i18next/TransWithoutContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const TheFooter = ({ lang }: { lang: string }): JSX.Element => {
  const { t } = useTranslation(lang, "footer");

  const pathname = usePathname();

  const router = useRouter();

  return (
    <footer className="container">
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lang }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lang !== l)
        .map((l, index) => {
          return (
            <span key={l} onClick={() => router.push(`/${l}${pathname}`)}>
              {l}
            </span>
          );
        })}
    </footer>
  );
};

export { TheFooter };
