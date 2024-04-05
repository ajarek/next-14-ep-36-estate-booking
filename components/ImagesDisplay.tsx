'use client'
import Image from 'next/image'
import { useState } from 'react'

type PropsApartment =
  | {
      id: number
      title: string
      img: string[]
      rent: number
      location: string
      rooms: string
      floors: number
      area: number
      description: string
    }
  | undefined
const ImagesDisplay = ({ apartment }: { apartment: PropsApartment }) => {
  const [index, setIndex] = useState(0)
  return (
    <div>
      <div className='relative '>
        <Image
          src={apartment?.img[index] || ''}
          alt='apartment'
          width={500}
          height={300}
          className='w-[500px] h-[300px] object-cover '
        />
        <div className='absolute bottom-1 right-[calc(50%-25px)] text-red-600 text-xl font-semibold'>{index + 1}/5</div>
      </div>

      <div className='flex'>
        <Image
          src={apartment?.img[0] || ''}
          alt='apartment'
          width={100}
          height={60}
          onClick={() => setIndex(0)}
          className='w-[100px] h-[80px] object-cover cursor-pointer active:border-2 '
        />
        <Image
          src={apartment?.img[1] || ''}
          alt='apartment'
          width={100}
          height={60}
          onClick={() => setIndex(1)}
          className='w-[100px] h-[80px] object-cover  cursor-pointer active:border-2  '
        />
        <Image
          src={apartment?.img[2] || ''}
          alt='apartment'
          width={100}
          height={60}
          onClick={() => setIndex(2)}
          className='w-[100px] h-[80px] object-cover  cursor-pointer active:border-2 '
        />
        <Image
          src={apartment?.img[3] || ''}
          alt='apartment'
          width={100}
          height={60}
          onClick={() => setIndex(3)}
          className='w-[100px] h-[80px] object-cover  cursor-pointer active:border-2 '
        />
        <Image
          src={apartment?.img[4] || ''}
          alt='apartment'
          width={100}
          height={60}
          onClick={() => setIndex(4)}
          className='w-[100px] h-[80px] object-cover  cursor-pointer active:border-2 '
        />
      </div>
    </div>
  )
}

export default ImagesDisplay
