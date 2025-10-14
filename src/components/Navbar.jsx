import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { removeUser } from '../utils/userSlice'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import ThemeController from './ThemeController'

const Navbar = () => {

  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ReqRec=useSelector((store)=>store.receivedConnections)
  const [requestCount, setRequestCount] = useState(0)

  const fetchRequestCount = async () => {
    if (!user) return
    try {
      const resp = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true })
      setRequestCount(resp.data.data?.length || 0)
    } catch (err) {
      console.error("Error fetching request count:", err)
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, {
        withCredentials: true
      })
      dispatch(removeUser())
      return navigate('/login')
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchRequestCount()
  }, [user])

  useEffect(() => {
    if (ReqRec) {
      setRequestCount(ReqRec.length)
    }
  }, [ReqRec])

  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          {user ? (<Link to='/feed' className="btn btn-ghost text-xl">DevSaathi🤝</Link>) : <Link to='/login' className="btn btn-ghost text-xl">DevSaathi🤝</Link>}
        </div>
        <ThemeController className="px-3" />
        {(user && <div className="flex gap-4 mr-10">

            <Link to='/connections-requests' className="btn btn-ghost btn-circle p-2" title='Connection Requests'>
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                {(requestCount > 0 && <span className="badge badge-xs badge-error indicator-item">{requestCount}</span>)}
              </div>
            </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-base-200 dark:hover:bg-base-200 transition-all duration-300 ring-2 ring-transparent hover:ring-primary/30 hover:shadow-lg">
              <div className="w-10 rounded-full overflow-hidden">
                <img
                  alt="User Avatar"
                  src={user.photoUrl}
                  className="w-full h-full object-cover" />
              </div>
            </div>


            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-base-100 rounded-2xl z-50 mt-3 w-64 p-3 shadow-2xl border border-base-300/50 backdrop-blur-lg">
              
              <li className="menu-title px-3 pb-3 border-b border-base-300/30 mb-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={user.photoUrl} alt="User" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-base-content/60">{user.emailId}</p>
                  </div>
                </div>
              </li>

              <li>
                <Link to='/profile' className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-primary/10 hover:text-blue-600 dark:hover:text-primary transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">Profile</span>
                  <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              
              <li>
                <Link to='/connections' className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-secondary/10 hover:text-green-600 dark:hover:text-secondary transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-medium">My Connections</span>
                  <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link to='/password' className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-accent/10 hover:text-orange-600 dark:hover:text-accent transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium">Manage Password</span>
                  <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>

              <div className="divider my-2"></div>

              <li>
                <a onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-error/10 hover:text-red-600 dark:hover:text-error transition-all duration-300 group font-medium">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Logout</span>
                  <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar