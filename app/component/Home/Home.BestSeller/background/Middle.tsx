import Image from 'next/image'
import Image1 from '@/public/images/Abstract.png'
const Middle = () => {
  return (
    <>
       <Image height={800} width={800} alt='img' src={Image1} className='h-[8em] w-[16em] rotate-z-8'/> 
    </>
  )
}

export default Middle