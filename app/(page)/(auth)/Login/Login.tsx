import React, { useEffect, useState } from 'react'
import Titile from '@/app/component/Auth/label/titile'
import Label from '@/app/component/Auth/label/label'
import Input from '@/app/component/Auth/input/input'
import Checkbox from '@/app/component/Auth/checkbox/checkbox'
import Button from '@/app/component/Auth/input/button'
import axios from 'axios'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post(`${process.env.LOGIN_HOST}`, { username, password });
      setMessage("Successfully");
      const accessToken = res.data.data.access_token;
      const refreshToken = res.data.data.refresh_token;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userName", username);

      window.location.href = "/"
    }
    catch (err: any) {
      setMessage(err.response?.data?.message)
    }
  }
  return (
    <form className='w-[720px] h-[720px] flex flex-col justify-center items-center bg-[#F0F4EC] gap-y-5 not-md:w-[420px]' onSubmit={HandleSubmit}>
      <div className='flex justify-center'>
        <Titile />
      </div>
      <div className='flex flex-col gap-5'>
        <div className='w-full flex justify-start mb-3'>
          <Label bLabel="Login" sLable="Please, fill in this form to login" />
        </div>
        <div className='flex flex-col gap-2'>
          <Input type={"text"} placeholder={"Email"} onChange={(e: any) => setUsername(e.target.value)} />
          <Input type={"text"} placeholder={"Password"} onChange={(e: any) => setPassword(e.target.value)} />
        </div>
        <Checkbox />
        <Button name="Register" />
      </div>
      <div>
        <p className='text-red-500'>{message}</p>
      </div>
    </form>
  )
}

export default Login