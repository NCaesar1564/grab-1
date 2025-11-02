"use client"

import React, { useEffect, useReducer, useState } from 'react'
import Title from '../../ui/Title'
import Card from './card/card'
import axios from 'axios'
import ShowMoreButton from './button/ShowMoreButton'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface ProductTable {
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
interface CartState {
  cart: any[]
}
type Action =
  | { type: "ADD_TO_CART"; payload: string }
  | { type: "SET_CART"; payload: any[] }

const initState: CartState = {
  cart: []
}

const Reducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload }

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] }

    default:
      return state
  }
}

const Product = ({ title }: any) => {
  const [pop, setPop] = useState<ProductTable[]>([])
  const [more, setMore] = useState(3)
  const [max, setMax] = useState(false)
  const [state, dispatch] = useReducer(Reducer, initState)
  const router = useRouter()

  const ShowMore = () => {
    if (pop.length > more) {
      setMore(more + 3)
      if (pop.length > more + 3) {
        setMax(false)
      } else {
        setMax(true)
      }
    } else {
      setMax(true)
    }
  }

  useEffect(() => {
    axios.get(`${process.env.PRODUCT_PUBLIC_HOST}`)
      .then(data => setPop(data.data.data))
      .catch(err => console.error(err))
  }, [])

  const handleAddToCart = async (product_id: string) => {
    try {
      const token = localStorage.getItem("accessToken")

      const res = await axios.post(
        "http://localhost:8080/cart/items",
        {
          product_id,
          quantity: 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      dispatch({ type: "ADD_TO_CART", payload: product_id })
      toast.success("Added to cart!")
    } catch (error: any) {
      toast.error(error)
    }
  }


  return (
    <div>
      <Title bTitle="Most Popular items" sTitle="Product" title={title} />
      <div className='w-full max-w-[1300px] flex justify-center items-center flex-wrap gap-8'>
        {pop.slice(0, more).map((d) => {
          return (
            <div key={d._id} className='w-[400px] h-[400px] shadow rounded-2xl hover:shadow-lg hover:scale-99'>
              <Card
                _id={d._id}
                image={d.images[0]}
                name={d.name}
                price={d.sold}
                vote={d.rating}
                onClick={() => handleAddToCart(d._id!)}
              />
            </div>
          )
        })}
      </div>
      <div className='w-full flex justify-center my-8'>
        <ShowMoreButton onClick={ShowMore} max={max} />
      </div>
    </div>
  )
}

export default Product
