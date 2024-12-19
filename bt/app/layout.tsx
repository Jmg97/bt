import { Nunito } from 'next/font/google'
import { Metadata } from 'next'
import '@/app/globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Blue Trunk Menu',
  description: 'Digital menu for Blue Trunk Coffee and Drink',
  manifest: '/manifest.json',
  themeColor: '#0d47a1',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}

