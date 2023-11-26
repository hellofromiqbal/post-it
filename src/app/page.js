import Link from 'next/link';
import SignInForm from './ui/mainPage/SignInForm';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <div className='basis-[60%] md:basis-1/2 flex justify-center items-center'>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-6xl md:text-8xl'>Post-It</h1>
          <p className='ps-1 font-medium text-sm md:text-base'>Post your thoughts freely.</p>
        </div>
      </div>
      <div className='basis-[40%] md:basis-1/2 bg-slate-100 pt-8 md:pt-10 lg:pt-0 flex items-start lg:items-center h-max md:h-full'>
        <div className='flex flex-col px-8 md:px-0 gap-2 w-full md:w-2/3 mx-auto'>
          <SignInForm/>
          <p>Do not have an account? <Link href="/sign-up" className='text-blue-500'>Sign Up</Link> now.</p>
        </div>
      </div>
    </main>
  )
}
