import BestSeller from '@/app/component/Home/Home.BestSeller/BestSeller'
import ContactInfoSection from '@/app/component/Home/Home.ContactInfoSection/ContactInfoSection'
import DeliveryWay from '@/app/component/Home/Home.DeliveryWay/DeliveryWay'
import Product from '@/app/component/Home/Home.Product/Product'
import SendMail from '@/app/component/Home/Home.SendMail/SendMail'
import Service from '@/app/component/Home/Home.Service/Service'
import Testimonial from '@/app/component/Home/Home.Testimanial/Testimonial'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <BestSeller />
      <div className='w-[1400px] flex justify-center items-center gap-x-20 flex-wrap p-10 rounded-2xl mt-20 not-lg:hidden shadow-[#B6B6B6]'
        style={{ boxShadow: '0 0 4px rgba(0,0,0,0.1)' }}>
        <ContactInfoSection />
      </div>
      <Product />
      <Service/>
      <DeliveryWay/>
      <Testimonial/>
      <SendMail />
    </div>
  )
}

export default HomePage