"use client"

import axios from "axios";
import { useState } from "react"
import { toast } from 'react-toastify';

interface CartItem {
  _id: string;
  product_id: {
    _id: string;
    name: string;
    sold: number;
    thumbnail_url?: string;
    images?: string[];
  };
  quantity: number;
}

export default function OrderButton() {
  const [cart, setCart] = useState<CartItem[]>([])
  const token = localStorage.getItem("accessToken")
  const HandleOrder = async () => {
    axios.delete(`${process.env.CLEAR_CART_HOST}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setCart(res.data))
      .catch(err => toast.error(err || "Order Failed"))
  }
  return (
    <button className='p-2 text-end' onClick={HandleOrder}>Order</button>
  )
}
