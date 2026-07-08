import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Chatbot from '@/components/Chatbot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'thelearner.yogi | AI Engineer',
  description: 'Portfolio of thelearner.yogi - AI Engineer & Freelancer. From Shiva\'s silence to serverless solutions.',
  keywords: ['AI Engineer', 'Machine Learning', 'n8n', 'LangChain', 'Vibe Coding', 'Python', 'OpenAI', 'Developer'],
  authors: [{ name: 'thelearner.yogi' }],
  openGraph: {
    title: 'thelearner.yogi | AI Engineer',
    description: 'From Shiva\'s silence to serverless solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
