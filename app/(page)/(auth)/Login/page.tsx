import Image from 'next/image'
import Login from './Login'

const page = () => {
  return (
    <div className='w-full h-[720px] flex justify-center items-center gap-2'>
      <Login />
      <Image  height={900} width={900} alt='image' src={`/images/LogImage.png`} className='not-md:hidden h-[720px] w-[720px]'/>
    </div>
  )
}

export default page