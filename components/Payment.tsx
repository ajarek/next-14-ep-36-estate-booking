'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'

const Payment = ({ allPayValue }: { allPayValue: number }) => {
  const router = useRouter()

  const notifySuccess = () => {
    toast.success(`Dziękujemy za płatność!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    notifySuccess()
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className='max-w-[600px] w-full max-sm:w-full bg-secondary p-6 max-sm:p-4 rounded-lg shadow-lg'
      >
        <div className='w-100%'>
          <Label htmlFor='cardNumber'>Wysokość Kaucji</Label>
          <Input
            type='text'
            value={allPayValue}
            readOnly
          />
        </div>

        <div className='w-100%'>
          <Label htmlFor='cardNumber'>Podaj Nr Karty Płatniczej</Label>
          <Input
            type='text'
            placeholder='1234 5678 9012 3456'
            required
            pattern='^(?:\d{4} ){3}\d{4}$'
          />
        </div>
        <div className='w-100% '>
          <Label htmlFor='expiryDate'>Ważność Karty</Label>
          <Input
            type='text'
            placeholder='MM/YYYY'
            required
            pattern='^(0[1-9]|1[0-2])\/20[2-9][4-9]$'
          />
        </div>

        <div className='w-100%'>
          <Label htmlFor='cvv'>Podaj CVV</Label>
          <Input
            type='text'
            placeholder='123'
            required
            pattern='^[0-9]{3}$'
          />
        </div>

        <div className='w-100%  mt-4'>
          <Button
            className='w-full'
            type='submit'
          >
            Płacę Kartą
          </Button>
        </div>
      </form>
    </>
  )
}

export default Payment
