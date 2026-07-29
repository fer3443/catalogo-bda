import { Subline } from '@/interfaces';

interface InfoPerPallet {
    label: string;
    price: string;
    discountPrice: string;
};

interface PreciosFob{
  sublineId: Subline;
  unitPallet: InfoPerPallet;
  fourPallets: InfoPerPallet;
  ninePallets: InfoPerPallet;
}

export const PRECIOS_FOB: PreciosFob[] = [
  {
    sublineId: Subline.burbujas,
    unitPallet: {
      label: "(80 cajas) hasta 3 pallets (240 cajas)",
      price:"94,23",
      discountPrice: "Precio neto"
    },
    fourPallets: {
      label:"(320 cases) hasta 8 pallets (640 cajas)",
      price: "84,81",
      discountPrice: "10%"
    },
    ninePallets: {
      label: "(720 cajas) en adelante",
      price: "80,09",
      discountPrice: "15%"
    }
  },
  {
    sublineId: Subline.pet,
    unitPallet: {
      label: "(80 cajas) hasta 3 pallets (240 cajas)",
      price:"65,96",
      discountPrice: "Precio neto"
    },
    fourPallets: {
      label:"(320 cajas) hasta 8 pallets (640 cajas)",
      price: "59,36",
      discountPrice: "10%"
    },
    ninePallets: {
      label: "(720 cajas) en adelante",
      price: "68,08",
      discountPrice: "15%"
    }
  },
  {
    sublineId: Subline.tinquiao,
    unitPallet: {
      label: "(112 cajas) a 3 pallets (336 cajas)",
      price:"43,66",
      discountPrice: "Precio neto"
    },
    fourPallets: {
      label:"(320 cajas) hasta 8 pallets (640 cajas)",
      price: "39,29",
      discountPrice: "10%"
    },
    ninePallets: {
      label: "(720 cajas) en adelante",
      price: "37,11",
      discountPrice: "15%"
    }
  },
  {
    sublineId: Subline.drakkar,
    unitPallet: {
      label: "(112 cajas) a 3 pallets (336 cajas)",
      price:"118,38",
      discountPrice: "Precio neto"
    },
    fourPallets: {
      label:"(320 cajas) hasta 8 pallets (640 cajas)",
      price: "106,52",
      discountPrice: "10%"
    },
    ninePallets: {
      label: "(720 cajas) en adelante",
      price: "100,62",
      discountPrice: "15%"
    }
  },
  {
    sublineId: Subline.vinland,
    unitPallet: {
      label: "(112 cajas) a 3 pallets (336 cajas)",
      price:"118,38",
      discountPrice: "Precio neto"
    },
    fourPallets: {
      label:"(320 cajas) hasta 8 pallets (640 cajas)",
      price: "106,52",
      discountPrice: "10%"
    },
    ninePallets: {
      label: "(720 cajas) en adelante",
      price: "100,62",
      discountPrice: "15%"
    }
  },
  {
    sublineId: Subline.blend,
    unitPallet: {
      label: "(112 cajas) a 3 pallets (336 cajas)",
      price:"61,56",
      discountPrice: "Precio neto"
    },
    fourPallets: {
      label:"(320 cajas) hasta 8 pallets (640 cajas)",
      price: "55,40",
      discountPrice: "10%"
    },
    ninePallets: {
      label: "(1,008 cajas) y más",
      price: "52,33",
      discountPrice: "15%"
    }
  },
]