import { LineDescription, Lines, NameWine, NewWine, Subline } from "@/interfaces";

export const newWineData: NewWine[] = [
  {
    id: "torrontes-brut-nature",
    name: "Torrontés Brut Nature",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199223/e-brut_ecamte.webp",
    description: "Espléndido espumante único en el Valle, presenta excelente calidad y persistencia en sus Burbujas. Sus aromas recuerdan rosas, durazno blanco y manzana verde, característicos del Torrontés, con notas de pan fresco y levadura producidos por la fermentación en botella. En boca resulta de gran estructura y agradable sensación fresca, que invita a seguir tomándolo.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración de la fruta y fermentaciones a bajas temperaturas para lograr aromas únicos, burbujas finas y persistentes. Segunda fermentación dentro de cada botella. Toma de espuma y degüelle realizados en forma artesanal buscando delicadeza en el producto. Agregado de licor de Expedición elaborado por nosotros para darle un matiz dulzón, propio de los Extra Brut.",
    alcohol: "12 %.",
    conservation: "En un lugar oscuro y sin vibraciones.",
    harvestDate: "Principios de Enero, bien temprano y a mano, cajas de 15 Kg.",
    pairing: "Este Torrontés es perfecto con sabores frescos, especiados y picantes. Lo puedes probar con pescados cocinados, con platos con maíz (humita), pollo con mostaza y miel, postres con frutas frescas.",
    suggar: "11G/L.",
    temperature: "Entre 3º y 6º C.",
    timeOnLees: "18 meses",
    variety: "Torrontés 100%.",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.espumantes,
    subline: Subline.burbujas
  },
  {
    id: "torrontes-extra-brut",
    name: "Torrontés Extra Brut",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199220/e-extra-brut_rxsuty.webp",
    description: "Este espumante Torrontés emblemático de Cafayate, destaca por su frescura y facilidad para tomar, tiene notas a pan fresco, maracuyá y durazno. Burbujas delicadas y pequeñas producidas por la segunda fermentación en botella. Gran estructura en boca, envolvente y persistente",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración de la fruta y fermentaciones a bajas temperaturas para lograr aromas únicos, burbujas finas y persistentes. Segunda fermentación dentro de cada botella. Toma de espuma y degüelle realizados en forma artesanal buscando delicadeza en el producto. Agregado de licor de Expedición elaborado por nosotros para darle un matiz dulzón propio de los Extra Brut.",
    alcohol: "12 %",
    conservation: "En un lugar oscuro y sin vibraciones.",
    harvestDate: "Principios de enero bien temprano y a mano, cajas de 15 KG.",
    pairing: "Ideal para acompañar ensaladas frescas, pastas con crema, empanadas",
    suggar: "11 G/L.",
    temperature: "Entre 3° y 6°C.",
    variety: "Torrontés 100%",
    vineyardAge: "2002",
    timeOnLees: "18 meses",
    vineyardHeight: "1.800 metros sobre el nivel del mar.",
    line: Lines.espumantes,
    subline: Subline.burbujas
  },
  {
    id: "rose-malbec",
    name: "Rosé Malbec",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199223/e-rose_fhu9si.webp",
    description: "Espumante que destaca la uva emblemática de Argentina, con un color seductor y aromas a frutos rojos que se convierten luego en mermeladas, y frutos secos, producto de su re-fermentación en botella. Agradable matices frescos y maduros, con excelente calidad y persistencia en sus Burbujas, que lo hace aun mas fácil de tomar.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Trabajando a bajas temperaturas desde el ingreso de la uva a bodega para obtener un color atractivo en la prensada y, junto a fermentaciones controladas, logramos aromas únicos, burbujas finas y persistentes. Toma de espuma realizada en forma artesanal y dedicada a la delicadeza del producto. Segunda fermentación dentro de cada botella. Degüelle producido a mano y posterior tapado final sin ningún agregado, se ofrece como sale de nuestra cava luego de la fermentación.",
    alcohol: "13,5 %",
    conservation: "12 meses",
    harvestDate: "Principios de Febrero.",
    pairing: "Ideal para acompañar risotto de hongos, cabutia rellena, sushi, pastas rellenas",
    suggar: "5 g/l",
    temperature: "Entre 3º y 6º C.",
    timeOnLees: "12 meses.",
    variety: "Malbec 100 %.",
    vineyardAge: "1999",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.espumantes,
    subline: Subline.burbujas
  },
  {
    id: "chardonnay-nature",
    name: "Chardonnay Nature",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199220/e-Chardonnay_xyi64m.webp",
    description: "Varietal reina de los espumantes, sus aromas hacen recordar elegantes notas a perfumes frutales, miel y pan tostado. En boca resulta sabores poderosos y cercano a ananá (o piña). Con un cuerpo ligero, con acidez pronunciada y buen equilibrio, que invita a seguir bebiéndolo",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Tradicional o Champenoise. Maceración de la fruta y fermentación con bajas temperaturas para obtener una finesa única y aromas persistentes. Todo elaborado en un modo artesanal. Segunda fermentación dentro de cada botella. Degüelle producido en forma manual y encorchado final sin ninguna adición. Se encuentra disponible cuando sale de la cava, después de girar la botella en el pupitre.",
    alcohol: "12% Alc. Volumen",
    conservation: "En un lugar oscuro y sin vibraciones.",
    harvestDate: "Comienzos de enero, muy temprano, manual y en cajas de 15 kg de un modo artesanal buscando delicadeza en el producto.",
    pairing: "Completa a la perfección platos que lleven como base mantequilla, pollo asado con una salsa cítrica con crema, quesos curados estilo alpino, parmesano, verduras al wok con hongos, langosta o vieiras.",
    suggar: "3 G/L",
    temperature: "Entre 3° y 6° C.",
    variety: "Chardonnay 100%",
    timeOnLees: "12 meses",
    vineyardAge: "1999",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.espumantes,
    subline: Subline.burbujas
  },
  {
    id: "pet-nat-torrontes",
    name: "Pet Nat",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199220/e-pet-nat-torrontes_x33jaz.webp",
    description: "método de elaboración que nació por accidente en Francia en el Siglo XVI. Este método ancestral resulta en un vino espumoso a través de una sola fermentación, a diferencia del método tradicional o Champenoise en el que se producen dos fermentaciones. 'Se caracteriza por tener un proceso de elaboración sin agregados, solo acompañando por la transformación de azúcar en alcohol de manera paulatina.Como termina su fermentación en la misma botella que luego se comercializa, no es filtrado, por lo que presenta una ¨neblina¨ que es parte de su expresión natural y bien característica de este método'",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Pet Nat o Pétillant Naturel",
    alcohol: "11 %",
    conservation: "8 MESES EN BOTELLA",
    harvestDate: "PRIMER QUINCENA DE FEBRERO. COSECHADO A MANO, EN CAJAS DE 15 KG. PRESELECCIÓN EN VIÑEDO",
    pairing: "Ideal para acompañar las tardes veraniegas y calurosas, antes de alguna comida, como refresco",
    suggar: "3 g/lt",
    temperature: "Temperatura de servicio de este vino es entre 3º y 6º C",
    variety: "Torrontés 100%",
    vineyardAge: "1996",
    vineyardHeight: "1.800 METROS SOBRE EL NIVEL DEL MAR.",
    line: Lines.espumantes,
    subline: Subline.pet
  },
  {
    id: "pet-nat-rose",
    name: "Pet Nat Rosé",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199222/e-pet-nat-rose_wxenld.webp",
    description: "Pet Nat o Pétillant Naturel, significa \"naturalmente espumoso\": un método de elaboración que nació por accidente en Francia en el Siglo XVI. Este método ancestral resulta en un vino espumoso a través de una sola fermentación, a diferencia del método tradicional o Champenoise en el que se producen dos fermentaciones.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "\"Se caracteriza por tener un proceso de elaboración sin agregados, sólo acompañando por la transformación de azúcar en alcohol de manera paulatina. Como termina su fermentación en la misma botella, la que luego se comercializa, no es filtrado, por lo que presenta una ¨neblina¨ que es parte de su expresión natural y bien característica de este método.",
    alcohol: "12,6 %",
    conservation: "8 meses en botella.",
    harvestDate: "Primer quincena de febrero. Cosechado a mano, en cajas de 15 kg. Preselección en viñedo.",
    pairing: "Ideal para acompañar las tardes veraniegas y calurosas, con un «fresco Rosé o informalmente con su pareja»",
    suggar: "3,5 G/L",
    temperature: "Entre 3º y 6º C.",
    variety: "Malbec 100%.",
    vineyardAge: "1996",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.espumantes,
    subline: Subline.pet
  },
  {
    id: "torrontes-tinquiao",
    name: "Torrontés",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199221/t-torrontes_pgm5ok.webp",
    description: "Varietal Emblemático de Cafayate - Norte Argentino . Color límpido como el agua, genera sensación de frescura y fineza. Aroma cítricos y flores blancas envuelven el ambiente. Sutil cremosidad y mineralizada en boca, procovando un equilibrio único en el paladar.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración de la uva con frío antes de su prensado. Fermentación a bajas temperaturas para preservar frescura.",
    alcohol: "11.5 %",
    conservation: "En lugar fresco, oscuro y sin vibraciones.",
    harvestDate: "Principio de Febrero, cosechado a mano en cajas de 15 Kg. Preselección en viñedo.",
    pairing: "Ideal para acompañar quesos fuertes, mariscos, sushi y también empanadas salteñas. Se recomienda con comidas en verano y como aperitivo en invierno.",
    suggar: "",
    temperature: "Entre 10° y 12° C.",
    variety: "Torrontés 100%.",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.tinquiao
  },
  {
    id: "torrontes-dulce-natural",
    name: "Torrontés Dulce Natural",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199221/t-torrontes-dulce_b1rafv.webp",
    description: "De color amarillo verdoso atractivo y brillante, invita a la boca sus aromas cítricos preponderantes mezclados con una sensación tropical. Tiene una entrada dulce equilibrada con delicadas notas a limón, pomelo, durazno blanco. El dulce Natural de la uva genera una untuosidad interesante que al sentirlo recuerda a miel en panal, con un final presente por un largo tiempo.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración y fermentación con levaduras seleccionadas naturalmente de la uva. Fermentación lenta y con frío, hasta obtener el azúcar y alcohol deseados.",
    alcohol: "9.8 %",
    conservation: "En lugar fresco, oscuro y sin vibraciones.",
    harvestDate: "Marzo. Cosecha bien temprano y a mano. Cajas de 15 Kg.",
    pairing: "Ideal para beber como aperitivo acompañando tabla de quesos y/o frutos secos. Tartas dulces con crema. También para preparar cocteles.",
    suggar: "",
    temperature: "Entre 10° y 12° C.",
    variety: "Torrontés 100%.",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.tinquiao
  },
  {
    id: "rose-malbec-tinquiao",
    name: "Rosé Malbec",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199220/t-tinquiao-rose_i4kpze.webp",
    description: "Predomina un rosado atractivo y brillante. En boca tiene una entrada agradable y de buen volumen, con una acidez vibrante y fresca que le da carácter. Entrelazan aromas de cereza, guinda, frutilla; final envolvente en boca que recuerda a mermelada recién realizada de frutos rojos.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Prensado directo suave de la uva Malbec, obteniendo un color leve, pero con un volumen interesante, que luego persiste en el vino. Fermentación 30 días del mosto sin el orujo, a bajas temperaturas. Removido de lías por 4 meses en tanque.",
    alcohol: "13,5 %",
    conservation: "15 meses en botella.",
    harvestDate: "Primera quincena de febrero. Cosechado a mano, en cajas de 15 kg. Preselección en viñedo.",
    pairing: "Ideal para acompañar aperitivos con mariscos, verduras a la parrilla, ensaladas con quinoa, carnes blancas con salsas cítricas, postres cremosos que tengan frutos rojos.",
    suggar: "",
    temperature: "Entre 6° y 8° C.",
    variety: "Malbec 100%.",
    vineyardAge: "1996",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.tinquiao
  },
  {
    id: "cabernet-sauvignon",
    name: "Cabernet Sauvignon",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199221/t-cabernet-sauvignon_b9zjau.webp",
    description: "Color rubí y violáceo con detalles negruzcos. Aromas que recuerdan a frutos negros, especies mentoladas, pimiento verde. En boca y nariz se pueden encontrar los mismos aromas, dejando la sensación de continuar bebiéndolo. De acidez punzante y taninos suaves, que le otorga buen cuerpo y un final elegante y persistente.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración de la uva con frío. Fermentación 10 días, 23°-28° C. Se usaron pizoneos manuales. Contacto con roble durante fermentación, buscando la mayor expresión del varietal.",
    alcohol: "14,5 %",
    conservation: "Potencial de guarda unos 8 años. Se recomienda decantar una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones.",
    storedInCellar: "12 meses en tanque y luego 6 meses en botella. Estamos convencidos que el Cabernet Sauvignon del Valle Calchaquí se expresa de manera única. 6 años puedes guardarlo y estará impecable.",
    harvestDate: "Fin de Marzo, cosechado a mano en cajas de 15 Kg. Preselección en viñedo.",
    pairing: "Ideal para acompañar comidas con salsas fuertes, cazuelas, empanadas.",
    suggar: "",
    temperature: "Entre 14º y 16º C.",
    variety: "Cabernet Sauvignon 100%.",
    vineyardAge: "2002",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.tinquiao
  },
  {
    id: "malbec",
    name: "Malbec",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199220/t-malbec_w4vdeq.webp",
    description: "Color púrpura con matices rojizos, oscuro en el centro. Aromas que recuerdan a frutos rojos, destacándose la ciruela y cereza sobre-madura. Es inicialmente suave, luego se torna complejo y estructurado, con un acabado persistente. Es un vino con mucha personalidad, debido a la altitud y las grandes amplitudes térmicas de los viñedos Cafayateños.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración de la uva con frío. Fermentación 20 días, 23°-28° C. Se usaron pizoneos manuales, mojando el sombrero suavemente. Contacto con roble durante fermentación, buscando explosión de fruta. Fermentación maloláctica en otoño. Maceración larga (3 semanas). Envasado después de un año en tanque. En bodega, 6 meses en botella.",
    alcohol: "14,5 %",
    conservation: "Potencial de guarda unos 8 años. Se recomienda decantar una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones.",
    harvestDate: "Principio de Marzo, cosechado a mano en cajas de 15 Kg. Preselección en viñedo.",
    pairing: "Ideal para acompañar carnes rojas o pastas con una buena salsa.",
    suggar: "",
    temperature: "Entre 14º y 16º C.",
    variety: "Malbec 100%",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.tinquiao
  },
  {
    id: "cabernet-franc",
    name: "Cabernet Franc",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199221/t-cabernet-franc_o0dp9a.webp",
    description: "Color rubí y violáceo con detalles negruzcos. Aromas que recuerdan a frutos negros, especies mentoladas, pimiento verde. En boca y nariz se pueden encontrar los mismos aromas, dejando la sensación de continuar bebiéndolo. De acidez punzante y taninos suaves, que le otorga buen cuerpo y un final elegante y persistente.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración de la uva con frío. Fermentación 15 días, 23°-28° C. Se usaron pizoneos manuales, mojando el sombrero suavemente. Contacto con roble durante fermentación buscando la mayor expresión del varietal. Fermentación maloláctica en otoño.",
    alcohol: "14,5 %",
    conservation: "Potencial de guarda unos 8 años. Se recomienda decantar una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones.",
    harvestDate: "Principio de Marzo, cosechado a mano en cajas de 15 Kg. Preselección en viñedo.",
    pairing: "Ideal para acompañar carnes cocinadas a leña, embutidos y pescados.",
    suggar: "",
    temperature: "Entre 16° y 18° C.",
    storedInCellar: "12 meses en tanque, más 6 meses en botella.",
    variety: "Cabernet Franc 100%.",
    vineyardAge: "2016",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.tinquiao
  },
  {
    id: "tinquiao-torrontes-liviano",
    name: "Tinquiao Torrontes Liviano",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199221/t-tinquiao-liviano_i5fzii.webp",
    description: " - ",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: " - ",
    alcohol: " - ",
    conservation: "Conservar en lugar fresco, oscuro, y sin vibraciones.",
    harvestDate: "Muy temprana, a principios de marzo, realizada de forma manual en cajas de 15 kg (33 lb). Preselección en viñedos.",
    pairing: "Es un vino fresco, ideal como aperitivo antes de las comidas, y para acompañar pastas, pescados a la parrilla, humita (preparación a base de maíz y queso) y pastel de choclo.",
    suggar: " - ",
    temperature: "Entre 3º y 7º C.",
    variety: "Torrontes 100%",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.tinquiao
  },
  {
    id: "blend",
    name: "Blend",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199221/t-blend_urcxbk.webp",
    description: "Tri-varietal de color rojo oscuro con matices violáceos. Aromas que me transportan a frutos rojos maduros y especies de campo. En boca, los aromas expresados por cada varietal se entremezclan formando un bouquet fino y elegante.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Preselección de la uva en el viñedo. Cosecha manual en pequeñas cajas. Maceración de la uva con frío antes de su molienda. Fermentación en pequeños tanques, 23 - 28° C. Se usaron pizoneos manuales. Sombrero sumergido en pos-fermentación. Contacto con roble durante fermentación y luego en barricas usadas por 12 meses, ganando complejidad en la fruta. Puede contener sedimentos naturales precipitados.",
    alcohol: "14,5 %",
    conservation: "Potencial de guarda unos 8 años. Se recomienda decantar una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones.",
    harvestDate: "año 2022.",
    pairing: "Ideal para acompañar carnes cocinadas a leña, estofados, paellas.",
    suggar: "",
    temperature: "Entre 14º y 16º C.",
    variety: "Malbec 60% - Cabernet Sauvignon 30% - Cabernet Franc 10%",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.tinquiao,
    subline: Subline.blend
  },
  {
    id: "blend-de-blends",
    name: "Blend de Blends",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199222/v-vinland_ok23t9.webp",
    description: "Es una simbiosis entre nuestro origen noruego con la adaptación al nuevo mundo americano, a lo que se refiere este nombre. Este Blend de Varietales (Cabernet Franc, Malbec) , y Blend de Barricas (Roble Americano y Roble Francés) muestran su complejidad y cuerpo en este vino. En su color predomina el rubí con matices violáceos oscuros en el medio.",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración prefermentativa de la uva con frio, buscando inicio de fermentación carbónica, lenta y controlada.",
    alcohol: "14.6 %",
    conservation: "Su potencial de guarda es de 10 años.",
    storedInCellar: "En barrica de roble nuevo durante 15 meses, luego en botella 8 meses.",
    harvestDate: "A mano. Preselección en viñedo, en cajas de 15 Kg.",
    pairing: "Ideal para acompañar costillar al fuego, estofado de carne con champiñones y panceta, verduras ahumadas y quesos como gruyère, gouda, lasagna con base de tomates y verduras asadas",
    suggar: "",
    temperature: "Entre 14º y 16º C.",
    variety: "60% Cabernet Franc - 40% Malbec",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.vikinga,
    subline: Subline.vinland
  },
  {
    id: "drakkar",
    name: "Drakkar",
    image: "https://res.cloudinary.com/dndrbcmkg/image/upload/v1785199222/v-vinland_ok23t9.webp",
    description: "DRAKKAR, que en vikingo antiguo significa 'Dragón', era un amuleto de suerte colocado en la proa y popa de los barcos, símbolo de poder y audacia en el mar. Inspirado en esa misma esencia, nuestro vino Drakkar es un homenaje a la fuerza y el carácter de su origen. Resultado de la fusión de uvas Malbec y Tannat, potencia las intensas notas de frutos rojos maduros y especias con un toque ahumado. Profundo color rojo oscuro intenso.  En nariz, se perciben aromas a mora y cereza negra, que luego se van combinando y formando aromas más complejos, como notas cárnicas y grafito.   En boca su entrada es potente, con mucha personalidad, que con el tiempo se suaviza al oxigenar el vino",
    origin: "CAFAYATE - SALTA - ARGENTINA",
    elaboration: "Maceración prefermentativa de la uva con frío, buscando inicio de fermentación carbónica. Fermentación lenta y controlada. Prensado suave. Añejamiento en barrica de roble durante 15 meses, en botella 8 meses.",
    alcohol: "14.6 %",
    conservation: "12 años. Se recomienda decantar una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones.",
    storedInCellar: "En barrica de roble nuevo durante 15 meses, luego en botella 8 meses.",
    harvestDate: "A mano. Preselección en viñedo, en cajas de 15 Kg.",
    pairing: "En boca, con su cuerpo potente, estructurado y su final persistente, Drakkar es ideal para acompañar momentos especiales robustos y audaces.",
    suggar: "",
    temperature: "Entre 14º y 16º C.",
    variety: "Malbec  60% - Tannat 40% ",
    vineyardAge: "2001",
    vineyardHeight: "1.800 mts. sobre el nivel del mar.",
    line: Lines.vikinga,
    subline: Subline.vinland
  },
]

