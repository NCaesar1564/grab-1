import React, { useEffect, useState } from 'react'
import Titile from '@/app/component/Auth/label/titile'
import Label from '@/app/component/Auth/label/label'
import Input from '@/app/component/Auth/input/input'
import Checkbox from '@/app/component/Auth/checkbox/checkbox'
import Button from '@/app/component/Auth/input/button'
import axios from 'axios'
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.post("http://localhost:8080/auth/login")
  }, [])
  return (
    <form className='w-[720px] h-[720px] flex flex-col justify-center items-center bg-[#F0F4EC] gap-y-5 not-md:w-[420px]'>
      <div className='flex justify-center'>
        <Titile />
      </div>
      <div className='flex flex-col gap-5'>
        <div className='w-full flex justify-start mb-3'>
          <Label bLabel="Sign up" sLable="Please, fill in this form to sign up" />
        </div>
        <div className='flex flex-col gap-2'>
          <Input type={"text"} placeholder={"Email"} />
          <Input type={"text"} placeholder={"Password"} />
        </div>
        <Checkbox />
        <Button name="Register" />
      </div>
    </form>
  )
}

export default Login