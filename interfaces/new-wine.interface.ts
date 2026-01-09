import { Lines, Subline } from "./wine.interface";

export interface NewWine {
  id: string;
  name: string;
  image: string;
  variety: string;
  description: string;
  origin: string;
  conservation: string;
  alcohol: string;
  suggar?: string;
  vineyardHeight: string; //altura del viñedo
  vineyardAge: string;
  harvestDate: string; //fecha de cosecha
  elaboration: string;
  temperature: string;
  timeOnLees?: string;
  storedInCellar?: string;//guarda en bodega
  pairing: string;//maridaje sugerido
  line: Lines;
  subline?: Subline | undefined;
}

export enum NameWine {
  burbujas = "Burbujas de Altura",
  pet = "Pet Nat",
  tinquiao = "Tinquiao",
  vinland = "Vinland"
}

export interface LineDescription {
  title: NameWine;
  content: string;
}