import { useTranslations } from 'next-intl';
import { Subline } from '@/interfaces';
import { useTranslateFobPrices } from '@/hooks';
import { PRECIOS_FOB } from '@/mock/precios-fob';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TablePricesFobProps {
  subline: Subline;
}

export function TablePricesFob({ subline }: TablePricesFobProps) {
  const t = useTranslations('fobTable');

  const fobPrice = PRECIOS_FOB.find(price => price.sublineId === subline);

  if (!fobPrice) {
    return <div className="text-center text-gray-500">{t('subline')} no encontrada</div>;
  }

  const translatedPrice = useTranslateFobPrices(fobPrice);

  return (
    <div className="w-full rounded-lg border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>{t('units')}</TableHead>
            <TableHead>{t('pricePerCase')}</TableHead>
            <TableHead className="text-right">{t('discount')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Unit Pallet Row */}
          <TableRow>
            <TableCell className="font-medium">{t('unitPallet')}</TableCell>
            <TableCell className="text-sm">
              {translatedPrice.unitPallet.label}
            </TableCell>
            <TableCell className="text-sm font-semibold">
              ${translatedPrice.unitPallet.price}
            </TableCell>
            <TableCell className="text-right text-sm text-gray-600">
              {translatedPrice.unitPallet.discountPrice}
            </TableCell>
          </TableRow>

          {/* Four Pallets Row */}
          <TableRow>
            <TableCell className="font-medium">{t('fourPallets')}</TableCell>
            <TableCell className="text-sm">
              {translatedPrice.fourPallets.label}
            </TableCell>
            <TableCell className="text-sm font-semibold">
              ${translatedPrice.fourPallets.price}
            </TableCell>
            <TableCell className="text-right text-sm text-gray-600">
              {translatedPrice.fourPallets.discountPrice}
            </TableCell>
          </TableRow>

          {/* Nine Pallets Row */}
          <TableRow>
            <TableCell className="font-medium">{t('ninePallets')}</TableCell>
            <TableCell className="text-sm">
              {translatedPrice.ninePallets.label}
            </TableCell>
            <TableCell className="text-sm font-semibold">
              ${translatedPrice.ninePallets.price}
            </TableCell>
            <TableCell className="text-right text-sm text-gray-600">
              {translatedPrice.ninePallets.discountPrice}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
