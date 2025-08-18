"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from '@/app/component/Dish/Dish.Image/image'
import Link from '@/app/component/Dish/link/link'
import Information from '@/app/component/Dish/information/information'
import AddToCart from '@/app/component/Dish/button/AddToCart'
import List from '@/app/component/Dish/Dish.List/list'
import ShowMoreButton from '@/app/component/Home/Home.Product/button/ShowMoreButton';
interface Product {
    id: number,
    name: string,
    image: string,
    price: number,
    vote: number,
    note: string,
}
interface ProductList {
    id: number,
    name: string,
    image: string,
    price: number,
    vote: number
    note: string,
}

const Product = () => {
    const { id } = useParams();
    const [max, setMax] = useState(false);
    const [more, setMore] = useState(5)
    const [quality, setQuality] = useState(1);
    const [product, setProduct] = useState<Product>();
    const [list, setList] = useState<ProductList[]>([]);

    const ShowMore = () => {
        if (list.length >= more) {
            setMore(more + 5);
            if (list.length > more + 5) {
                setMax(false)
            } else {
                setMax(true)
            }
        }
        else {
            setMax(true)
        }
    }
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/Product/${id}`)
                .then(res => setProduct(res.data))
                .catch(err => console.error(err))
        }
    }, [id])
    useEffect(() => {
        axios.get('http://localhost:3001/Product')
            .then((res) => setList(res.data))
            .catch(err => console.error(err))
    }, [])

    const Increase = () => {
        setQuality(quality + 1)
    }
    const Decrease = () => {
        if (quality > 1) {
            setQuality(quality - 1)
        }
    }
    return (
        <div className='w-full flex flex-col items-center justify-center bg-gray-100'>
            <div className='w-[1412px] flex flex-col justify-center items-start  gap-y-2'>
                <Link name={product?.name} />
                <div className='w-full p-5 flex flex-col items-center bg-white'>
                    <div className='w-full min-h-[30em] flex gap-0'>
                        <div className='w-5/12 p-1'>
                            <Image image={product?.image} list />
                        </div>
                        <div className='w-7/12 p-1 flex flex-col gap-y-5'>
                            <Information name={product?.name} vote={product?.vote} price={product?.price} quality={quality} note={product?.note} Inc={Increase} Dec={Decrease} />
                            <div className='flex '>
                                <AddToCart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1412px] flex flex-col justify-center items-center gap-y-2 py-3'>
                <h1 className='w-full text-center text-3xl py-5 font-bold'>Danh Sách Liên Quan</h1>
                <div className='w-full flex flex-wrap justify-center items-center gap-4'>
                    {list.slice(0, more).map((d) => {
                        return (
                            <div key={d.id} className='w-1/6'>
                                <List name={d.name} image={d.image} price={d.price} vote={d.vote} href={d.id} />
                            </div>
                        )
                    })}
                </div>
                <ShowMoreButton ShowMore={ShowMore} max={max} />
            </div>
        </div >
    )
}

export default Product