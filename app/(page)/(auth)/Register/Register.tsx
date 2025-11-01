"use client"
import Titile from '@/app/component/Auth/label/titile'
import Label from '@/app/component/Auth/label/label'
import Input from '@/app/component/Auth/input/input'
import Checkbox from '@/app/component/Auth/checkbox/checkbox'
import Button from '@/app/component/Auth/input/button'
import { useState } from 'react'
import axios from 'axios'
import { redirect } from 'next/navigation'
const Register = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage("");
    if (password !== confirmPassword) { setMessage("Confirm password is not match"); return }
    try {
      const res = await axios.post("http://localhost:8080/auth/signup", {
        username, email, password, rolename: "user"
      })
      setMessage("Successfully");
      window.location.hash = "login";

    } catch (err: any) {
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
          <Label bLabel="Sign up" sLable="Please, fill in this form to sign up" />
        </div>
        <div className='flex flex-col gap-2'>
          <Input type={"text"} placeholder={"Name"} onChange={(e: any) => setName(e.target.value)} />
          <Input type={"email"} placeholder={"Email"} onChange={(e: any) => setEmail(e.target.value)} />
          <Input type={"password"} placeholder={"Password"} onChange={(e: any) => setPassword((e.target.value))} />
          <Input type={"password"} placeholder={"Confirm Password"} onChange={(e: any) => setConfirmPassword(e.target.value)} />
        </div>
        <Checkbox />
        <Button name="Register" />
      </div>
      <div className='w-full flex justify-center'>
        <p className='text-red-500 text-wrap text-justify w-[562px]'>{message}</p>
      </div>
    </form>
  )
}

export default Register