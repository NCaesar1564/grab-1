"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import Border from "./border";

interface Product {
  id: number,
  name: string,
  image: string,
  note: string,
  price: number,
  vote: number,
}
const Card = (defaultImage: any) => {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    axios.get('http://localhost:3001/Product')
      .then((data) => setProduct(data.data))
      .catch(err => console.error(err))
  }, [])
  return (
    <>
      {product.slice(0, 4).map((d) => {
        return (
          <div key={d.id}>
            <Border id={d.id} image={d.image} name={d.name} price={d.price} note={d.note} defaultImage={defaultImage} />
          </div>
        )
      })}
    </>
  )
}

export default Card