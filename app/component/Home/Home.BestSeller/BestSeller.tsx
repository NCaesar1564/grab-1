"use client"

import Order from './button/OrderProcess'
import OrderProcess from './button/Order'
import RightTitile from './title/RightTitile'
import Middle from './background/Middle'
import Delivery from './button/Delivery'
import LeftBackground from './background/LeftBackground'
import Card from './card/card'
import axios from "axios";
import { useEffect, useState } from "react"
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
const BestSeller = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const [number, setNumber] = useState<{ [key: string]: number }>({})
    useEffect(() => {
        axios.get('http://localhost:8080/products/public')
            .then((data) => setProduct(data.data.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <div className='w-full h-[837px] flex justify-center items-center mt-10'>
            <div className='w-[1400px] h-[837px] flex justify-center items-start relative gap-x-[300px]'>
                <div className='w-[630px] h-[837px] text-start flex flex-col justify-start items-start gap-8 not-lg:hidden '>
                    <Delivery />
                    <div className='flex flex-col justify-center gap-15'>
                        <RightTitile />
                    </div>
                    <div className='flex items-center justify-start gap-10 mt-10'>
                        <OrderProcess />
                        <Order />
                    </div>
                </div>
                <div className='absolute left-[498px] top-[225px] not-lg:hidden'>
                    <Middle />
                </div>
                <div className='w-[589px] h-[837px] not-lg:w-fit not-lg:h-fit relative z-40 pt-16'>
                    <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-x-5 not-lg:gap-y-20'>
                        {product.slice(0, 4).map((d) => {
                            const btnNext = (id: string, images: string[]) => {
                                setNumber(prev => {
                                  const current = prev[id] ?? 0 
                                  return {
                                    ...prev,
                                    [id]: current < images.length - 1 ? current + 1 : 0
                                  }
                                })
                              }
                            const btnPrev = (id: string, images: string[]) => {
                                setNumber(prev => {
                                    const current = prev[id] ?? 0
                                    return {
                                        ...prev,
                                        [id]: current === 0 ? images.length - 1 : current - 1
                                    }
                                })
                            }
                            return (
                                <div className='h-[300px] w-[250px] not-lg:w-[200px] relative flex items-center justify-center' key={d._id}>
                                    <Card
                                        image={d.images[number[d._id!] || 0]}
                                        name={d.name}
                                        price={d.sold}
                                        note={d.description}
                                        href={`/Dish/${d._id}`}
                                        btnPrev={() => btnPrev(d._id!, d.images)}
                                        btnNext={() => btnNext(d._id!, d.images)}
                                    />
                                </div>  
                            )
                        })}
                    </div>
                    <LeftBackground />
                </div>
            </div>

        </div>
    )
}

export default BestSeller