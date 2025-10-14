import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const Chat = () => {

  const targetUserId = useParams().targetUserId;
  // console.log("targetUserId:",targetUserId)

  const [messages, setMessages] = useState([])

  const newMessage = useRef(null)

  const user = useSelector((state) => state.user)
  const userId = user?._id


  const fetchChatMessages=async()=>{
    const chat=await axios.get(BASE_URL+'/CHAT/'+targetUserId,{
      withCredentials:true,
    })

    const chatMessages=chat?.data?.messages.map((msg)=>{
      const {senderId,text}=msg;
      return{
        message:text,
        firstName:senderId?.firstName,
        lastName:senderId?.lastName,
        photoUrl:senderId?.photoUrl,
        userId:senderId?._id,
        targetUserId:targetUserId,
        createdAt:msg?.createdAt,
      }
    })

    setMessages(chatMessages)

  }

  useEffect(()=>{
    fetchChatMessages()
  })

  useEffect(() => {
    if (!userId) return;
    const socket = createSocketConnection()

    socket.emit('joinChat', { firstName: user?.firstName, userId: userId, targetUserId: targetUserId })

    socket.on('messageReceived', ({ message, userId, targetUserId, firstName, roomId, createdAt ,photoUrl}) => {
      // console.log(firstName + "->" + message)
      setMessages((prevMessages) => [...prevMessages, { message, userId, targetUserId, firstName, roomId, createdAt,photoUrl }])
    })

    return () => {
      socket.disconnect()
    }

  }, [userId, targetUserId])


  const handleSendMsg = () => {
    if (newMessage.current.value.trim() === "") return;

    const socket = createSocketConnection()
    socket.emit('sendMessage', { message: newMessage.current.value, userId, targetUserId, firstName: user?.firstName,photoUrl:user?.photoUrl })
    newMessage.current.value = ""

  }

return (
  <div className='card bg-base-100 shadow-xl mx-auto my-10 w-full max-w-4xl'>
    <div className='card-body p-6'>
      <div className='h-96 overflow-y-auto space-y-4 bg-base-200 rounded-lg p-4'>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
            <p className="text-base-content/70">Start the conversation by sending a message!</p>
          </div>
        ) : (
          messages.map((msg, index) => {
            const isMyMessage = msg?.userId === userId;
            return (
              <div key={index} className={`chat ${isMyMessage ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={msg?.photoUrl}
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {msg?.firstName}&nbsp;{msg?.lastName}
                  <time className="text-xs opacity-50 ml-2">
                    {new Date(msg?.createdAt).toLocaleDateString('en-IN')} {new Date(msg?.createdAt).toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata'})}
                  </time>
                </div>
                <div className={`chat-bubble ${isMyMessage ? 'bg-black text-white' : 'bg-green-500 text-white'}`}>
                  {msg?.message}
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            );
          })
        )}
      </div>

      <div className='flex gap-3 mt-4'>
        <input
          type="text"
          placeholder="Type here..."
          className="input input-bordered input-primary flex-1"
          ref={newMessage}
        />
        <button className="btn btn-primary" onClick={handleSendMsg}>
          Send
        </button>
      </div>
    </div>
  </div>
);
}




export default Chat