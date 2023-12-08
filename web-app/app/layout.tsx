import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar  from "../components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FPL Stats',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav><Navbar/></nav>
          {children}
        </section>
      </body>
    </html>
  )
}
