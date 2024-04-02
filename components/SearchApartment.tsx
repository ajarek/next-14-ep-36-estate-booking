'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
const SearchApartment = () => {
  const [local, setLocal] = useState('')
  console.log(local);
  
  return (
    <form className='flex items-center gap-1'>
      <Select
        defaultValue={local}
        onValueChange={(data) => setLocal(data)}
      >
        <SelectTrigger className='w-full focus:ring-0'>
          <SelectValue placeholder='Lokalizacja' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='centrum'>Centrum</SelectItem>
          <SelectItem value='morze'>Pas Nadmorski</SelectItem>
          <SelectItem value='radzikowo'>Radzikowo</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className='w-full focus:ring-0'>
          <SelectValue placeholder='Max Czynsz' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1500'>1500</SelectItem>
          <SelectItem value='2000'>2000</SelectItem>
          <SelectItem value='2500'>2500</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className='w-full focus:ring-0'>
          <SelectValue placeholder='Liczba Pokoi' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>1</SelectItem>
          <SelectItem value='2'>2</SelectItem>
          <SelectItem value='3'>3</SelectItem>
        </SelectContent>
      </Select>

      <Button
        type='submit'
        className='rounded-s-none'
      >
        <Search />
      </Button>
    </form>
  )
}

export default SearchApartment
