import PlatformPicker from '@/components/platformPicker'
import React from 'react'

const AddSocialLinks = () => {
  return (
    <div className='w-full  min-h-screen flex flex-col items-center pt-28 gap-10'>
      <h2 className='animate-slideUp  font-extrabold text-5xl text-center'>Select your content</h2>
      <p className='animate-slideUp  text-gray-500 text-xl text-center'>Pick up to 5 link types to get started.</p>
      <PlatformPicker/>
    </div>
  )
}

export default AddSocialLinks