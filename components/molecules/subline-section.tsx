import { useLocale, useTranslations } from 'next-intl';
import { LanguageEnum, Lines, NewWine, Subline } from '@/interfaces';
import { useSublineData } from '@/hooks';
import { translateWine } from '@/utils/translate-wine';
import { WineSections, type WineSection } from './wine-sections';

interface SublineSectionProps {
  wineData: NewWine[],
  line: Lines | undefined,
  subline: Subline[] | undefined,
}

// Server component: filtra y traduce en el servidor; al cliente solo viajan los vinos de la linea.
export const SublineSection = ({ wineData, line, subline }: SublineSectionProps) => {
  const locale = useLocale() as LanguageEnum;
  const tw = useTranslations('wines');
  const { getFilteredWines, getSublineDescription, hasMultipleSublines } = useSublineData(wineData, line, subline);

  const indexes = hasMultipleSublines ? [0, 1] : [0];
  const sections: WineSection[] = indexes.map((index) => {
    const description = getSublineDescription(index, locale);
    return {
      title: description?.title,
      content: description?.content,
      wines: getFilteredWines(index).map((wine) => translateWine(tw, wine)),
    };
  });

  return <WineSections sections={sections} />
}
