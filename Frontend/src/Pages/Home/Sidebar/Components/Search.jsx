import React from 'react'
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='flex items-center justify-between gap-2'>
      <label className="input w-4/6 hover:bg-blue-200 input-bordered flex items-center gap-2 bg-blue-100">
        <input type="text" className="grow text-gray-700 placeholder:text-gray-700 " placeholder="Search"/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
        </svg>
      </label>
      <button type='submit' className='btn btn-circle bg-blue-500 w-1/4 h-full text-white border-blue-900 hover:bg-blue-300 hover:text-blue-600 hover:border-2 hover:border-blue-600'>
      <IoSearch className='w-6 h-6'/>
      </button>
    </div>
        
  )
}

export default Search