import type { NewWine } from '@/interfaces';

export interface TranslatedWine extends Omit<NewWine, 'name' | 'description' | 'elaboration' | 'pairing' | 'vineyardHeight' | 'conservation' | 'harvestDate'> {
  name: string;
  description: string;
  elaboration: string;
  vineyardHeight: string;
  conservation: string;
  pairing: string;
  harvestDate: string;
}

type Translator = (key: string, values?: { defaultValue?: string }) => string;

/**
 * Traduce los campos de texto de un vino. Recibe el traductor del namespace `wines`
 * (`useTranslations('wines')` o `getTranslations('wines')`), por lo que puede usarse
 * tanto en servidor como en cliente. El texto del mock actua como fallback.
 */
export const translateWine = (t: Translator, wine: NewWine): TranslatedWine => ({
  ...wine,
  name: t(`${wine.id}.name`, { defaultValue: wine.name }),
  description: t(`${wine.id}.description`, { defaultValue: wine.description }),
  elaboration: t(`${wine.id}.elaboration`, { defaultValue: wine.elaboration }),
  vineyardHeight: t(`${wine.id}.vineyardHeight`, { defaultValue: wine.vineyardHeight }),
  pairing: t(`${wine.id}.pairing`, { defaultValue: wine.pairing }),
  harvestDate: t(`${wine.id}.harvestDate`, { defaultValue: wine.harvestDate }),
  conservation: t(`${wine.id}.conservation`, { defaultValue: wine.conservation }),
});
