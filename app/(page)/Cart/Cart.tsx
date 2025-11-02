"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from '@/app/component/Cart/Cart.Link/link'
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
const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([])
  useEffect(() => {
    const MyCart = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return
        const res = await axios.get(`${process.env.USER_CART_HOST}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        setItems(res.data.data?.items || [])
      }
      catch (err: any) {
        console.log(err)
      }
    }
    MyCart()
  }, [])
  const total = items.reduce((sum, item) => sum + (item.product_id.sold || 0) * item.quantity, 0)
  return (
    <div className='min-h-[45vh]'>
      <Link />
      {items.length === 0 ?
        (<div>Your cart is empty</div>)
        :
        (
          <div>
            {items.map((d) => {
              return (
                <div key={d._id}>
                  <p>{d.product_id.name}</p>
                </div>
              )
            })}
          </div>
        )}
    </div>
  )
}

export default Cart
