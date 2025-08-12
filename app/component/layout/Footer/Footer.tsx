import { MdCopyright } from "react-icons/md"
import NavS from "./nav/NavS"
import NavL from "./nav/NavL"

const Footer = () => {
    const SmNav = [
        {
            id: 1,
            name: "Privacy Policy",
            href: "/Policy"
        },
        {
            id: 2,
            name: "Term of Use",
            href: "/Term"
        },
        {
            id: 3,
            name: "Partner",
            href: "/Partner"
        }
    ]

    return (
        <div className='w-full h-[20em] flex flex-col justify-center items-center'>
            <div className='w-full bg-green-50 flex justify-center items-start pt-5
            md:h-[18em]
            not-md:h-[14em]'>
                <NavL />
            </div>
            <div className='w-full bg-[#195A00] flex justify-center items-center 
            md:h-[3em]
            not-md:h-[6em]'>
                <div className='w-[80%] grid grid-cols-10 not-md:gap-2'>
                    <div className='flex justify-start items-center gap-0.5 text-white 
                    md:col-span-5 
                    not-md:col-span-10 not-md:text-xs not-md:text-nowrap'>
                        <p>Copyright</p>
                        <MdCopyright />
                        <p>2024 Shawon3 Themes. All rights reserved</p>
                    </div>
                    <div className="flex gap-5  
                    md:col-span-5 md:justify-end
                    not-md:col-span-10 not-md:justify-center not-md:underline">
                        {SmNav.map((d) => {
                            return (
                                <div key={d.id}>
                                    <NavS name={d.name} href={d.href} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer