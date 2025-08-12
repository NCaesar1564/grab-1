import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { LuClock } from 'react-icons/lu'
import { PiPhoneCallFill } from 'react-icons/pi'
import Card from './card/card'

const ContactInfoSection = () => {
    const Section = [
        {
            id: 1,
            lNote: "Today 10:00am - 10:00pm",
            sNote: "Working time",
            icon: <LuClock size={22} />,
        },
        {
            id: 2,
            lNote: "Washington, D.C., DC,USA",
            sNote: "Our Location",
            icon: <CiLocationOn size={22} />
        },
        {
            id: 3,
            lNote: "+12 345 678",
            sNote: "Phone Number",
            icon: <PiPhoneCallFill size={22} />
        }
    ]
    return (
        <>
            {Section.map((d, index) => {
                return (
                    <div key={d.id} className='
                     max-w-full flex justify-center items-center gap-y-6
                    md:h-16
                    '>
                        <Card icon={d.icon} lNote={d.lNote} sNote={d.sNote} />
                        <div className={`h-full border-amber-400 not-md:hidden ${index !== Section.length - 1 ? "border border-l border-gray-300" : "border-none"}`}></div>
                    </div>
                )
            })}
        </>
    )
}

export default ContactInfoSection