export const INFO_LINES: Record<Lines, LineDescription[]> = {
  Espumantes: [
    {
      title: NameWine.burbujas,
      content: `Primer Espumante creado 1800 mts sobre el nivel del mar en Argentina, en Método Champenoise. Se realizan 2 fermentaciones, la primera es en tanque de acero inoxidable, la cual se genera  alcohol con la levadura y azúcar propia de la uva, una vez finalizado ese proceso, se le agrega la levadura y el azúcar para genera una segunda fermentación pero en botella, se colocan en pupitres y giro de botellas de 180°, 2 veces al día, para generar las burbujas de manera natural. Cuando consideramos que el tiempo con las lías ya formó unas burbujas delicadas, finas y consistentes, se realiza el degüelle, haciendo un filtrado natural, agregando luego el licor de Expedición. Finalmente colocamos el corcho de Alcornoque y dejamos en estiba para que se equilibre el vino.
    Son Espumantes de alta calidad proporcionando complejidad y elegancia.
    `
    },
    {
      title: NameWine.pet,
      content: `(Abreviatura de Pétillant Naturel, "Naturalmente Espumoso). Está elaborado en Método Ancestral, donde el vino se embotella antes de que la fermentacíon principal termine, dentro de esta botella las levaduras siguen trabajando hasta generar las burbujas. No se filtra y en el fondo quedan los residuos de las levaduras. Es de textura fina, de aromas y colores intensos con espuma delicada y cremosa por lo que se percibe la uva con mayor intensidad.`
    },
  ],
  Tinquiao: [
    {
      title: NameWine.tinquiao,
      content: `Tinquiao, en Cafayate - Salta, en la lengua antigua (Quechua) significa estar alegre, entonado, pero no borracho, el paso previo.
    Son vinos frescos, faciles de tomar y con mucho aroma a la uva.
    Su etiqueta es una foto de la Quebrada de las conchas, y sus diversos colores entre sí, son una sugerencia de que horario debería tomarse el vino.
    `
    }],
  Vikinga: [
    {
      title: NameWine.vinland,
      content: `Vinland, es un Vino de Altura con gran presencia, no solo es un bi-varietal (Cabernet Franc 60% - Malbec 40%), sino que combinamos Roble Americano con Roble Francés, de primer uso, dejando complejidad en aromas y sabores.
      Este vino tiene fuerza Vikinga ya que tenemos descendencia Nórdica y nuestra bodega hace una combinación de culturas entre Noruega y Cafayate, donde nacimos los hijos. Nos inspiramos en su nombre y diseño de etiqueta en un Vikingo muy famoso (Leifr Eiríksson) quien fue a América del Norte, Canadá. a la isla de Terranova, buscando madera, encontró vides y uvas, realizando vino, que luego comercializó como novedad ya que ellos tomaban mucha cerveza e hidromiel.`
    }
  ]
}

