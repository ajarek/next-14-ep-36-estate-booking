import Image from 'next/image'
import React from 'react'
import apartments from '../../../data/apartments.json'

const ApartmentId = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const apartment = apartments.find((apartment) => apartment.id === Number(id))
  return (
    <div className='min-h-[calc(100vh - 80px)] grid grid-cols-2 gap-4 px-12 py-8  place-items-center  max-sm:grid-cols-1'>
      <div>
        <Image
          src={apartment?.img[0]||''}
          alt='apartment'
          width={500}
          height={300}
        />
        <div className='flex'>
        <Image
          src={apartment?.img[1]||''}
          alt='apartment'
          width={125}
          height={60}
        />
        <Image
          src={apartment?.img[2]||''}
          alt='apartment'
          width={125}
          height={60}
        />
        <Image
          src={apartment?.img[3]||''}
          alt='apartment'
          width={125}
          height={60}
        />
        <Image
          src={apartment?.img[4]||''}
          alt='apartment'
          width={125}
          height={60}
        />
        </div>
      </div>
      <div>
      <h2>{apartment?.title}</h2>
        <p>{apartment?.location}</p>
        <p>{apartment?.rent}</p>
        <p>{apartment?.rooms}</p>
        <p>{apartment?.area}</p>
        <p>{apartment?.description}</p>
        
       
      </div>
    </div>
  )
}

export default ApartmentId
