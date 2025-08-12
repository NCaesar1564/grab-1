"use client"
import { FiSearch } from 'react-icons/fi'

const Search = ({ search, SearchInput, onTextChange}: any) => {
    return (
        <div className='relative w-fit flex flex-row items-center px-1'>
            <label onClick={SearchInput} className='cursor-pointer z-20' htmlFor='search'><FiSearch size={25} className={`${search ? 'text-white' : 'text-black  not-md:text-white'}`} /></label>
            <input onChange={onTextChange} type="text" id='search' className={`
                bg-[#224300] transition-all duration-500 absolute right-0 z-10 text-white rounded-lg px-2 py-1 outline-none ${search ? `
                md:w-52 not-md:w-32 `
                    :
                    `md:w-0 invisible
                 not-md:visible not-md:w-32`}`} />
        </div>
    )
}

export default Search