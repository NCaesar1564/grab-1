import { CgProfile } from "react-icons/cg"
import { FaUser } from "react-icons/fa"
import { IoIosLogOut } from "react-icons/io"

const Login = ({ state, userName, Logout, ShowAll, show }: any) => {
  if (state === false) {
    return (
      <a href='/auth#login' className='h-[60px] w-[179px] flex justify-center items-center border px-10 py-2 rounded-[40px] bg-[#224300] text-white'>Login</a>
    )
  } else {
    return (
      <div className="relative">
        <button onClick={ShowAll} className="h-[60px] w-[179px] bg-[#224300] border rounded-[20px] text-white flex justify-center items-center gap-2 not-lg:w-[120px] transition-all duration-300 hover:bg-[#2f5a00] cursor-pointer z-40"><FaUser />{userName}</button>
        <div
          className={`absolute top-[0] left-0 w-[179px] bg-[#224300] text-white rounded-[20px] overflow-hidden transition-all duration-300 origin-top z-50 
        ${show ? "max-h-[240px] opacity-100 scale-y-100 translate-y-0 not-lg:w-[120px]" : "max-h-0 opacity-0 scale-y-0 -translate-y-2"}`}>
          <button onClick={ShowAll} className="h-[60px] w-[179px] bg-[#224300]  text-white flex justify-center items-center gap-2 not-lg:w-[120px] transition-all duration-300 hover:bg-[#2f5a00] cursor-pointer"><FaUser />{userName}</button>
          <a href="/profile" className="flex justify-center items-center gap-2 w-full text-center py-3 hover:bg-green-800 transition-all duration-200 not-lg:text-sm not-lg:w-[120px]"><CgProfile />Profile</a>
          <button onClick={Logout} className="flex justify-center items-center gap-2 w-full text-center py-3 hover:bg-green-800 cursor-pointer transition-all duration-200 not-lg:text-sm not-lg:w-[120px]" ><IoIosLogOut size={20} />Log out</button>
        </div>
      </div >
    )
  }
}

export default Login