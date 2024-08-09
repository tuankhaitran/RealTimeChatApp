import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import facebookStyleDatetime from '../../utils/extractTime'

function Message({message}) {
const {authUser}= useAuthContext()
const {selectedConversation}=useConversation()
const fromMe= message?.senderId===authUser._id
const chatClassName = fromMe ? "chat-end" : "chat-start"
const profilePic = fromMe? `https://${authUser.profilePic}`: `https://${selectedConversation.profilePic}`
const bubbleBgColor=fromMe ? "bg-blue-500": "";
const formattedTime= facebookStyleDatetime(new Date(message.createdAt))
  return (
        <>
        <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic} />
    </div>
  </div>
  <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>
  <div className="chat-footer opacity-50">{formattedTime}</div>
</div>
{/* <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div> */}
        </>
    )
}

export default Message