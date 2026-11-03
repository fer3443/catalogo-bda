import { setRequestLocale } from "next-intl/server";
import { WineCatalog } from "@/components/wine-catalog";

export default async function LinesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <WineCatalog line={undefined} />
  );
}