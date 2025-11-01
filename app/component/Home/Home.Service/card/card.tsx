const card = ({ title, note }: any) => {

  return (
    <div className={`h-full w-full border border-[#B6B6B6] rounded-2xl flex flex-col justify-center items-center p-10 gap-7 cursor-pointer transition-all hover:scale-101 hover:shadow-2xl hover:border-none`} >
      <div className='bg-[#396C03] h-[3em] w-[3em] rounded-[50%]'></div>
      <h1 className='text-xl font-bold not-lg:text-lg'>{title}</h1>
      <p className='text-wrap text-center not-lg:text-xs'>{note}</p>
    </div>
  )
}

export default card