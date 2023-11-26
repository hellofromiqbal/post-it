import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../ui/feed/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Feed | PostIt',
  description: 'PostIt Feed Pages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1440px] mx-auto bg-gradient-to-b from-gray-800 via-gray-900 to-black`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
