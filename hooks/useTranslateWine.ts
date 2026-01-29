import { useTranslations } from 'next-intl';
import { NewWine } from '@/interfaces';

interface TranslatedWine extends Omit<NewWine, 'name' | 'description' | 'elaboration' | 'pairing'> {
  name: string;
  description: string;
  elaboration: string;
  pairing: string;
}

export const useTranslateWine = (wine: NewWine): TranslatedWine => {
  const t = useTranslations('wines');

  const wineKey = wine.id;
  const name = t(`${wineKey}.name`, { defaultValue: wine.name });
  const description = t(`${wineKey}.description`, { defaultValue: wine.description });
  const elaboration = t(`${wineKey}.elaboration`, { defaultValue: wine.elaboration });
  const pairing = t(`${wineKey}.pairing`, { defaultValue: wine.pairing });

  return {
    ...wine,
    name,
    description,
    elaboration,
    pairing,
  };
};

//TODO: agregar storage, harvestDate, servingTemperature, alcohol, altitude