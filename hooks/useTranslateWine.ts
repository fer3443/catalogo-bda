import { useTranslations } from 'next-intl';
import { NewWine } from '@/interfaces';

interface TranslatedWine extends Omit<NewWine, 'name' | 'description' | 'elaboration' | 'pairing' | 'vineyardHeight' | 'conservation' | 'harvestDate'> {
  name: string;
  description: string;
  elaboration: string;
  vineyardHeight: string;
  conservation: string;
  pairing: string;
  harvestDate: string;
}

export const useTranslateWine = (wine: NewWine): TranslatedWine => {
  const t = useTranslations('wines');

  const wineKey = wine.id;
  const name = t(`${wineKey}.name`, { defaultValue: wine.name });
  const description = t(`${wineKey}.description`, { defaultValue: wine.description });
  const elaboration = t(`${wineKey}.elaboration`, { defaultValue: wine.elaboration });
  const vineyardHeight = t(`${wineKey}.vineyardHeight`, { defaultValue: wine.vineyardHeight });
  const pairing = t(`${wineKey}.pairing`, { defaultValue: wine.pairing });
  const harvestDate = t(`${wineKey}.harvestDate`, { defaultValue: wine.harvestDate });
  const conservation = t(`${wineKey}.conservation`, { defaultValue: wine.conservation });

  return {
    ...wine,
    name,
    description,
    elaboration,
    vineyardHeight,
    pairing,
    harvestDate,
    conservation
  };
};

//TODO: agregar storage, servingTemperature, alcohol, altitude