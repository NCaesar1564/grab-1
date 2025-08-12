"use client"

import { useEffect, useState } from "react"

interface User {
  _id: string,
  username: string,
  password: string,
  email: string,
  phone: string,
  fullName: string,
  avatarUrl: string,
  address: string,
  role: string,
  status: boolean,
  refreshToken: string,
}
const Login = () => {
  const [refresh, setRefresh] = useState<User[]>([])
  const IsLogin = localStorage.getItem("")
  
  return (
    <a href='/Auth#login' className='border px-10 py-2 rounded-3xl bg-[#224300] text-white '>Login</a>
  )
}

export default Login