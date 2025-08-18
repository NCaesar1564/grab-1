import { IoMdStar } from 'react-icons/io'

const card = ({
    id, image, name, price, vote,
    defaultImage
    // AddToCard
}: any) => {
    return (
        <div className='w-[400px] h-[400px] rounded-t-2xl' key={id}>
            <a className='w-[400px] h-[300px]' href={`/Dish/${id}`}>
                <img loading='lazy' alt={name} src={image} className='w-[400px] h-[300px] rounded-t-2xl object-cover' />
            </a>
            <div className='max-w-[400px] h-[100px] flex flex-row justify-center items-center'>
                <div className='w-full flex justify-start items-center p-5 pt-2 gap-40
                not-md:flex-col not-md:gap-3'>
                    <span className='flex flex-col justify-center items-center gap-3'>
                        <p className='text-xl font-bold text-nowrap
                        not-md:text-xs
                        '>{name}</p>
                        <button className='bg-[#396C03] text-white py-2 cursor-pointer
                        md:w-[10vw] md:rounded-4xl 
                        not-md:w-full not-md:rounded-xl not-md:text-xs not-md:px-1' onClick={() => { '#' }}>Add To Cart</button>
                    </span>
                    <span className='flex flex-col justify-center items-center gap-3 not-md:font-bold
                    '>
                        <p className='flex items-center justify-center font-bold not-md:hidden'><IoMdStar />{vote}</p>
                        <p>{price}$</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default card