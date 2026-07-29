type LinesDataT = {
  [key: string]: {
    label: string,
    path: string,
    image: string
  }
}
export const LINES_DATA: LinesDataT = {
  all: {
    label: "Portfolio completo",
    path: '/lines',
    image: 'https://res.cloudinary.com/dndrbcmkg/image/upload/v1785210373/Bodega_de_frente_e6dwoa.png'
  },
  espumantes: {
    label: 'Espumantes',
    path: '/lines/espumantes',
    image: 'https://res.cloudinary.com/dndrbcmkg/image/upload/v1785210371/Burbujas_Espumantes_zierdr.png'
  },
  tinquiao: {
    label: 'Tinquiao',
    path: '/lines/tinquiao',
    image: 'https://res.cloudinary.com/dndrbcmkg/image/upload/v1785210371/Linea_Tinquiao_wepsvs.png'
  },
  vikinga: {
    label: 'Vikinga',
    path: '/lines/vikinga',
    image: 'https://res.cloudinary.com/dndrbcmkg/image/upload/v1785351660/Tarjeta_Vikingos_zqalbp.png'
  },
}