import React from 'react'
import Card from './card/card'
import Titile from '../../ui/Titile'
const Service = () => {
    const data = [
        {
            id: 1,
            titile: "Qualityfull food",
            note: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron"
        },
        {
            id: 2,
            titile: "Heathy food",
            note: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
        {
            id: 3,
            titile: "Fast Delivery",
            note: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        }
    ]
    return (
        <div    >
            <Titile bTitile="Why Choose Our Food Favourite" sTitile="Services"/>
            <div className='w-full flex justify-center items-center gap-10
            not-md:flex-col'>
                {data.map((d) => {
                    return (
                        <div key={d.id} className='flex justify-center
                        md:w-[25vw] md:h-[50vh]
                        not-md:w-full not-md:h-[25vh] 
                        '>
                            <Card titile={d.titile} note={d.note} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service