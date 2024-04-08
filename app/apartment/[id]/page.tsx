import React from 'react'
import apartments from '../../../data/apartments.json'
import ImagesDisplay from '@/components/ImagesDisplay'
import Link from 'next/link'
const ApartmentId = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const apartment = apartments.find((apartment) => apartment.id === Number(id))
  return (
    <div className='min-h-[calc(100vh - 80px)] grid grid-cols-2 gap-6 px-12 py-8  place-items-center  max-lg:grid-cols-1 max-lg:px-4'>
      <ImagesDisplay apartment={apartment} />
      <div className='font-semibold flex flex-col'>
        <h2 className='font-semibold'>{apartment?.title}</h2>
        <p>
          <span className='font-normal'>dzielnica:</span> {apartment?.location}
        </p>
        <p>
          <span className='font-normal'>czynsz:</span> {apartment?.rent}/m-c PLN
        </p>
        <p>
          <span className='font-normal'>depozyt:</span> {apartment?.deposit} PLN
        </p>
        <p>
          <span className='font-normal'>pokoje:</span> {apartment?.rooms}
        </p>
        <p>
          <span className='font-normal'>powierzchnia:</span> {apartment?.area}m
          <sup>2</sup>
        </p>
        <p>
          <span className='font-normal'>piętro:</span> {apartment?.floors}
        </p>
        <p className='font-normal tracking-wide mb-4'>
          {apartment?.description}
        </p>
        <Link
          href={`/payment/${apartment?.id}`}
          className='px-4 py-1 bg-primary text-primary-foreground rounded-sm self-end '
        >
          Wynajmuje
        </Link>
      </div>
    </div>
  )
}

export default ApartmentId
