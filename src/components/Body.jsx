import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useNavigate, useLocation } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constants'

const Body = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
  const user=useSelector((store)=>store.user)

  const fetchUser = async () => {
    if(user) return
    if(location.pathname === '/login') return
    
    try {
      const resp = await axios.get(BASE_URL+'/profile/view', {
        withCredentials: true
      })
      dispatch(addUser(resp.data.data))
      
    }
    catch(err){
      if(err.response?.status === 401){
        return navigate('/login')
      }
      console.error(err)
      
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* any children routes of body will be rendered over here in the outlet */}
      <div className="flex-1 pb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body