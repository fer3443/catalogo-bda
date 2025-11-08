export interface Wine {
  id: string
  name: string
  line: "Tinquiao" | "Espumantes" | "Vinland"
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
