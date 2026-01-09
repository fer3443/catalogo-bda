export interface Wine {
  id: string
  name: string
  line: Lines
  subline: Subline | undefined
  variety: string
  description: string
  image: string
  technicalSheet: {
    region: string
    alcohol: string
    temperature: string
    aging: string
    pairing: string
  }
}

export enum Lines {
  tinquiao = "Tinquiao",
  espumantes = "Espumantes",
  vikinga = "Vikinga",
}

export enum Subline {
  pet = "pet",
  burbujas = "burbujas",
  tinquiao = "tinquiao",
  vinland = "vinland"
}