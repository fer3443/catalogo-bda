import { LanguageEnum, LanguageT, LinesLabels, } from "@/interfaces";

export const LANGUAGES: LanguageT[] = [
  { value: LanguageEnum.es, label: "es" },
  { value: LanguageEnum.en, label: "en" },
];

export const LABELS_BY_LANGUAGE: Record<LanguageEnum, LinesLabels> = {
  [LanguageEnum.es]: {
    all_lines: "Todas las lineas",
    tinquiao: "Tinquiao",
    espumantes: "Espumantes",
    vikinga: "Vikinga"
  },
  [LanguageEnum.en]: {
    all_lines: "All lines",
    tinquiao: "Tinquiao",
    espumantes: "Sparkling Wines",
    vikinga: "Vikinga"
  }
}