interface Notes {
  main_note: {
    bottles_per_box: string;
    box_per_pallet: string;
    pallet_measurements: string;
    total_weight: string;
  }
  internal_note: {
    name: string;
    measures: string;
  }
}

export const TECHNICAL_INFO: Record<string, Notes> = {
  "espumantes": {
    main_note: {
      bottles_per_box: "6 unidades.",
      box_per_pallet: "100 unidades.",
      pallet_measurements: "180 x 100 x 120 cm.",
      total_weight: "1130 kg."
    },
    internal_note: {
      name: "Burbujas de Altura",
      measures: "(20 cajas por piso x 5 pisos = 100 cajas. 10kg/caja x 100 = 1000kg + peso de tarima (14,5kg) - h (33cm/caja) + 14,5cm. tarima)"
    }
  },
  "tinquiao": {
    main_note: {
      bottles_per_box: "6 unidades.",
      box_per_pallet: "140 unidades.",
      pallet_measurements: " 182 x 100 x 120 cm.",
      total_weight: "1130 kg."
    },
    internal_note: {
      name: "Tinquiao",
      measures: "(28 cajas por piso x 5 pisos = 140 cajas. 8kg/caja x 140 = 1120kg + peso de tarima (14,5kg) - h (33,5cm/caja) + 14,5cm tarima)"
    }
  },
  "vikinga": {
    main_note: {
      bottles_per_box: "6 unidades.",
      box_per_pallet: "140 unidades.",
      pallet_measurements: "175 x 100 x 120 cm.",
      total_weight: "1200 kg."
    },
    internal_note: {
      name: "Vinland",
      measures: "(28 cajas por piso x 5 pisos = 140 cajas. 8,5kg/caja x 100 = 1190kg + peso de tarima (14,5kg) - h (32cm/caja) + 14,5cm tarima)"
    }
  }
}
