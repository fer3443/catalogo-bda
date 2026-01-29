import { useTranslations } from 'next-intl';
import { Subline } from '@/interfaces';

interface InfoPerPallet {
  label: string;
  price: string;
  discountPrice: string;
}

interface TranslatedFobPrice {
  sublineId: Subline;
  unitPallet: InfoPerPallet;
  fourPallets: InfoPerPallet;
  ninePallets: InfoPerPallet;
}

interface FobPriceInput {
  sublineId: Subline;
  unitPallet: InfoPerPallet;
  fourPallets: InfoPerPallet;
  ninePallets: InfoPerPallet;
}

export const useTranslateFobPrices = (fobPrice: FobPriceInput): TranslatedFobPrice => {
  const t = useTranslations('fobPrices');

  const sublineKey = fobPrice.sublineId;
  
  const unitPallet: InfoPerPallet = {
    label: t(`${sublineKey}.unitPallet.label`, { defaultValue: fobPrice.unitPallet.label }),
    price: t(`${sublineKey}.unitPallet.price`, { defaultValue: fobPrice.unitPallet.price }),
    discountPrice: t(`${sublineKey}.unitPallet.discountPrice`, { defaultValue: fobPrice.unitPallet.discountPrice }),
  };

  const fourPallets: InfoPerPallet = {
    label: t(`${sublineKey}.fourPallets.label`, { defaultValue: fobPrice.fourPallets.label }),
    price: t(`${sublineKey}.fourPallets.price`, { defaultValue: fobPrice.fourPallets.price }),
    discountPrice: t(`${sublineKey}.fourPallets.discountPrice`, { defaultValue: fobPrice.fourPallets.discountPrice }),
  };

  const ninePallets: InfoPerPallet = {
    label: t(`${sublineKey}.ninePallets.label`, { defaultValue: fobPrice.ninePallets.label }),
    price: t(`${sublineKey}.ninePallets.price`, { defaultValue: fobPrice.ninePallets.price }),
    discountPrice: t(`${sublineKey}.ninePallets.discountPrice`, { defaultValue: fobPrice.ninePallets.discountPrice }),
  };

  return {
    sublineId: fobPrice.sublineId,
    unitPallet,
    fourPallets,
    ninePallets,
  };
};
