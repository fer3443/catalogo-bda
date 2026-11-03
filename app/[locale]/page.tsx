import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/site";
import { WineCategory } from "@/components/wine-category";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  return { alternates: buildAlternates(locale, "/") };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="h-full py-6 sm:py-14">
      <WineCategory />
    </main>
  )
}
