import React from 'react'
import { Link } from 'react-router'

const UserCard = ({ user, showBtns, handleRequest, reqUser, showChatbtnInProfile }) => {
    const { firstName, lastName, photoUrl, about, gender, age ,skills} = user
    return (
        <div className="perspective-1000">
            <div className="card bg-gradient-to-br from-base-100 to-base-200 w-full max-w-sm mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-base-300">

                <figure className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                    <img
                        src={photoUrl}
                        alt="User"
                        className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 hover:scale-105"
                    />

                    <div className="absolute top-4 right-4 z-20">
                        <div className="badge badge-primary badge-lg font-semibold shadow-lg backdrop-blur-sm bg-primary/90">
                            {age} • {gender}
                        </div>
                    </div>
                </figure>

                <div className="card-body p-6">
                    <div className='flex justify-between items-start mb-4'>
                        <div className="flex-1">
                            {firstName && lastName && (
                                <h1 className="card-title text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    {firstName + " " + lastName}
                                </h1>
                            )}

                            {(!showBtns && !handleRequest && showChatbtnInProfile && (
                                <div className="mt-3">
                                    <Link
                                        to={"/chat/" + user._id}
                                        className="btn btn-success btn-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" className="opacity-90">
                                            <path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                        Start Chat
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {about && (
                        <div className="mb-4">
                            <div className="divider divider-primary my-2"></div>
                            <p className="text-sm sm:text-base leading-relaxed line-clamp-3 text-base-content/80">
                                {about}
                            </p>
                        </div>
                    )}

                    {
                        skills && skills.length > 0 && (
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:scale-105 transition-transform"
                                        >
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    }

                    {(showBtns && (
                        <div className="card-actions flex justify-center gap-3 mt-4">
                            <button
                                className="btn btn-error btn-sm sm:btn-md flex-1 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                onClick={() => handleRequest(user, "ignored")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Ignore
                            </button>
                            <button
                                className="btn btn-success btn-sm sm:btn-md flex-1 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                onClick={() => handleRequest(user, "interested")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Interested
                            </button>
                        </div>
                    ))}

                    {(!showBtns && handleRequest && (
                        <div className="card-actions flex justify-center gap-3 mt-4">
                            <button
                                className="btn btn-error btn-sm sm:btn-md flex-1 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                onClick={() => handleRequest(reqUser, "rejected")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Reject
                            </button>
                            <button
                                className="btn btn-success btn-sm sm:btn-md flex-1 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                onClick={() => handleRequest(reqUser, "accepted")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Accept
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserCard