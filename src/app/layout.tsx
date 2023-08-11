import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto, Baloo_2 } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-roboto',
})

const baloo2 = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800'],
  variable: '--font-baloo',
})

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baloo2.variable} bg-zinc-100`}>
        <Header />

        {children}
      </body>
    </html>
  )
}
