import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dhanush - Full Stack Developer & AI Engineer',
  description: 'Cinematic portfolio website showcasing web development, AI solutions, and UI/UX design.',
  keywords: 'Full Stack Developer, React, Next.js, AI Engineer, Web Developer, Portfolio',
  openGraph: {
    title: 'Dhanush - Full Stack Developer & AI Engineer',
    description: 'Building modern digital experiences with AI & design',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body className="bg-dark text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}