import { WineCatalog } from "@/components/wine-catalog";

interface Props {
  params: Promise<{ line: string }>
}
export default async function LinePage({ params }: Props) {
  const { line } = await params;

  return (
    <WineCatalog line={line} />
  );
}
