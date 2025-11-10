import { Lines } from "./wine.interface";

export interface NewWine {
  id:string;
  name:string;
  image:string;
  variety:string;
  description: string;
  origin: string;
  conservation:string;
  alcohol:string;
  suggar?:string;
  vineyardHeight: string; //altura del viñedo
  vineyardAge: string;
  harvestDate: string; //fecha de cosecha
  elaboration:string;
  temperature:string;
  timeOnLees?:string;
  storedInCellar?:string;//guarda en bodega
  pairing: string;//maridaje sugerido
  line:Lines;
}