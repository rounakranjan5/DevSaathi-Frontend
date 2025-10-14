import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { addConnections } from '../utils/connectionsSlice'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import { Link } from 'react-router'

const Connections = () => {

    const dispatch = useDispatch()
    const myconnection = useSelector((store) => store.connections)
    const [isCardMode, setIsCardMode] = useState(true)

    const fetchConnections = async () => {
        try {
            const resp = await axios.get(BASE_URL + '/user/connections', {
                withCredentials: true
            })

            dispatch(addConnections(resp.data.data))

        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if(!myconnection || myconnection.length==0){
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-100">
                <div className="max-w-lg mx-auto text-center p-8">
                    <div className="mb-8 relative">
                        <div className="w-40 h-40 mx-auto bg-gradient-to-br from-success/20 via-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                            <div className="relative">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-20 w-20 text-primary" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={1.5} 
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" 
                                    />
                                </svg>
                            </div>
                        </div>
                        
                        <div className="absolute top-4 right-8 w-4 h-4 bg-success rounded-full animate-bounce opacity-75"></div>
                        <div className="absolute bottom-8 left-6 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                        <div className="absolute top-12 left-4 w-2 h-2 bg-accent rounded-full animate-ping"></div>
                    </div>

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-success via-primary to-secondary bg-clip-text text-transparent mb-6">
                        No Connections Yet
                    </h1>
                    
                    <p className="text-base-content/70 text-xl mb-8 leading-relaxed">
                        Start building your network! Connect with people who share your interests and grow your community.
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:shadow-lg transition-all duration-300">
                            <div className="card-body p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-bold text-lg">Discover People</h3>
                                        <p className="text-base-content/60">Browse the Feed to find interesting profiles</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20 hover:shadow-lg transition-all duration-300">
                            <div className="card-body p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-bold text-lg">Send Requests</h3>
                                        <p className="text-base-content/60">Connect with people you'd like to know better</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 hover:shadow-lg transition-all duration-300">
                            <div className="card-body p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-bold text-lg">Start Chatting</h3>
                                        <p className="text-base-content/60">Once connected, chat and build relationships</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-200 rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-center mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                                <span className="text-white text-lg">💫</span>
                            </div>
                        </div>
                        <blockquote className="italic text-base-content/80 text-lg">
                            "Your network is your net worth. Start connecting today!"
                        </blockquote>
                    </div>

                    
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='flex justify-between m-3'>
                <h1 className='text-xl font-bold'>My Connections</h1>
                <input
                    type="checkbox"
                    checked={isCardMode}
                    onChange={(e) => setIsCardMode(e.target.checked)}
                    className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800" title={isCardMode ? 'Toggle to View in Tile Mode' : 'Toggle to View in Card Mode'}
                />
            </div>

            {isCardMode && myconnection && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5'>
                    {myconnection.map((user) => (
                        <div key={user._id} className="w-full">
                            <UserCard user={user} showBtns={false} showChatbtnInProfile={true} />
                        </div>
                    ))}
                </div>
            )}



            {!isCardMode && myconnection && (
                <div className='flex flex-wrap mb-10'>
                    {myconnection.map((user) => (
                        <div key={user._id} className='p-2 rounded w-full  m-2 cursor-pointer flex justify-between'>
                            <div className='flex items-center justify-start gap-3 flex-wrap'>
                                <img
                                    src={user.photoUrl}
                                    alt="profile-pic"
                                    className='w-12 h-12 rounded-full object-cover'
                                />
                                <span className='font-semibold'>
                                    {user.firstName} {user.lastName}
                                </span>
                            </div>
                            
                            <div className="card-actions flex justify-center my-1 gap-2">
                                <Link to={'/chat/'+user._id} className="btn  bg-[#03C755] text-white border-[#00b544] flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" viewBox="0 0 24 24"
                                        fill="white" aria-hidden="true">
                                        <path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                    Chat
                                </Link>


                            </div>
                        
                        </div>
                    ))}
                </div>
            )}


        </div>
    )
}

export default Connections