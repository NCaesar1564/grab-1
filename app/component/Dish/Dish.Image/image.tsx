import React from 'react'

const image = ({ image, list }: any) => {
    return (
        <div>
            <img src={image} alt="image" className='w-[500px] h-[500px]'/>
        </div>
    )
}

export default image