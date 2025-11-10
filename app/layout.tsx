import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { lora } from '@/config/fonts'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Burbujas de Altura - Catalogo',
  description: 'Catalogo completo bodega Burbujas de Altura',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        <Header/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
