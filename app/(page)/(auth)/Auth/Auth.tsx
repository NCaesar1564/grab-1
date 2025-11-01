"use client"
import React, { useEffect, useState } from 'react'
import Login from '../Login/page';
import Register from '../Register/page';

const auth = () => {
    const [page, setPage] = useState("login");
    
    useEffect(() => {
        const ChangePage = () => {
            setPage(window.location.hash === "#register" ? "register" : "login")
        }
        ChangePage();
        window.addEventListener("hashchange", ChangePage)
        return () => window.removeEventListener("hashchange", ChangePage)
    }, [])
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-center items-center bg-white gap-x-0.5'>
                <a href="#login" className={`w-32 p-2 rounded-l-2xl border font-bold cursor-pointer ${page === "login" ? `bg-[#396C03] text-white` : `bg-white`}`}>Login</a>
                <a href="#register" className={`w-32 p-2 rounded-r-2xl border font-bold cursor-pointer ${page === "register" ? `bg-[#396C03] text-white` : `bg-white`}`}>Register</a>
            </div>
            {page === "login" ? <Login /> : <Register />}
        </div >
    )
}

export default auth