import BestSeller from '@/app/component/Home/Home.BestSeller/BestSeller'
import ContactInfoSection from '@/app/component/Home/Home.ContactInfoSection/ContactInfoSection'
import DeliveryWay from '@/app/component/Home/Home.DeliveryWay/DeliveryWay'
import Product from '@/app/component/Home/Home.Product/Product'
import SendMail from '@/app/component/Home/Home.SendMail/SendMail'
import Service from '@/app/component/Home/Home.Service/Service'
import Testimonial from '@/app/component/Home/Home.Testimanial/Testimonial'
import React from 'react'

const HomePage = ({defaultImage} : any) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <BestSeller defaultImage={defaultImage}/>
      <div className='w-[1400px] flex justify-center items-center gap-x-20 flex-wrap p-10 rounded-2xl mt-20
        not-md:gap-y-5' style={{ boxShadow: '0 0 5px rgba(0,0,0,0.3)'}}>
        <ContactInfoSection />
      </div>
      <Product defaultImage={defaultImage}/>
      <Service />
      <DeliveryWay />
      <Testimonial defaultImage={defaultImage}/>
      <SendMail />
    </div>
  )
}

export default HomePage