"use client"

import { useEffect, useState } from "react"
import Logo from "./logo/Logo"
import Menu from "./menu/Menu"
import Search from "./button/Search"
import Cart from "./button/Cart"
import Login from "./button/Login"

const Header = () => {
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [quality, setQuality] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const SearchInput = () => {
    setSearch(!search);
  }
  const onTextChange = (e: any) => {
    setKeyword(e.target.value)
  }

  if (isDesktop) {
    return (
      <div className='w-full h-[3.75em] flex items-center justify-center'>
        <div className="w-[1411px] flex items-center justify-center ">
          <div className="flex justify-center
          md:w-2/12 ">
            <Logo />
          </div>
          <div className={`
          flex justify-center items-center 
          md:w-10/12
          `
          }>
            <div className="
            flex justify-center items-center
            md:w-6/12">
              <div className="flex justify-center items-center gap-5 flex-row">
                <Menu />
              </div>
            </div>

            <div className="w-4/12 flex justify-end items-center gap-8">
              <Search SearchInput={SearchInput} search={search} onTextChange={onTextChange} />
              <div className="
              flex gap-8 justify-center items-center">
                <div className="flex  items-center text-nowrap gap-1">
                  <p className='md:hidden font-bold'>Giỏ hàng</p>
                  <Cart quality={quality} />
                </div>
                <div>
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full flex flex-col gap-6 p-2">
        <div className="w-full flex items-center justify-center gap-3">
          <div className="w-1/3 flex justify-center">
            <Logo />
          </div>
          <div className="w-1/3 flex justify-end">
            <Search SearchInput={SearchInput} search={search} onTextChange={onTextChange} />
          </div>
          <div className="w-1/3 flex justify-center">
            <Login />
          </div>
        </div>
        <div className="flex items-center justify-center border py-2">
          <div className="flex flex-row gap-3">
            <Menu />
            <Cart quality={quality} />
          </div>
        </div>
      </div>
    )
  }

}
export default Header