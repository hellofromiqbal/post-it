import { Inter } from 'next/font/google';
import '../globals.css';
import LeftSide from '../ui/dashboard/LeftSide';
import RightSide from '../ui/dashboard/RightSide';
import { UserProvider } from '@/store/UserProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard | PostIt',
  description: 'PostIt Dashboard Pages',
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <div className='bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
        <main className='w-full lg:max-w-6xl mx-auto min-h-screen flex flex-col gap-4 py-4 md:px-6 lg:px-0'>
          <div className='flex justify-center items-center'>
            <h1 className='text-light text-3xl font-extrabold'>Post<span className='text-softDark bg-green-500 px-1 rounded-md'>It</span></h1>
          </div>
          <div className='flex gap-4'>
            <section className='md:basis-1/4 lg:basis-1/4'>
              <LeftSide/>
            </section>
            <section className='md:basis-3/4 lg:basis-2/4'>
              {children}
            </section>
            <section className='md:hidden lg:block lg:basis-1/4'>
              <RightSide/>
            </section>
          </div>
        </main>
      </div>
    </UserProvider>
  )
};
