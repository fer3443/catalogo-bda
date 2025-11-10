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
