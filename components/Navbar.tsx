import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'
import Links from './Links'

const Navbar = async () => {
  const session = await auth()

  return (
    <>
      <div className='h-20 w-full bg-secondary flex justify-between items-center gap-4 px-8 '>
        <Links />
        <div className='flex justify-between items-center italic gap-2'>
          <Logout session={session} />

          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default Navbar