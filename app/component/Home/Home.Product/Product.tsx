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
      if (pop.length > more + 3) {
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
    axios.get('http://localhost:3001/Product').then(data => setPop(data.data)).catch(err => console.error(err))
  }, [])
  return (
    <div>
      <Titile bTitile="Most Popular items" sTitile="Product" />
      <div className='w-[1440px] flex justify-center flex-wrap gap-8'>
        {pop.slice(0, more).map((d) => {
          return (
            <div key={d.id} className='w-[400px] shadow rounded-2xl hover:shadow-lg hover:scale-95
            md:h-[400px]
            not-md:h-[200px]'>
              <Card id={d.id} image={d.image} name={d.name} price={d.price} vote={d.vote} defaultImage={defaultImage} />
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