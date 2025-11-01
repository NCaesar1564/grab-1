import { HiOutlineShoppingBag } from 'react-icons/hi'

const Cart = ({ quality, handleCart }: { quality: number, handleCart: any }) => {
    return (
        <div className='relative flex cursor-pointer' onClick={handleCart}>
            <HiOutlineShoppingBag size={25} />
            <p className={`w-3 h-3 rounded-[50%] flex justify-center items-center absolute -top-1 right-0 text-xs  bg-[#396C03] ${quality === 0 ? 'hidden' : ''}`}>{quality}</p>
        </div>
    )
}

export default Cart