import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addReceivedConnections } from '../utils/receivedConnectionsSlice'
import UserCard from './UserCard'

const ConnectionsRequests = () => {
    const reqRec = useSelector((store) => store.receivedConnections)
    const [isCardMode, setIsCardMode] = useState(true)

    const dispatch = useDispatch()
    const requestsReceived = async () => {
        try {
            const resp = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true })
            // console.log(resp.data.data)

            dispatch(addReceivedConnections(resp.data.data))
        }
        catch(err){
            console.error(err);
        }
    }

    const handleRequest=async(request,status)=>{
        try{
            const resp=await axios.post(BASE_URL+"/request/review/"+status+"/"+request._id,{},{withCredentials:true})
            requestsReceived()
        }catch(err){
            console.error(err)
        }
    }


    useEffect(() => {
        requestsReceived()
    }, [])

    if(!reqRec || reqRec.length==0){
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-100">
                <div className="max-w-md mx-auto text-center p-8">
                    
                    <div className="mb-8 relative">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-16 w-16 text-primary animate-bounce" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={1.5} 
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                                />
                            </svg>
                        </div>
                        
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-ping opacity-75"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                    </div>

                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        No Connection Requests
                    </h1>
                    
                    <p className="text-base-content/70 text-lg mb-8 leading-relaxed">
                        Your inbox is empty! When people send you connection requests, they'll appear here.
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="card-body p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-sm">Quick Response</h3>
                                        <p className="text-xs text-base-content/60">Accept or reject requests instantly</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="card-body p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-sm">Safe & Secure</h3>
                                        <p className="text-xs text-base-content/60">All requests are verified and secure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-base-content/50 mb-4">
                            💡 Tip: Visit the Feed to discover and connect with new people!
                        </p>
                        
                        
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='flex justify-between m-3'>
                <h1 className='text-xl font-bold'>Connection Requests</h1>
                <input
                    type="checkbox"
                    checked={isCardMode}
                    onChange={(e) => setIsCardMode(e.target.checked)}
                    className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800" title={isCardMode ? 'Toggle to View in Tile Mode' : 'Toggle to View in Card Mode'}
                />
            </div>

            {isCardMode && reqRec && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5'>
                    {reqRec.map((user) => (
                        <div key={user.fromUserId._id} className="w-full">
                            <UserCard user={user.fromUserId} showBtns={false} handleRequest={handleRequest} reqUser={user}/>
                        </div>
                    ))}
                </div>
            )}



            {!isCardMode && reqRec && (
                <div className='flex flex-wrap mb-10'>
                    {reqRec.map((user) => (
                        <div key={user.fromUserId._id} className='p-2 rounded w-full  m-2 cursor-pointer'>
                            <div className='flex items-center justify-between gap-3'>
                                <div className='flex items-center gap-3'>
                                <img
                                    src={user.fromUserId.photoUrl}
                                    alt="profile-pic"
                                    className='w-12 h-12 rounded-full object-cover'
                                />
                                <span className='font-semibold'>
                                    {user.fromUserId.firstName} {user.fromUserId.lastName}
                                </span>
                                </div>
                                <div className='flex gap-2'>
                                <button className='btn btn-success btn-sm sm:btn-md' onClick={()=>handleRequest(user,"accepted")} >Accept</button>
                                <button className='btn btn-error btn-sm sm:btn-md' onClick={()=>handleRequest(user,"rejected")}>Reject</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}


        </div>
    )
}

export default ConnectionsRequests