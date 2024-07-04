import React from 'react'
import Messages from './Messages'

function ChatZone() {
  return (
    <div className='shadow-xl my-3 h-4/5 overflow-y-scroll no-scrollbar'>
        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>
    </div>
  )
}

export default ChatZone