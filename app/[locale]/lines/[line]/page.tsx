import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { WineCatalog } from "@/components/wine-catalog";
import { Lines, Subline } from "@/interfaces";
import { routing } from "@/i18n/routing";

const SUBLINES_BY_LINE: Record<string, Subline[]> = {
  espumantes: [Subline.burbujas, Subline.pet],
  tinquiao: [Subline.tinquiao, Subline.blend],
  vikinga: [Subline.vinland, Subline.drakkar],
}

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(SUBLINES_BY_LINE).map((line) => ({ locale, line }))
  );
}

interface Props {
  params: Promise<{ locale: string; line: string }>
}
export default async function LinePage({ params }: Props) {
  const { locale, line } = await params;
  setRequestLocale(locale);
  const sublines = SUBLINES_BY_LINE[line];
  if (!sublines) notFound();

  return (
    <WineCatalog line={line as Lines} subline={sublines} />
  );
}
