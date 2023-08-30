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
        <title>IconifyStock</title>
        <meta name='iconifystock' content='Graphic Stock Website' />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
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
