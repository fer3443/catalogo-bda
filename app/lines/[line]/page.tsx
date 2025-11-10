import { WineCatalog } from "@/components/wine-catalog";
import { Lines } from "@/interfaces";

interface Props {
  params: Promise<{ line: Lines }>
}
export default async function LinePage({ params }: Props) {
  const { line } = await params;

  return (
    <WineCatalog line={line} />
  );
}
