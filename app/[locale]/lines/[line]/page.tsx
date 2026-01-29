import { WineCatalog } from "@/components/wine-catalog";
import { Lines, Subline } from "@/interfaces";

interface Props {
  params: Promise<{ line: Lines }>
}
export default async function LinePage({ params }: Props) {
  const { line } = await params;
  //podria crear un objeto para con clave valor que reciba la linea y devuelva sublineas
  const subline: Record<string, Subline[]> = {
    espumantes: [Subline.burbujas, Subline.pet],
    tinquiao: [Subline.tinquiao, Subline.blend],
    vikinga: [Subline.vinland]
  }

  return (
    <WineCatalog line={line} subline={subline[line]} />
  );
}
