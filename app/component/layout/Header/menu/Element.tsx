const Element = ({name, href, id} : any) => {

  return (
    <a
    key={id}
    href={href} 
    className={`
        flex justify-center items-center text-[#224300] hover:brightness-150
      `}>
      {name}
    </a>
  )
}


export default Element