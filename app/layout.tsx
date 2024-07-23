import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'

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
      <ClerkProvider afterSignOutUrl="/">
         <html lang="en" suppressHydrationWarning>
            <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem={false}
                  storageKey="discord-theme"
               >
                  {children}
               </ThemeProvider>
            </body>
         </html>
      </ClerkProvider>
   )
}
