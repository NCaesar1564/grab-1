import React from 'react'
import Card from './card/card'
import Titile from '../../ui/Title'
const Service = () => {
    const data = [
        {
            id: 1,
            title: "Qualityfull food",
            note: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron"
        },
        {
            id: 2,
            title: "Heathy food",
            note: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
        {
            id: 3,
            title: "Fast Delivery",
            note: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        }
    ]
    return (
        <div className='w-full flex flex-col justify-center items-center not-lg:hidden'>
            <Titile bTitle="Why Choose Our Food Favourite" sTitle="Services" />
            <div className='w-[1300px] flex justify-center items-center gap-10
            not-lg:flex-col'>
                {data.map((d) => {
                    return (
                        <div key={d.id} className='w-[400px] h-[400px] flex justify-center '>
                            <Card title={d.title} note={d.note} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service