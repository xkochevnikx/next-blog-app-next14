import { TheFooter } from "@/components/TheFooter";
import { useTranslation } from "../i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  //todo - серверный хук для переключения языка без провайдера
  //? ниже в футере клиенсткий хук
  const { t } = await useTranslation(lang, "widget.account");

  return (
    <>
      <h1>
        {t("content.title")}-{lang}
        
        <TheFooter lang={lang} />
      </h1>
    </>
  );
}
