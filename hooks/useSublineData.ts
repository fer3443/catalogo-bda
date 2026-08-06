import { LanguageEnum, Lines, NewWine, Subline } from '@/interfaces';
import { INFO_LINES } from '@/mock';

export const useSublineData = (
  wineData: NewWine[],
  line: Lines | undefined,
  subline: Subline[] | undefined,
) => {
  const getFilteredWines = (sublineIndex: number = 0): NewWine[] => {
    if (!line) return wineData;
    if (!subline?.length) return wineData.filter((wine) => wine.line.toLowerCase() === line);
    return wineData.filter(
      (wine) => wine.line.toLowerCase() === line && wine.subline === subline[sublineIndex]
    );
  };

  const getSublineDescription = (sublineIndex: number, locale: LanguageEnum) => {
    if (!line) return null;
    const lineKey = getFilteredWines(sublineIndex)[0]?.line;
    return lineKey ? INFO_LINES[locale]?.[lineKey]?.[sublineIndex] : null;
  };

  const hasMultipleSublines = line && subline && subline.length > 1;

  return { getFilteredWines, getSublineDescription, hasMultipleSublines };
};
