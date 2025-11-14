"use client"
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Link from '@/app/component/Cart/Cart.Link/link'
import OrderButton from '@/app/component/Cart/button/OrderButton';
interface CartItem {
  _id: string;
  product_id: {
    _id: string;
    name: string;
    sold: number;
    thumbnail_url?: string;
    images: string[];
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
        const res = await axios.get(`${process.env.CART_HOST}`, {
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
          <div className='flex flex-wrap'>
            {items.map((d) => {
              return (
                <div key={d._id} className='flex flex-col justify-center items-center mx-1'>
                  <img src={d.product_id.images[0]} alt={d.product_id.name} className='w-full p-0.5'/>
                  <p>{d.product_id.name}</p>
                  <p>{d.product_id.sold}</p>
                  <p>{d.quantity}</p>
                </div>
              )
            })}
            <div className='w-full flex items-center justify-start'>
              <strong className='text-start'>Total: ${total}</strong>
              <OrderButton />
            </div>
          </div>
        )}
    </div>
  )
}

export default Cart
