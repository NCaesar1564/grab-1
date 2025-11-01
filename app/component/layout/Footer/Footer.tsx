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
            <div className='w-full bg-green-50 flex justify-center items-start pt-5 lg:h-[18em] not-lg:h-[14em]'>
                <NavL />
            </div>
            <div className='w-full bg-[#195A00] flex justify-center items-center lg:h-[3em] not-lg:h-[6em]'>
                <div className='w-[80%] grid grid-cols-10 not-lg:gap-2'>
                    <div className='flex justify-start items-center gap-0.5 text-white lg:col-span-5  not-lg:col-span-10 not-lg:text-xs not-lg:text-nowrap'>
                        <p>Copyright</p>
                        <MdCopyright />
                        <p>2024 Shawon3 Themes. All rights reserved</p>
                    </div>
                    <div className="flex gap-5 lg:col-span-5 lg:justify-end not-lg:col-span-10 not-lg:justify-center not-lg:underline">
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