"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import { GoClock } from 'react-icons/go'
import { IoIosSend } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { LuMailOpen } from 'react-icons/lu'

interface Gallery {
  id: number,
  name: string;
  image: string,
}

const NavL = () => {
  const [email, setEmail] = useState("");
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const Link = [
    {
      id: 1,
      name: "About us",
      href: "/AboutUs"
    },
    {
      id: 2,
      name: "Contact us",
      href: "/Contact"
    },
    {
      id: 3,
      name: "Our Menu",
      href: "/Menu"
    },
    {
      id: 4,
      name: "Team",
      href: "/Team  "
    }, {
      id: 5,
      name: "FAQ",
      href: "/FAQ"
    },
  ]
  useEffect(() => {
    axios.get('/data/data.gallery.json').then(res => setGallery(res.data)).catch(err => console.error(err))
  }, [])
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-start gap-x-20 not-lg:gap-x-5'>
        {/* div1 */}
        <div className='flex flex-col items-start gap-y-5  not-xl:hidden'>
          <h1 className='text-[24px] font-bold w-[101px]'>Foodtuck</h1>
          <p className='text-[18px] font-normal w-[254px]'>Subscribe our newsletter and get discount 25% off</p>
          <form className='w-[242px] h-[40px] rounded-xl flex justify-end items-center gap-0 bg-white'>
            <input type="text" placeholder='Enter Your Email' className='outline-none' onChange={(e) => setEmail(e.target.value)} />
            <p className='h-[40px] w-[43px] text-white bg-[#195A00] flex justify-center items-center rounded-xl'>
              <IoIosSend className='h-[19px] w-[19px] ' />
            </p>
          </form>
        </div>
        {/* div2 */}
        <div className='flex flex-col items-start gap-y-3 not-lg:gap-2'>
          <h1 className='text-[20px] font-bold w-[97px] text-nowrap'>Contact us</h1>
          <p className='flex items-center gap-2'><IoLocationOutline />Kolkata India, 3rd Floor, Office 45</p>
          <p className='flex items-center gap-2'><FiPhone />00965 - 96659986</p>
          <p className='flex items-center gap-2'><LuMailOpen />M.Alyaqout@4house.Co</p>
          <p className='flex items-center gap-2'><GoClock />Sun - Sat/ 10:00 AM - 8:00 PM</p>
        </div>
        {/* div3 */}
        <div className='flex flex-col items-start gap-y-3 not-lg:gap-2'>
          <h1 className='text-[20px] font-bold w-[97px] text-nowrap'>Contact us</h1>
          {Link.map((d) => {
            return (
              <a key={d.id} href={d.href} className='hover:text-[#195A00] not-lg:underline underline-offset-2'>{d.name}</a>
            )
          })}
        </div>
        {/* div4 */}
        <div className='w-[336px] flex flex-col items-start gap-y-3 pb-3 not-lg:hidden'>
          <h1 className='text-[20px] font-bold w-[97px] text-nowrap'>Instagram Gallery</h1>
          <div className='w-full h-[220px] flex flex-wrap gap-1'>
            {gallery.slice(0, 6).map((d) => (
              <div className='w-[109px] h-[108px] cursor-pointer hover:scale-95 transition-all' key={d.id}>
                <Image height={108} width={109} alt={d.name} src={d.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavL