import { useTranslations } from "next-intl";

type Props =
  | { code: "required"; params?: never }
  | { code: "too_big"; params: { max: number } }
  | { code: "too_small"; params: { min: number } };

export function useZodTranslation() {
  const t = useTranslations("shared.errors");

  return ({ code, params }: Props) => {
    switch (code) {
      case "too_small":
        return t("min", { min: params.min });
      case "too_big":
        return t("max", { max: params.max });
      case "required":
        return t("required");
      default:
        return t(code, params) || "Erro desconhecido";
    }
  };
}
