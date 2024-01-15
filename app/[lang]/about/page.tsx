import { useTranslation } from "@/app/i18n";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Next App",
};

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "about");

  return <h3> {t("title")}</h3>;
}
