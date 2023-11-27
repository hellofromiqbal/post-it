import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../ui/feed/Navbar'
import LeftSide from '../ui/feed/LeftSide'
import RightSide from '../ui/feed/RightSide'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Feed | PostIt',
  description: 'PostIt Feed Pages',
}

export default function RootLayout({ children }) {
  return (
    <div className='bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
      <Navbar/>
        <main className='max-w-6xl mx-auto min-h-screen flex gap-4 py-4'>
          <div className='basis-1/4'>
            <LeftSide/>
          </div>
          <div className='basis-2/4'>
            {children}
          </div>
          <div className='basis-1/4'>
            <RightSide/>
          </div>
        </main>
    </div>
  )
}
