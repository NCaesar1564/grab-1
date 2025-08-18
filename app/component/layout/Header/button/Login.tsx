const Login = ({ state, userName }: any) => {
  if (state == false) {
    return (
      <a href='/Auth#login' className='border px-10 py-2 rounded-3xl bg-[#224300] text-white '>Login</a>
    )
  } else {
    return (
      <div className='border px-10 py-2 rounded-3xl bg-[#224300] text-white curpo'>{userName}</div>
    )
  }
}

export default Login