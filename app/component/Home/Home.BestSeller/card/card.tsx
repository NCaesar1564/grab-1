import Image from 'next/image'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

const Card = ({ image, name, price, note, href, btnPrev, btnNext }: any) => {
  return (
    <>
      <a className='h-[254px] w-full not-lg:w-[200px] absolute -top-1/4 z-30' href={href}>
        {image ? <Image height={500} width={300} alt={name} src={image} className='h-[254px] w-full not-lg:w-[200px]  z-30' /> : null}
      </a>
      <div className='h-[275px] w-[258px] not-lg:w-[200px] not-lg:h-[300px] flex flex-col items-center justify-end relative gap-y-2 rounded-4xl z-20 bg-white shadow-md -mt-5 pb-5'>
        <p className='text-2xl font-bold'>{name}</p>
        <p  className='text-center'>{note}</p>
        <div className='flex items-center'><p className='text-red-500'>$</p>{price}</div>
        <div className='flex justify-center items-center gap-10 absolute -bottom-5 '>
          <p className='h-[42px] w-[42px] border p-1 rounded-[50%] bg-black text-white flex items-center justify-center shadow cursor-pointer' onClick={btnNext}><GoArrowRight size={30} /></p>
          <p className='h-[42px] w-[42px] border p-1 rounded-[50%] bg-white text-black flex items-center justify-center shadow cursor-pointer' onClick={btnPrev}><GoArrowLeft size={30} /></p>
        </div>
      </div>
    </>
  )
}

export default Card