"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import { useEffect, useReducer, useState } from 'react'
import Image from '@/app/component/Dish/Dish.Image/image'
import Link from '@/app/component/Dish/Dish.Link/link'
import Information from '@/app/component/Dish/Dish.Infomation/information'
import AddToCart from '@/app/component/Dish/button/AddToCart'
import List from '@/app/component/Home/Home.Product/Product';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
interface Product {
    _id?: string
    name: string
    slug: string
    description?: string
    origin?: string
    sold?: number
    supplier?: string
    category?: string
    thumbnail_url?: string
    rating?: number
    images: string[]
    numberOfReview?: number
    is_active?: boolean
    _destroy?: boolean
    hot?: boolean
    is_deleted?: boolean
}
interface CartState {
    cart: any[]
}
type Action =
    | { type: "ADD_TO_CART", payload: string }
    | { type: "SET_CART", payload: any[] }
const initState: CartState = {
    cart: []
}
const Reducer = (state: CartState, action: Action): CartState => {
    switch (action.type) {
        case 'SET_CART': {
            return { ...state, cart: action.payload }
        }
        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] }
        }
        default:
            return state
    }
}
const Product = () => {
    const { _id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product>();
    const [state, dispatch] = useReducer(Reducer, initState)
    const router = useRouter()

    useEffect(() => {
        if (_id) {
            axios.get(`${process.env.PRODUCT_PUBLIC_HOST}/${_id}`)
                .then(res => setProduct(res.data.data))
                .catch(err => console.error(err))
        }
    }, [_id])
    const Increase = () => {
        setQuantity(quantity + 1)
    }
    const Decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const handleAddToCart = async (product_id: string) => {
        try {
            const token = localStorage.getItem("accessToken")
            if (!token) { router.push('/auth#login') }
            const res = await axios.post(`${process.env.PRODUCT_PUBLIC_HOST}`,
                {
                    product_id,
                    quantity: quantity
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            dispatch({ type: "ADD_TO_CART", payload: product_id })
            toast.success("Added to cart")
        }
        catch (error: any) {
            toast.error(error)
        }
    }
    return (
        <div className='w-full flex flex-col items-center justify-center bg-gray-100 my-3'>
            <div className='w-[1400px] not-lg:w-[500px] flex flex-col justify-center items-start gap-y-2 not-lg:items-center '>
                <Link name={product?.name} />
                <div className='w-full not-md:w-[450px] p-5 flex flex-col items-center bg-white'>
                    <div className='w-full min-h-[30em] flex gap-0 not-lg:flex-col items-center'>
                        <div className='w-5/12 p-1 not-lg:w-full'>
                            <Image image={product?.images[0]} list />
                        </div>
                        <div className='w-7/12 p-1 flex flex-col gap-y-5'>
                            <Information name={product?.name} vote={product?.rating} price={product?.sold} quantity={quantity} note={product?.description} Inc={Increase} Dec={Decrease} />
                            <div className='flex '>
                                <AddToCart onClick={() => handleAddToCart(_id)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1400px] flex flex-col justify-center items-center gap-y-5 py-3'>
                <h1 className='w-full text-center text-3xl py-5 font-bold'>Another Dish</h1>
                <List title={true} />
            </div>
        </div >
    )
}

export default Product