import { Lines, Wine } from "@/interfaces";


export const wineData: Wine[] = [
  // Línea Tinquiao
  {
    id: "tinquiao-1",
    name: "Tinquiao Reserva",
    line: Lines.tinquiao,
    variety: "Cabernet Sauvignon",
    description:
      "Un vino tinto de cuerpo completo con notas intensas de frutas negras, especias y un toque de vainilla. Ideal para los amantes de los vinos robustos y complejos.",
    image: "/botella-de-vino-tinto-reserva-premium.jpg",
    technicalSheet: {
      region: "Valle del Maipo, Chile",
      alcohol: "14.5%",
      temperature: "16-18°C",
      aging: "12 meses en barrica de roble francés",
      pairing: "Carnes rojas, cordero asado, quesos maduros",
    },
  },
  {
    id: "tinquiao-2",
    name: "Tinquiao Gran Reserva",
    line: Lines.tinquiao,
    variety: "Malbec",
    description:
      "Elegante vino con aromas a ciruela madura, chocolate y notas especiadas. Su paladar sedoso y equilibrado lo hace perfecto para ocasiones especiales.",
    image: "/botella-de-vino-malbec-gran-reserva-elegante.jpg",
    technicalSheet: {
      region: "Mendoza, Argentina",
      alcohol: "14%",
      temperature: "16-18°C",
      aging: "18 meses en barrica de roble americano",
      pairing: "Parrilladas, carnes a la brasa, pastas con salsas intensas",
    },
  },
  {
    id: "tinquiao-3",
    name: "Tinquiao Clásico",
    line: Lines.tinquiao,
    variety: "Carmenère",
    description:
      "Vino de carácter único con notas herbáceas, frutas rojas y un final persistente. Representa la esencia de la viticultura chilena.",
    image: "/botella-de-vino-carmenere-chile-premium.jpg",
    technicalSheet: {
      region: "Valle de Colchagua, Chile",
      alcohol: "13.5%",
      temperature: "15-17°C",
      aging: "8 meses en barrica de roble",
      pairing: "Carnes rojas especiadas, guisos, vegetales asados",
    },
  },

  // Línea Espumantes
  {
    id: "espumante-1",
    name: "Espumante Brut Nature",
    line: Lines.espumantes,
    variety: "Chardonnay - Pinot Noir",
    description:
      "Espumante refinado con burbujas finas y persistentes. Aromas cítricos y florales con un final seco y refrescante. Perfecto para celebraciones.",
    image: "/botella-de-champagne-espumante-brut-elegante.jpg",
    technicalSheet: {
      region: "Valle de Casablanca, Chile",
      alcohol: "12%",
      temperature: "6-8°C",
      aging: "Método tradicional, 24 meses sobre lías",
      pairing: "Mariscos, sushi, aperitivos, caviar",
    },
  },
  {
    id: "espumante-2",
    name: "Espumante Rosé",
    line: Lines.espumantes,
    variety: "Pinot Noir",
    description:
      "Delicado espumante rosado con notas de fresas, frambuesas y pétalos de rosa. Su elegancia y frescura lo hacen ideal para momentos especiales.",
    image: "/botella-de-espumante-rose-champagne-rosa-premium.jpg",
    technicalSheet: {
      region: "Valle de Limarí, Chile",
      alcohol: "11.5%",
      temperature: "6-8°C",
      aging: "Método tradicional, 18 meses",
      pairing: "Postres de frutos rojos, salmón ahumado, ensaladas",
    },
  },
  {
    id: "espumante-3",
    name: "Espumante Extra Brut",
    line: Lines.espumantes,
    variety: "Chardonnay",
    description:
      "Espumante de alta expresión con mínimo contenido de azúcar. Notas de manzana verde, almendras tostadas y una acidez vibrante.",
    image: "/botella-de-espumante-extra-brut-champagne-blanco.jpg",
    technicalSheet: {
      region: "Valle de Aconcagua, Chile",
      alcohol: "12.5%",
      temperature: "6-8°C",
      aging: "Método tradicional, 30 meses",
      pairing: "Ostras, carpaccios, quesos blandos",
    },
  },

  // Línea Vinland
  {
    id: "vinland-1",
    name: "Vinland Sauvignon Blanc",
    line: Lines.vikinga,
    variety: "Sauvignon Blanc",
    description:
      "Vino blanco fresco y vibrante con aromas a frutas tropicales, cítricos y hierbas frescas. Su acidez equilibrada lo hace muy versátil.",
    image: "/botella-de-vino-blanco-sauvignon-blanc-premium.jpg",
    technicalSheet: {
      region: "Valle de Leyda, Chile",
      alcohol: "13%",
      temperature: "8-10°C",
      aging: "Sin crianza, fermentación en tanques de acero",
      pairing: "Pescados blancos, mariscos, ensaladas frescas",
    },
  },
  {
    id: "vinland-2",
    name: "Vinland Chardonnay",
    line: Lines.vikinga,
    variety: "Chardonnay",
    description:
      "Chardonnay elegante con notas de frutas de carozo, mantequilla y vainilla. Su textura cremosa y final prolongado ofrecen una experiencia única.",
    image: "/botella-de-vino-chardonnay-blanco-barrica-premium.jpg",
    technicalSheet: {
      region: "Valle del Maipo, Chile",
      alcohol: "13.5%",
      temperature: "10-12°C",
      aging: "6 meses en barrica de roble francés",
      pairing: "Pescados en salsa cremosa, pollo, risotto",
    },
  },
  {
    id: "vinland-3",
    name: "Vinland Riesling",
    line: Lines.vikinga,
    variety: "Riesling",
    description:
      "Riesling aromático con dulzor balanceado, notas florales, miel y frutas blancas. Un vino versátil que sorprende en cada copa.",
    image: "/botella-de-vino-riesling-blanco-dulce-premium.jpg",
    technicalSheet: {
      region: "Valle de Curicó, Chile",
      alcohol: "11.5%",
      temperature: "8-10°C",
      aging: "Sin crianza, fermentación en tanques",
      pairing: "Comida asiática, postres, foie gras",
    },
  },
]
