"use client"
import React, { useEffect, useState } from 'react'
import Card from './card/card'
import axios from 'axios'
import Button from './button/button'
import Image from 'next/image'
import Title from '../../ui/Title'
import images from '@/public/images/3-36085_fast-food-banner-junk-food-transparent-background 1.png'
interface Comment {
    idCmt: number,
    uid: number,
    name: string,
    anotherName: string,
    avatar: string,
    comment: string
}
const Testimonial = () => {
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
        <div className='my-10 w-full h-[571px] flex flex-col items-center justify-center'>
            <Title sTitle="Testimonial" bTitle="Our Happy Client Say" />
            <div className='w-[1400px] h-[445px] not-lg:w-[330px] flex items-center justify-center gap-8 '>
                {comment.slice(first, first + 1).map((d) => {
                    return (
                        <div key={d.idCmt} className='lg:w-[650px] lg:h-[350px] not-lg:w-full not-lg:h-40 relative flex items-center '>
                            <Card uid={d.uid} name={d.name} anotherName={d.anotherName} avatar={d.avatar} comment={d.comment} />
                            <Button btnPrev={btnPrev} btnNext={btnNext} />
                        </div>
                    )
                })}
                <div className='w-[650px] h-[350px] not-lg:hidden'>
                    <Image height={350} width={650} alt='image' src={images} className='z-10 h-full w-full [image-rendering:pixelated]' />
                </div>
            </div>
        </div>
    )
}

export default Testimonial