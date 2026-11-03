import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { WineCatalog } from "@/components/wine-catalog";
import { hasLocale } from "next-intl";
import { Lines } from "@/interfaces";
import { routing } from "@/i18n/routing";
import { SUBLINES_BY_LINE } from "@/constants/sublines";
import { buildAlternates } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(SUBLINES_BY_LINE).map((line) => ({ locale, line }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, line } = await params;
  if (!hasLocale(routing.locales, locale) || !SUBLINES_BY_LINE[line]) return {};
  return { alternates: buildAlternates(locale, { pathname: "/lines/[line]", params: { line } }) };
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
