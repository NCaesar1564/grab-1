import Image from 'next/image'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

const Border = ({ id, image, name, price, note, idRestaurant, defaultImage }: any) => {
  return (
    <a className='h-[399px] w-[278px] shadow relative' href={`/${idRestaurant}/${id}`}>
      <Image height={500} width={300} alt={name} src={image || defaultImage} className='h-[254px] w-full absolute -top-1/4 z-30' />
      <div className='h-[275px] w-full flex flex-col items-center justify-end relative gap-y-2 rounded-4xl z-20 bg-white shadow-md -mt-5 pb-5'>
        <p className='text-2xl font-bold'>{name}</p>
        <p>{note}</p>
        <div className='flex items-center'><p className='text-red-500'>$</p>{price}</div>
        <div className='flex justify-center items-center gap-10 absolute -bottom-5'>
          <p className='border p-1 rounded-[50%] bg-black text-white flex items-center justify-center shadow' ><GoArrowRight size={30} /></p>
          <p className='border p-1 rounded-[50%] bg-white text-black flex items-center justify-center shadow' ><GoArrowLeft size={30} /></p>
        </div>
      </div>
    </a>
  )
}

export default Border