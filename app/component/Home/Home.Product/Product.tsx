"use client"
import React, { useEffect, useState } from 'react'
import Titile from '../../ui/Titile'
import Card from './card/card'
import axios from 'axios'
import ShowMoreButton from './button/ShowMoreButton'

interface Pop {
  id: number,
  name: string,
  image: string,
  restaurant: string,
  idRestaurant: string
  price: number,
  vote: number
}
const Product = ({ defaultImage }: any) => {
  const [pop, setPop] = useState<Pop[]>([]);
  const [more, setMore] = useState(3)
  const [max, setMax] = useState(false);
  const ShowMore = () => {
    if (pop.length > more) {
      setMore(more + 3);
      setMax(false)
    }
    else {
      setMax(true)
    }
  }
  useEffect(() => {
    axios.get('/data/data.product.json').then(data => setPop(data.data)).catch(err => console.error(err))
  }, [])
  return (
    <div>
      <Titile bTitile="Most Popular items" sTitile="Product" />
      <div className='flex justify-center flex-wrap gap-10'>
        {pop.slice(0, more).map((d) => {
          return (
            <div key={d.id} className=' w-[25vw] shadow rounded-2xl 
            md:h-[50vh]
            not-md:h-[25vh]'>
              <Card id={d.id} image={d.image} name={d.name} idRestaurant={d.idRestaurant} price={d.price} vote={d.vote} defaultImage={defaultImage} />
            </div>
          )
        })}
      </div>
      <div className='w-full flex justify-center my-8'>
        <ShowMoreButton ShowMore={ShowMore} max={max} />
      </div>
    </div>
  )
}

export default Product