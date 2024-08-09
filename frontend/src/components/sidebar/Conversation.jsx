import React from 'react'
import { AiFillFire } from "react-icons/ai";
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

export default function Conversation({
  key,
  conversation,
}) {
  const {selectedConversation,setSelectedConversation}=useConversation()
  const isSelected = selectedConversation?._id === conversation._id
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)


  return (
    <div key ={key} className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected? "bg-sky-500":""}`}
  onClick={()=>setSelectedConversation(conversation)}>
        <div className={`${isOnline ? "avatar online": ""}`}>
        <div className="w-12 rounded-full">
            <img src={`https://${conversation?.profilePic}`} alt ="user avatar"/>
        </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold">{conversation.fullName}</p>
                <AiFillFire/>
            </div>
        </div>
        
    </div>
  )
}
