import React from 'react'
import { TbLogout2 } from "react-icons/tb";

function LogOut() {
  return (
    <div className='h-14 flex items-center'>
      <button type='submit' className='btn btn-circle bg-transparent h-full text-white hover:bg-transparent hover:text-red-600 border-none'>
      {/* <IoSearch className='w-6 h-6'/> */}
        <TbLogout2 className='w-10 h-10'/>
      </button>
      {/* LogOut */}
    </div>
  )
}

export default LogOut