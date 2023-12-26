import '../globals.css';
import { Inter } from 'next/font/google';
import { AppProvider } from '@/store/AppProvider';
import LeftSide from '../ui/dashboard/LeftSide';
import RightSide from '../ui/dashboard/RightSide';
import DashboardHead from '../ui/dashboard/DashboardHead';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard | PostIt',
  description: 'PostIt Dashboard Pages',
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <div className='bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
        <main className='w-full lg:max-w-6xl mx-auto min-h-screen flex flex-col md:gap-4 md:py-4 md:px-6 lg:px-0'>
          <DashboardHead/>
          <div className='flex md:gap-4'>
            <section className='md:basis-1/4 lg:basis-1/4'>
              <LeftSide/>
            </section>
            <section className='px-0 md:px-0 basis-full md:basis-3/4 lg:basis-2/4 pb-14 md:pb-0'>
              {children}
            </section>
            <section className='hidden lg:block lg:basis-1/4'>
              <RightSide/>
            </section>
          </div>
        </main>
      </div>
    </AppProvider>
  )
};
