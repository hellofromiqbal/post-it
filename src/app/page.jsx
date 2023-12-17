import Link from 'next/link';
import SignInForm from './ui/mainPage/SignInForm';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className='basis-[60%] md:basis-1/2 flex justify-center items-center'>
        <div className='flex flex-col text-white'>
          <h1 className='font-extrabold text-6xl md:text-8xl'>Post<span className='text-green-500'>It</span></h1>
          <p className='ps-1 font-medium text-sm md:text-base opacity-70'>Post your thoughts freely.</p>
        </div>
      </div>
      <div className='basis-[40%] md:basis-1/2 pt-8 md:pt-10 lg:pt-0 flex items-start lg:items-center h-max md:h-full'>
        <div className='flex flex-col px-8 md:px-0 gap-4 w-full md:w-2/3 mx-auto'>
          <SignInForm/>
          <p className='text-white text-sm text-center opacity-70'>Do not have an account? <Link href="/sign-up" className='text-white hover:text-green-400 underline'>Sign Up</Link> now.</p>
          <Link href="/forgot-password" className='text-white text-sm text-center opacity-70 hover:text-green-400 underline'>Forgot password?</Link>
        </div>
      </div>
    </main>
  )
}
