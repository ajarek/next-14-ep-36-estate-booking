'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Links = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div
        className='absolute left-1 top-6 lg:hidden cursor-pointer z-10'
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <X
            size={24}
            color='red'
          />
        ) : (
          <Menu size={24} />
        )}
      </div>
      <div
        className={
          'w-full flex items-center  justify-between  gap-6   bg-secondary italic'
        }
      >
        <Link
          href='/'
          className='flex items-center gap-2 max-sm-gap-1'
        >
          <Image
            src='/images/logo.png'
            alt='Next.js Logo'
            width={40}
            height={40}
            className=''
          />
          <h1 className='font-semibold text-xl  '>
            Kołobrzeg <br /> Wynajem Mieszkań
          </h1>
        </Link>

        <div className=' max-lg:hidden flex '>
          <div className='flex items-center gap-6'>
            <Link
              href='/menu'
              className=' px-4'
            >
              Menu
            </Link>
            <Link
              href='/serwis'
              className=' px-4'
            >
              Serwis
            </Link>
            <Link
              href='/about-us'
              className=' px-4'
            >
              O Nas
            </Link>
            <Link
              href='/contact'
              className=' px-4'
            >
              Kontakt
            </Link>
          </div>
        </div>
        {menu && (
          <div className='absolute top-0 left-0 max-xl flex flex-col pt-20 pb-2 gap-6 bg-secondary lg:hidden'>
            <Link
              href='/menu'
              className=' px-4'
            >
              Menu
            </Link>
            <Link
              href='/serwis'
              className=' px-4'
            >
              Serwis
            </Link>
            <Link
              href='/about-us'
              className=' px-4'
            >
              O Nas
            </Link>
            <Link
              href='/contact'
              className=' px-4'
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Links
