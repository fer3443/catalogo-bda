export type LanguageT = {
  value: LanguageEnum;
  label:string;
  label_mobile:string;
};

export enum LanguageEnum {
  es = "es",
  en = "en",
  pt = "pt"
};

export interface LinesLabels{
  all_lines:string;
  tinquiao:string;
  espumantes:string;
  vikinga:string;
};