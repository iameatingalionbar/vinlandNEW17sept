import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinland Media',
  description: 'Vinland Media - Fagleg þjónusta í samfélagsmiðlum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16"> {/* Add padding-top to create space for the fixed header */}
          {children}
        </main>
      </body>
    </html>
  )
}