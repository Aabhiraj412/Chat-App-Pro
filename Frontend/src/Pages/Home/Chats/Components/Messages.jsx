import React from 'react'

function Messages() {
  return (
    <div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://avatar.iran.liara.run/public/boy?username=Abhiraj" />
                </div>
            </div>
            <div className="chat-footer">
                <time className="text-sm">12:45</time>
            </div>
            <div className="chat-bubble bg-sky-500 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">You were the Chosen One!
            </div>
        </div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://avatar.iran.liara.run/public/boy?username=Prathvi" />
                </div>
            </div>
            <div className="chat-footer">
                <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble bg-fuchsia-500 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">I hate you!    </div>
            </div>
    </div>
  )
}

export default Messages