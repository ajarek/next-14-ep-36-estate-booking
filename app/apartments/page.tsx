import Image from 'next/image'
import apartments from '../../data/apartments.json'
import Link from 'next/link';
const Apartments = ({
  searchParams,
}: {
  searchParams: { local: string; rent: number; rooms: number }
}) => {
  const { local, rent, rooms } = searchParams
 

  return (
    <div className='min-h-screen grid grid-cols-3 gap-4 px-24 py-12 place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1 '>
      {apartments
        .filter((apartment) => {
          if (local && apartment.location !== local) {
            return false
          }
          if (rent && apartment.rent > rent) {
            return false
          }
          if (rooms && apartment.rooms !== rooms.toString()) {
            return false
          }
          return true
        })
      .map((apartment) => (
        <Link
          href={`/apartment/${apartment.id}`}
          key={apartment.id}
          className='h-[360px] flex flex-col gap-2 p-4  rounded-lg  shadow-xl  border-2'
        >
          <Image
            src={apartment.img[0]}
            alt='apartment'
            width={250}
            height={200}
            className='w-[250px] h-[200px] object-cover rounded-lg '
          />
          <h1 className='text-lg font-semibold'>{apartment.title}</h1>
          <p>Czynsz: {apartment.rent}</p>
          <p>Lokalizacja: {apartment.location}</p>
          <p>Ilość Pokoi: {apartment.rooms}</p>
        </Link>
      ))}
    </div>
  )
}

export default Apartments
