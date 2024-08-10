import { auth } from '@/auth';
import { SignOut } from '@/components/sign-out'
import { permanentRedirect } from 'next/navigation';
import React from 'react'

const Users =async () => {

    const session = await auth()
console.log(session?.user?.name);

  if (!session) permanentRedirect('/userInfo')
  return (
    <div><SignOut/></div>
  )
}

export default Users