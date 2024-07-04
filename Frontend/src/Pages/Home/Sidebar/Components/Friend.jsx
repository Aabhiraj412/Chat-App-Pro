import React from 'react'

function Friend() {
  return (
    <div>
        <div className='flex gap-2 bg-gradient-to-r from-cyan-500 to-blue-500
        shadow-xl items-center rounded p-4 py-1 h-14 mb-5 cursor-pointer'>
            <div className="min-w-10 w-1/6 avatar online">
                <div className = "rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <h1 className='text-white font-bold ml-5'>Name</h1>
        </div>
    </div>
  )
}

export default Friend