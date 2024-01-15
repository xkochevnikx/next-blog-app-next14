import { useTranslation } from "../i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "home");

  return (
    <>
      <h1>lang {lang}</h1>
      {t("title")}
      
    </>
  );
}