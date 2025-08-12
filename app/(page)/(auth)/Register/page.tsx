import Image from 'next/image'
import Register from './Register'

const page = () => {
    return (
        <div className='flex justify-center items-center gap-2 w-full'>
            <Image height={900} width={900} alt='image' src={`/images/LogImage.png`} className='not-md:hidden h-[720px] w-[720px]' />
            <Register />
        </div>
    )
}

export default page