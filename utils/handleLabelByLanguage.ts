import { LanguageEnum } from "@/interfaces";

export const handleLabelByLanguage = (lang: LanguageEnum, label: string) => {
    if (label === "Todas las lineas" && lang === LanguageEnum.en) {
      return "All lines"
    }
    if (label === "Todas las lineas" && lang === LanguageEnum.es) {
      return label;
    }
    if (label && lang === LanguageEnum.en) {
      return (label !== "Todas las lineas" && label === "Espumantes") ? "Sparkling Wines Line" : `${label} line`;
    }
    return `Línea ${label}`
  }