type LinesDataT = {
  [key: string]: {
    label: string,
    path: string,
    image: string
  }
}
export const LINES_DATA: LinesDataT = {
  all: {
    label: "Todas las líneas",
    path: '/lines',
    image: '/bda-all-lines.webp'
  },
  espumantes: {
    label: 'Espumantes',
    path: '/lines/espumantes',
    image: '/bda-espumantes-lines.webp'
  },
  tinquiao: {
    label: 'Tinquiao',
    path: '/lines/tinquiao',
    image: '/bda-tinquiao-line.webp'
  },
  vikinga: {
    label: 'Vikinga',
    path: '/lines/vikinga',
    image: '/bda-vikingo-line.webp'
  },
}