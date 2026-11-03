import type { Metadata } from 'next'
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Analytics } from '@vercel/analytics/next'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { lora } from '@/config/fonts'
import { buildAlternates, SITE_URL } from '@/lib/site'
import { Header } from '@/components/molecules/header'
import { Footer } from '@/components/molecules';
import './globals.css'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const ogLocale = { es: 'es_AR', en: 'en_US', pt: 'pt_BR' }[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/'),
    openGraph: {
      type: 'website',
      siteName: t('siteName'),
      title: t('title'),
      description: t('description'),
      locale: ogLocale,
      images: [{ url: '/bda-all-lines.webp' }],
    },
    icons: {
      icon: '/bda-favicon.png',
      apple: '/bda-favicon.png',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  // Solo los namespaces usados por componentes cliente (wine-card, wine-modal y error.tsx)
  const { wineCard, wineModal, statusPages } = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${lora.className} antialiased`}>
        <NextIntlClientProvider messages={{ wineCard, wineModal, statusPages }}>
          <Header />
          {children}
          <Footer/>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
