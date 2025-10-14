import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'

const Profile = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setlastName] = useState(user?.lastName)
  const [age, setAge] = useState(user?.age)
  const [gender, setGender] = useState(user?.gender)
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl)
  const [about, setAbout] = useState(user?.about)

  const [showToast, setShowToast] = useState(false)


  const [errMsg,setErrMsg]=useState("")
  


  const editProfile = async () => {
    setErrMsg("")
    try {
      const resp = await axios.patch(BASE_URL + '/profile/edit', {
        firstName,
        lastName,
        age,
        gender,
        photoUrl,
        about
      }, { withCredentials: true })
      // console.log(resp.data.data);
      // console.log(resp);
      dispatch(addUser(resp.data.data))
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      }, 3000)

    }
    catch (err) {
      setErrMsg(err.response.data)
      console.error(err.response.data);
    }
  }



  useEffect(() => {
    if (user) {
      setFirstName(user?.firstName)
      setlastName(user?.lastName)
      setAge(user?.age)
      setGender(user?.gender)
      setPhotoUrl(user?.photoUrl)
      setAbout(user?.about)
    }
  }, [user])

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center text-base-content mb-2">Edit Profile</h1>
        <p className="text-center text-base-content/60">Update your profile information</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-3">
            <div className="card bg-base-200 shadow-xl w-full">
              <div className="card-body">
                <h2 className="card-title mb-6">Profile Information</h2>
                
                <div className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">First Name *</span>
                    </label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full" 
                      placeholder="First Name" 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} 
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Last Name *</span>
                    </label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full" 
                      placeholder="Last Name" 
                      value={lastName} 
                      onChange={(e) => setlastName(e.target.value)} 
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Photo URL</span>
                    </label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full" 
                      placeholder="https://example.com/photo.jpg" 
                      value={photoUrl} 
                      onChange={(e) => setPhotoUrl(e.target.value)} 
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Age *</span>
                    </label>
                    <input 
                      type="number" 
                      className="input input-bordered w-full" 
                      placeholder="Age" 
                      value={age} 
                      onChange={(e) => setAge(e.target.value)} 
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Gender *</span>
                    </label>
                    <select 
                      value={gender} 
                      className="select select-bordered w-full" 
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option disabled={true}>Select Gender</option>
                      <option>male</option>
                      <option>female</option>
                      <option>others</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">About</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered h-32 w-full" 
                      placeholder="Tell us about yourself..."
                      value={about} 
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>

                  {errMsg && (
                    <div className="alert alert-error">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errMsg}</span>
                    </div>
                  )}

                  <div className="form-control mt-6">
                    <button 
                      className="btn btn-primary w-full" 
                      onClick={editProfile}
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-base-content text-center">Profile Preview</h3>
            {user && (
              <UserCard 
                user={{ firstName, lastName, age, gender, photoUrl, about }} 
                showBtns={false} 
                showChatbtnInProfile={false} 
              />
            )}
          </div>

        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Profile saved successfully!</span>
          </div>
        </div>
      )}
    </div>


  )
}

export default Profile