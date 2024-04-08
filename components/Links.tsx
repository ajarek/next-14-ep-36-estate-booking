'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
const Links = () => {
  const [menu, setMenu] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <div
        className='absolute left-1 top-6 lg:hidden cursor-pointer z-30'
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
            width={46}
            height={40}
            className=''
          />
          <div className='font-semibold text-xl max-lg:text-sm '>
            Kołobrzeg <br /> Wynajem Mieszkań
          </div>
        </Link>

        <div className=' max-lg:hidden flex '>
          <div className='flex items-center gap-6'>
            <Link
              href='/'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition  ${
                pathname === '/' ? 'active ' : 'px-4'
              }`}
            >
              Główna
            </Link>
            <Link
              href='/apartments'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition ${
                pathname === '/apartments' ? 'active ' : 'px-4'
              }`}
            >
              Lokale
            </Link>
            <Link
              href='/about-us'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition ${
                pathname === '/about-us' ? 'active ' : 'px-4'
              }`}
            >
              O Nas
            </Link>
            <Link
              href='/contact'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition ${
                pathname === '/contact' ? 'active ' : 'px-4'
              }`}
            >
              Kontakt
            </Link>
          </div>
        </div>
        {menu && (
          <div className='absolute top-0 left-0 w-40 flex flex-col pt-20 pb-4 px-4 gap-6 bg-secondary transition-all lg:hidden z-10'>
            <Link
              href='/'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition  ${
                pathname === '/' ? 'active ' : 'px-4'
              }`}
            >
              Główna
            </Link>
            <Link
              href='/apartments'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition ${
                pathname === '/apartments' ? 'active ' : 'px-4'
              }`}
            >
              Lokale
            </Link>
            <Link
              href='/about-us'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition ${
                pathname === '/about-us' ? 'active ' : 'px-4'
              }`}
            >
              O Nas
            </Link>
            <Link
              href='/contact'
              className={`hover:bg-primary rounded-sm px-4 py-1 transition ${
                pathname === '/contact' ? 'active ' : 'px-4'
              }`}
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
