"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import Border from "./border";

interface BestSeller {
  id: number,
  name: string,
  image: string,
  note: string,
  price: number,
  restaurant: string,
  idRestaurant: number
}
const Card = (defaultImage: any) => {
  const [bestS, setBestS] = useState<BestSeller[]>([]);
  useEffect(() => {
    axios.get('/data/data.bestSeller.json')
      .then((data) => setBestS(data.data))
      .catch(err => console.error(err))
  }, [])
  return (
    <>
      {bestS.map((d) => {
        return (
          <div key={d.id}>
            <Border id={d.id} image={d.image} name={d.name} price={d.price} note={d.note} idRestaurant={d.idRestaurant} />
          </div>
        )
      })}
    </>
  )
}

export default Card