import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useConversation from '../../zustand/useConversation'
import useListenMessages from '../../hooks/useListenMessages'

function Messages() {
  const {messages,loading} = useGetMessages()
  useListenMessages()
  const {selectedConversation} = useConversation()
  console.log(selectedConversation)
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && (
        messages.map(message=>
          <Message key={message._id} message={message}/>
        )
      )}
      {loading && 
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
      }
      {!loading && messages.length === 0 && <p className='text-center'>Send a message to start the conversation</p>}
    </div>
  )
}

export default Messages