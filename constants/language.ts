import { LanguageEnum, LanguageT, LinesLabels, } from "@/interfaces";

export const LANGUAGES: LanguageT[] = [
  { value: LanguageEnum.es, label: "español", label_mobile: "es" },
  { value: LanguageEnum.en, label: "english", label_mobile: "en" },
  { value: LanguageEnum.pt, label: "português", label_mobile: "pt" },
];

export const LABELS_BY_LANGUAGE: Record<LanguageEnum, LinesLabels> = {
  [LanguageEnum.es]: {
    all_lines: "Portfolio completo",
    tinquiao: "Tinquiao",
    espumantes: "Espumantes",
    vikinga: "Vikinga"
  },
  [LanguageEnum.en]: {
    all_lines: "Complete Portfolio",
    tinquiao: "Tinquiao",
    espumantes: "Sparkling Wines",
    vikinga: "Vikinga"
  },
  [LanguageEnum.pt]: {
    all_lines: "portfólio completo",
    tinquiao: "Tinquiao",
    espumantes: "Espumantes",
    vikinga: "Vikinga"
  }
}