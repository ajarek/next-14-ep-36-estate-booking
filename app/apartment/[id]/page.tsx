import Image from 'next/image'
import React from 'react'
import apartments from '../../../data/apartments.json'
import ImagesDisplay from '@/components/ImagesDisplay'

const ApartmentId = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const apartment = apartments.find((apartment) => apartment.id === Number(id))
  return (
    <div className='min-h-[calc(100vh - 80px)] grid grid-cols-2 gap-4 px-12 py-8  place-items-center  max-sm:grid-cols-1'>
      <ImagesDisplay apartment={apartment}/>
      <div className='font-semibold'>
        <h2 className='font-semibold'>{apartment?.title}</h2>
        <p> <span className='font-normal'>dzielnica:</span>  {apartment?.location}</p>
        <p> <span className='font-normal'>czynsz:</span>  {apartment?.rent}/m-c PLN</p>
        <p> <span className='font-normal'>pokoje:</span>  {apartment?.rooms}</p>
        <p> <span className='font-normal'>powierzchnia:</span>  {apartment?.area}m<sup>2</sup></p>
        <p> <span className='font-normal'>piętro:</span>  {apartment?.floors}</p>
        <p className='font-normal tracking-wide'>{apartment?.description}</p>
      </div>
    </div>
  )
}

export default ApartmentId
