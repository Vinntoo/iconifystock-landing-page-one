'use client'

import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Iconify Stock</title>
        <meta name='iconifystock' content='Graphic Stock Website' />
      </head>
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
