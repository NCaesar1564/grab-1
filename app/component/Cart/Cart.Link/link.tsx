const link = () => {
  return (
    <div className='w-full not-lg:w-[500px] h-[300px] flex justify-center items-center bg-[url("/images/CartImage.png")] text-sm py-2 not-lg:justify-center relative'>
      <p className='font-bold flex text-3xl  text-white font-serif'>CART</p>
      <a href="/Contact" className='text-xl text-white outline-none border-none absolute top-3 right-5'>Contact</a>
    </div>
  )
}

export default link