"use client"

import { useEffect, useState } from "react"
import Logo from "./logo/Logo"
import Menu from "./menu/Menu"
import Search from "./button/Search"
import Cart from "./button/Cart"
import Login from "./button/Login"
import { useRouter } from "next/navigation"

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
const Header = () => {
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [quality, setQuality] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false)
  const router = useRouter()
  const ShowAll = () => {
    setShow(!show)
  }
  const handleCart = () => {
    const islogged = localStorage.getItem("accessToken");
    if (islogged) {
      router.push("/cart")
    } else {
      router.push("/auth#login")
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("userName")
    localStorage.clear();
    router.push('/')
    window.location.reload()

  }
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("userName");
    if (token) {
      setIsLogged(true);
      setUserName(storedUser || "");
    } else {
      setIsLogged(false);
      setUserName("");
    }
  }, []);
  const SearchInput = () => { setSearch(!search) }
  const onTextChange = (e: any) => { setKeyword(e.target.value) }
  return (
    <div className='w-full h-[3.75em] flex items-center justify-center mt-[20px] z-50'>
      <div className="w-[1411px] h-0 flex items-center justify-center ">
        <div className="flex justify-center w-2/12 ">
          <Logo />
        </div>
        <div className={`flex justify-center items-center w-10/12`}>
          <div className="flex justify-center items-center w-6/12">
            <div className="flex justify-center items-center gap-5 flex-row">
              <Menu />
            </div>
          </div>

          <div className="w-4/12 flex justify-end items-center gap-8">
            <Search SearchInput={SearchInput} search={search} onTextChange={onTextChange} />
            <div className="flex gap-8 justify-center items-center">
              <div className="flex  items-center text-nowrap gap-1 ">
                <Cart quality={quality} handleCart={handleCart} />
              </div>
              <Login state={isLogged} userName={userName} Logout={handleLogout} ShowAll={ShowAll} show={show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header