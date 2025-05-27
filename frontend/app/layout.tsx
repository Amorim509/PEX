import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Minha Aplicação',
  description: 'Descrição da aplicação',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fonte Open Sans do Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
