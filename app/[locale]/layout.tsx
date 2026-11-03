import type { Metadata } from 'next'
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Analytics } from '@vercel/analytics/next'
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { lora } from '@/config/fonts'
import { Header } from '@/components/molecules/header'
import { Footer } from '@/components/molecules';
import './globals.css'

export const metadata: Metadata = {
  title: 'Burbujas de Altura - Catalogo',
  description: 'Catalogo completo bodega Burbujas de Altura',
  icons: {
    icon: [
      {
        url: '/bda-favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/bda-favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/bda-favicon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/bda-favicon.png',
  },
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
  // Solo los namespaces usados por componentes cliente (wine-card y wine-modal)
  const { wineCard, wineModal } = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${lora.className} antialiased`}>
        <NextIntlClientProvider messages={{ wineCard, wineModal }}>
          <Header />
          {children}
          <Footer/>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
