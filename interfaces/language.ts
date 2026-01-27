export type LanguageT = {
  value: LanguageEnum;
  label:string
};

export enum LanguageEnum {
  es = "es",
  en = "en"
};

export interface LinesLabels{
  all_lines:string;
  tinquiao:string;
  espumantes:string;
  vikinga:string;
};