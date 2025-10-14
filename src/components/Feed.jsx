import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed, removeUserFromFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch=useDispatch()
  const feed=useSelector((store)=>store.feed)
  // console.log("feed",feed);

  const feedData=async()=>{
    if(feed && feed.length > 0) return
    try{
      const resp=await axios.get(BASE_URL+'/feed',{withCredentials:true})
      // console.log(resp.data.data);
      dispatch(addFeed(resp?.data?.data))

    }catch(err){
      console.error(err);
    }
  }

  const handleRequest=async(user,status)=>{
    try{
      const resp=await axios.post(BASE_URL+"/request/send/"+status+"/"+user._id,{},{withCredentials:true})
      dispatch(removeUserFromFeed(user._id))
    }
    catch(err){
      console.error(err)
    }
  }


  useEffect(()=>{
    feedData()
  },[])

 

  if(!feed || feed.length==0){
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-success/20 via-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="relative">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 text-warning animate-bounce" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute top-8 right-12 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</div>
            <div className="absolute bottom-12 left-8 text-xl animate-pulse" style={{ animationDelay: '0.4s' }}>✨</div>
            <div className="absolute top-16 left-16 text-lg animate-ping" style={{ animationDelay: '0.6s' }}>🌟</div>
            <div className="absolute bottom-8 right-16 text-xl animate-bounce" style={{ animationDelay: '0.8s' }}>🚀</div>
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-warning via-success to-primary bg-clip-text text-transparent mb-6">
            Congratulations!
          </h1>
          
          <h2 className="text-3xl font-semibold text-base-content mb-4">
            You've Explored Everyone! 🎊
          </h2>
          
          <p className="text-base-content/70 text-xl mb-8 leading-relaxed">
            Amazing job! You've viewed all available profiles. Check back later for new people joining the community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card bg-gradient-to-br from-success/20 to-primary/20 border border-success/30 shadow-lg">
              <div className="card-body text-center p-6">
                <div className="text-3xl mb-2">👁️</div>
                <h3 className="font-bold text-lg text-success">Explored</h3>
                <p className="text-success/80">All available profiles</p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 shadow-lg">
              <div className="card-body text-center p-6">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="font-bold text-lg text-primary">Discovery</h3>
                <p className="text-primary/80">Mission complete</p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-warning/20 to-accent/20 border border-warning/30 shadow-lg">
              <div className="card-body text-center p-6">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-bold text-lg text-warning">Active</h3>
                <p className="text-warning/80">Super user status</p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-base-content">What's Next?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-base-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Check Back Later</h4>
                  <p className="text-base-content/70">New members join daily. Come back tomorrow for fresh profiles!</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-base-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Manage Connections</h4>
                  <p className="text-base-content/70">Review your connections and pending requests while you wait.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-2xl">🎯</span>
              <h4 className="text-xl font-bold text-primary">Pro Explorer!</h4>
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-base-content/80 italic">
              You're officially a power user! Your dedication to exploring connections is impressive.
            </p>
          </div>

          
        </div>
      </div>
    )
  }

  return feed && (
    <div className='flex justify-center my-5'>
      <UserCard user={feed[0]} showBtns={true} handleRequest={handleRequest}/>
    </div>
  )
}

export default Feed