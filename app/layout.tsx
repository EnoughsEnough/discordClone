import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Discord',
   description: 'This is a fullstack discord clone',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: ReactNode
}>) {
   return (
      <html lang="en">
         <body className={font.className}>{children}</body>
      </html>
   )
}
