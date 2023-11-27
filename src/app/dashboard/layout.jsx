import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../ui/dashboard/Navbar'
import LeftSide from '../ui/dashboard/LeftSide'
import RightSide from '../ui/dashboard/RightSide'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Feed | PostIt',
  description: 'PostIt Feed Pages',
}

export default function RootLayout({ children }) {
  return (
    <div className='bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
      <div className='h-14 flex justify-center items-center'>
        <h1 className='text-light text-2xl font-extrabold'>Post<span className='text-softDark bg-green-500 px-1 rounded-md'>It</span></h1>
      </div>
      <main className='max-w-6xl mx-auto min-h-screen flex gap-4 pb-14'>
        <section className='basis-1/4'>
          <LeftSide/>
        </section>
        <section className='basis-2/4'>
          {children}
        </section>
        <section className='basis-1/4'>
          <RightSide/>
        </section>
      </main>
  </div>
  )
}
