// Ejemplo de uso del hook useTranslateFobPrices

import { useTranslateFobPrices } from '@/hooks';
import { Subline } from '@/interfaces';
import { PRECIOS_FOB } from '@/mock/precios-fob';

// Componente de ejemplo
export function FobPricesComponent() {
  // Obtener el precio FOB para la sublinea "burbujas"
  const bubujasPrices = PRECIOS_FOB.find(price => price.sublineId === Subline.burbujas);
  
  // Usar el hook para traducir los precios FOB
  const translatedBubujasprices = useTranslateFobPrices(bubujasPrices!);

  // Obtener el precio FOB para la sublinea "vinland"
  const vinlandPrices = PRECIOS_FOB.find(price => price.sublineId === Subline.vinland);
  
  // Usar el hook para traducir los precios FOB
  const translatedVinlandPrices = useTranslateFobPrices(vinlandPrices!);

  return (
    <div>
      <h2>Precios FOB - Burbujas</h2>
      <div>
        <p>Label: {translatedBubujasPrices.unitPallet.label}</p>
        <p>Price: ${translatedBubujasPrices.unitPallet.price}</p>
        <p>Discount: {translatedBubujasPrices.unitPallet.discountPrice}</p>
      </div>

      <h2>Precios FOB - Vinland</h2>
      <div>
        <p>Label: {translatedVinlandPrices.unitPallet.label}</p>
        <p>Price: ${translatedVinlandPrices.unitPallet.price}</p>
        <p>Discount: {translatedVinlandPrices.unitPallet.discountPrice}</p>
      </div>
    </div>
  );
}

// Ejemplo de iteración sobre todas las sublineas
export function AllFobPricesComponent() {
  return (
    <div>
      {PRECIOS_FOB.map((fobPrice) => {
        const translatedPrice = useTranslateFobPrices(fobPrice);
        
        return (
          <div key={translatedPrice.sublineId}>
            <h3>{translatedPrice.sublineId}</h3>
            
            <div className="pricing-tier">
              <h4>Unit Pallet</h4>
              <p>{translatedPrice.unitPallet.label}</p>
              <p>Price: ${translatedPrice.unitPallet.price}</p>
              <p>Discount: {translatedPrice.unitPallet.discountPrice}</p>
            </div>

            <div className="pricing-tier">
              <h4>Four Pallets</h4>
              <p>{translatedPrice.fourPallets.label}</p>
              <p>Price: ${translatedPrice.fourPallets.price}</p>
              <p>Discount: {translatedPrice.fourPallets.discountPrice}</p>
            </div>

            <div className="pricing-tier">
              <h4>Nine Pallets</h4>
              <p>{translatedPrice.ninePallets.label}</p>
              <p>Price: ${translatedPrice.ninePallets.price}</p>
              <p>Discount: {translatedPrice.ninePallets.discountPrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
