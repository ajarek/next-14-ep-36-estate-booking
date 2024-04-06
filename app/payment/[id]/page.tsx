import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const Payment =async ({ params }: { params: { id: string } }) => {
  const {id} = params
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-80px)] bg-red-300'>Payment {id}</div>
  )
}

export default Payment