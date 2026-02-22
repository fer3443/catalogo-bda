import type { Metadata } from 'next'
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Analytics } from '@vercel/analytics/next'
import { routing } from '@/i18n/routing';
import { lora } from '@/config/fonts'
import { Header } from '@/components/molecules/header'
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
  return (
    <html lang={locale}>
      <body className={`${lora.className} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
