import { IoMdStar } from 'react-icons/io'

const card = ({ _id, image, name, price, vote, onClick}: any) => {
    return (
        <div className='w-[400px] h-[400px] rounded-t-2xl'>
            <a className='w-[400px] h-[300px]' href={`/Dish/${_id}`}>
                <img loading='lazy' alt={name} src={image} className='w-[400px] h-[300px] rounded-t-2xl object-cover' />
            </a>
            <div className='max-w-[400px] h-[100px] flex flex-row justify-center items-center'>
                <div className='w-full flex justify-start items-center p-5  gap-40 not-lg:flex-col not-lg:gap-3'>
                    <span className='flex flex-col justify-center items-center gap-3'>
                        <p className='text-xl font-bold text-nowrap not-lg:text-xs'>{name}</p>
                        <button className='w-[150px] bg-[#396C03] text-white py-2 cursor-pointer lg:rounded-4xl not-lg:w-[200px] not-lg:rounded-xl not-lg:text-xs not-lg:px-5  '
                            onClick={onClick}>Add To Cart</button>
                    </span>
                    <span className='flex flex-col justify-center items-center gap-3 not-lg:font-bold not-lg:flex-row not-lg:gap-8'>
                        <p className='flex items-center justify-center font-bold gap-x-1'>{vote}<IoMdStar color='yellow' /></p>
                        <p>{price}$</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default card