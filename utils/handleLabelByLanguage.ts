import { LanguageEnum } from "@/interfaces";

export const handleLabelByLanguage = (lang: LanguageEnum, label: string) => {
    if (label === "Portfolio completo" && lang === LanguageEnum.en) {
      return "Complete portfolio"
    }
    if (label === "Portfolio completo" && lang === LanguageEnum.pt) {
      return "Portfólio Completo"
    }
    if (label === "Portfolio completo" && lang === LanguageEnum.es) {
      return label;
    }
    if (label && lang === LanguageEnum.en) {
      return (label !== "Portfolio completo" && label === "Espumantes") ? "Sparkling Wines" : `${label}`;
    }
    if (label && lang === LanguageEnum.pt) {
      return (label !== "Portfolio completo" && label === "Espumantes") ? "Espumantes" : `${label}`;
    }
    return `${label}`
  }