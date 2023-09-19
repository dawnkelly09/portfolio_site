import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '😀 Dawn Kelly - Software Engineer',
  description: 'Portfolio site for Dawn Kelly, a software engineer based in the US.',
  keywords: 'software engineer, software developer, web developer, full stack developer, full stack engineer, full stack, front end developer, back end engineer, full stack web developer, python, javascript, nextjs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
