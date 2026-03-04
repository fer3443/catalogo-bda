import { WineCatalog } from "@/components/wine-catalog";
import { Lines, Subline } from "@/interfaces";

interface Props {
  params: Promise<{ line: Lines }>
}
export default async function LinePage({ params }: Props) {
  const { line } = await params;
  const subline: Record<string, Subline[]> = {
    espumantes: [Subline.burbujas, Subline.pet],
    tinquiao: [Subline.tinquiao, Subline.blend],
    vikinga: [Subline.vinland]
  }

  return (
    <WineCatalog line={line} subline={subline[line]} />
  );
}
