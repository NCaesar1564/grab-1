"use client"
import React, { useEffect, useState } from 'react'
import Card from './card/card'
import axios from 'axios'
import BtnNext from './button/btnNext'
import BtnPrev from './button/btnPrev'
import Image from 'next/image'
import Titile from '../../ui/Titile'
import images from '@/public/images/3-36085_fast-food-banner-junk-food-transparent-background 1.png'
interface Comment {
    idCmt: number,
    uid: number,
    name: string,
    anotherName: string,
    avatar: string,
    comment: string
}
const Testimonial = ({ defaultImage }: any) => {
    const [comment, setComment] = useState<Comment[]>([])
    const [first, setFirst] = useState(0);
    const btnNext = () => {
        if (first !== comment.length - 1) {
            setFirst(first + 1)
        } else {
            setFirst(0);
        }
    }
    const btnPrev = () => {
        if (first !== 0) {
            setFirst(first - 1);
        } else {
            setFirst(comment.length - 1)
        }
    }
    useEffect(() => {
        axios.get('/data/data.testimonial.json')
            .then(data => setComment(data.data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='my-10 w-full flex flex-col items-center justify-center'>
            <Titile sTitile="Testimonial" bTitile="Our Happy Client Say" />
            <div className='w-[90%] flex items-center justify-center gap-5'>
                {comment.slice(first, first + 1).map((d) => {
                    return (
                        <div key={d.idCmt} className='relative 
                        md:w-5/12 md:h-80
                        not-md:w-full not-md:h-40'>
                            <Card uid={d.uid} name={d.name} anotherName={d.anotherName} avatar={d.avatar} comment={d.comment} defaultImage={defaultImage} />
                            <div className='absolute -left-5 z-30 
                                md:top-5/12
                                not-md:top-1/2
                                '>
                                <BtnPrev prev={btnPrev} />
                            </div>
                            <div className='absolute -right-5 z-30
                                top-5/12
                                not-md:top-1/2
                                '>
                                <BtnNext next={btnNext} />
                            </div>
                        </div>
                    )
                })}
                <Image height={800} width={800} alt='image' src={images} className='w-5/12 h-[20em] not-md:hidden z-10' />
            </div>
        </div>
    )
}

export default Testimonial