import Image from 'next/image'

const AboutUs = async () => {
  return (
    <div className='w-full min-h-[calc(100vh - 80px)] grid grid-cols-2 max-lg:grid-cols-1 px-12 pt-12 max-sm:px-2  place-items-center'>
      <div className='flex justify-center items-center '>
        <Image
          src='/images/hero1.jpg'
          alt='o nas'
          width={380}
          height={380}
        />
      </div>
      <div className='flex flex-col justify-center items-start  gap-4  max-sm:mt-1 max-sm:py-4'>
        <p>
          Nasza Firma oferuje szeroki wybór mieszkań na wynajem w różnych
          lokalizacjach. Posiadamy mieszkania dla studentów, singli, par i
          rodzin.Wszystkie nasze mieszkania są umeblowane i wyposażone w
          niezbędne urządzenia, aby zapewnić Ci komfortowy pobyt. Oferujemy
          również pomoc w formalnościach związanych z wynajmem.
        </p>
        <ul className='list-none '>
          Dlaczego warto wybrać naszą firmę?:
          <li>
            Szeroki wybór mieszkań: Posiadamy mieszkania w różnych
            lokalizacjach, o różnych rozmiarach i w różnych przedziałach
            cenowych.
          </li>
          <li>
            Umeblowane i wyposażone mieszkania: Nasze mieszkania są gotowe do
            zamieszkania - nie musisz się martwić o zakup mebli i urządzeń.
          </li>
          <li>
            Pomoc w formalnościach: Pomagamy w zgromadzeniu niezbędnych
            dokumentów i podpisaniu umowy najmu.
          </li>
          <li>
            Profesjonalna obsługa: Nasz zespół jest do Twojej dyspozycji i
            chętnie odpowie na wszystkie pytania.
          </li>
          <li>Możliwość zamówienia online lub telefonicznie</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs
