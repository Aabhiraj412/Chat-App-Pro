import React from 'react'

function Header() {
  return (
    <div className='rounded-lg h-12 flex justify-start items-center p-5
    bg-gradient-to-r from-sky-500 to-indigo-500'>
        <div className="h-10 avatar">
            <div className = "rounded-full">
                <img src="
                https://avatar.iran.liara.run/public/boy?username=Abhiraj
                // https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg
                    " />
            </div>
        </div>
        <div>
            <h1 className='text-white font-bold ml-5'>Name</h1>
        </div>
    </div>
  )
}

export default Header