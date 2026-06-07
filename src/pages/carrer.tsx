import { useTranslation } from "react-i18next";
import { List } from "../components/career";

export function Carrer() {
  const { t } = useTranslation();

  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto space-y-5">
      <div>
        <h2 className="text-lg font-nunito font-semibold">
          {t("career.title")}
        </h2>
        <p className="text-sm font-nunito font-normal text-neutral-700">
          {t("career.description")}
        </p>
      </div>
      <List />
    </section>
  );
}
