"use client"
import Field from './field'
import Icon from './icon'
import Button from '../button/button'
import { FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import { RiFacebookFill } from 'react-icons/ri'

const input = () => {
    const Ico = [
        {
            id: 1,
            ico: <RiFacebookFill />,
            href: "/#"
        },
        {
            id: 2,
            ico: <FaTwitter size={20} />,
            href: "/#"
        },
        {
            id: 3,
            ico: <FaPinterest size={20} />,
            href: "/#"
        },
        {
            id: 4,
            ico: <FaInstagram size={20} />,
            href: "/#"
        }
    ]
    return (
        <div className='flex items-center gap-2'>
            <div className='w-[492px] h-[52px] rounded-[46px] flex items-center bg-white gap-1'>
                <Field />
                <Button />
            </div>
            <div className='flex items-center justify-center gap-2'>
                {Ico.map((d) => {
                    return (
                        <div key={d.id} className='h-[40px] w-[40px] flex justify-center items-center hover:bg-[#396C03] hover:text-white rounded-[50%] cursor-pointer'>
                            <Icon ico={d.ico} href={d.href} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default input