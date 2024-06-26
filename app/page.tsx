import SearchApartment from '@/components/SearchApartment'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid min-h-[calc(100vh - 80px)] grid-cols-[2fr_1fr] max-lg:grid-cols-1  content-center p-16  max-lg:p-2'>
      <div className='flex flex-col w-full   p-6 gap-6 max-lg:p-2'>
        <h1 className='text-3xl  max-lg:text-2xl text-center font-bold italic'>
          Znajdź nieruchomość i swoje wymarzone miejsce
        </h1>
        <p>
          Wyszukaj mieszkanie i wynajmij je na naszej platformie wpłacając
          kaucje. <br /> Szukaj według kryterium : lokalizacji, wysokości opłat,
          liczba pokoi.
        </p>
        <SearchApartment />
        <div className='flex justify-between gap-2'>
          <div className='flex flex-col'>
            <h2 className='text-xl max-lg:text-lg  font-semibold'>16+</h2>
            <p>Lat Doświadczenia</p>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl max-lg:text-lg font-semibold'>200</h2>
            <p>Przyznane Nagrody</p>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl max-lg:text-lg font-semibold'>1200+</h2>
            <p>Nieruchomości</p>
          </div>
        </div>
      </div>
      <div className='w-full grid grid-cols-2 place-items-center relative  max-lg:gap-4'>
        <Image
          src='/images/hero1.jpg'
          alt='hero'
          width={150}
          height={100}
          className='rounded-full'
        />
        <Image
          src='/images/hero2.jpg'
          alt='hero'
          width={150}
          height={100}
          className='rounded-full'
        />
        <Image
          src='/images/hero3.jpg'
          alt='hero'
          width={150}
          height={100}
          className='rounded-full grid grid-cols-subgrid col-span-2'
        />
        <div className='absolute bg-primary w-48 h-48 rounded-full -z-10 max-lg:hidden '></div>
      </div>
    </main>
  )
}
