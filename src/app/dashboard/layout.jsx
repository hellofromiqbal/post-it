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
        <h1 className='text-light text-3xl font-extrabold'>Post<span className='text-softDark bg-green-500 px-1 rounded-md'>It</span></h1>
      </div>
      <main className='w-full lg:max-w-6xl mx-auto min-h-[8000px] flex gap-4 pb-14 md:px-6 lg:px-0'>
        <section className='md:basis-1/4 lg:basis-1/4'>
          <LeftSide/>
        </section>
        <section className='md:basis-3/4 lg:basis-2/4'>
          {children}
        </section>
        <section className='md:hidden lg:block lg:basis-1/4'>
          <RightSide/>
        </section>
      </main>
  </div>
  )
}
