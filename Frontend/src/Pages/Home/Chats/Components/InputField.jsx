import React from 'react'
import { IoSend } from "react-icons/io5";

function InputField() {
  return (
    <div className='flex'>
        <input
            type="text"
            placeholder="Message"
            className="input input-bordered input-info w-full bg-gradient-to-r from-sky-200 to-indigo-200" />
        <button className='w-14 h-12 flex items-center bg-blue-400 rounded-full justify-center ml-5 text-white border-blue-500 hover:bg-blue-300 hover:text-blue-600 hover:border-2 hover:border-blue-600'>
            <IoSend className='w-8 h-8'/>
        </button>
    </div>
  )
}

export default InputField