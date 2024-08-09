import React from 'react'

const DomainInputBox = () => {
  return (
     <div className='w-full relative  cursor-pointer text-xl flex mt-10 items-center focus-within:ring-black  focus-within:ring-2 hover:ring-2 transition duration-75 ease-out  rounded-lg overflow-hidden'>
            <label className='pl-14 py-7   bg-gray-200' htmlFor="linktr.ee/">linktr.ee/</label>
           <input className='w-full py-7 bg-gray-200 outline-none' type="text" name="name" placeholder='Username'/>
         </div>
  )
}

export default DomainInputBox