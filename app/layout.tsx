'use client'

import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Iconify Stock',
  description: 'Iconify Stock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ChakraProvider>
        <Navbar />
        {children}
        <Footer />
      </ChakraProvider>
      </body>
    </html>
  )
}
