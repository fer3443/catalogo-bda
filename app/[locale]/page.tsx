import { setRequestLocale } from "next-intl/server";
import { WineCategory } from "@/components/wine-category";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="h-full py-6 sm:py-14">
      <WineCategory />
    </main>
  )
}
