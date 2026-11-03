import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/site";
import { WineCatalog } from "@/components/wine-catalog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  return { alternates: buildAlternates(locale, "/lines") };
}

export default async function LinesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <WineCatalog line={undefined} />
  );
}