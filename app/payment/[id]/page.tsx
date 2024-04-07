import { auth } from '@/app/api/auth/auth'
import Payment from '@/components/Payment'
import { redirect } from 'next/navigation'
import apartments from '../../../data/apartments.json'
import Image from 'next/image'
const PaymentApartment = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  const apartment = apartments.find((apartment) => apartment.id === Number(id))
  return (
    <div className='flex flex-col justify-center items-center min-h-[calc(100vh-80px)] gap-2'>
      <div className='flex items-center gap-2 font-semibold'>
        <h1 className='font-normal'>Twój wybór: </h1>
        <Image
          src={apartment?.img[0] || ''}
          alt='apartment'
          width={50}
          height={30}
          className='w-[50px] h-[30px] object-cover '
        />
        <div>{apartment?.title}</div>
        <div>czynsz: {apartment?.rent} PLN</div>
      </div>
      <Payment allPayValue={Number(apartment?.deposit)} />
    </div>
  )
}

export default PaymentApartment
