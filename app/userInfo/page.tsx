import Logo from '@/components/logo'
import DomainInputBox from '@/components/domainInputBox'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className="relative flex min-h-screen  justify-center p-24">
      <Logo/>
      <div className="flex  pt-4 lg:w-[640px] lg:pt-14 flex-col items-center w-full ">
        <h2 className='text-black text-5xl lg:text-5xl font-extrabold '>Welcome to Linktree!</h2>
        <p className='pt-6 text-gray-600 text-[18px] text-center'>Choose your Linktree username. You can always change it later.</p>
        <DomainInputBox/>
        <p className='pt-12 py-8 text-gray-600 text-[18px] text-center'>By continuing, you agree to receive offers, news and updates from Linktree
</p>
<button className='w-full bg-blue-600 hover:bg-blue-500 p-6 text-xl text-white rounded-3xl'>Continue</button>
    
    <p className='pt-6 text-gray-600 text-[18px] text-center' >Already have an account? <Link href={'/login'}>Log in</Link></p>
      </div>
      <div className="hidden relative md:fixed md:min-h-screen ">side image</div>
      </main>
    
  )
}

export default page