import { useTranslations } from 'next-intl';
import { NewWine } from '@/interfaces';
import { translateWine, TranslatedWine } from '@/utils/translate-wine';

export const useTranslateWine = (wine: NewWine): TranslatedWine => {
  const t = useTranslations('wines');
  return translateWine(t, wine);
};

//TODO: agregar storage, servingTemperature, alcohol, altitude
