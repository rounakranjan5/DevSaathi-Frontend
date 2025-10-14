import axios from 'axios'
import React, { useRef, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'


const ManagePassword = () => {

    const oldPassword = useRef(null)
    const newPassword = useRef(null)
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const [errMsg, setErrMsg] = useState("")
    const [showToast, setShowToast] = useState(false)

    const changePassword = async () => {
        setErrMsg("")
        try {
            const resp = await axios.patch(BASE_URL + '/profile/password', {
                oldPassword: oldPassword.current.value,
                newPassword: newPassword.current.value
            }, { withCredentials: true })

            dispatch(addUser(resp.data.data))
            // console.log("Password Changed Successfully");
            oldPassword.current.value=""
            newPassword.current.value=""
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
            }, 3000)
        }
        catch (err) {
            setErrMsg(err.response.data)
            console.error(err)
        }
    }

    return (
        <div className="min-h-screen bg-base-100 p-6">
            <div className="max-w-md mx-auto pt-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-base-content mb-2">Change Password</h1>
                    <p className="text-base-content/60">Keep your account secure</p>
                </div>

                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center gap-3 mb-6 p-3 bg-base-300 rounded-lg">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoUrl} alt="User" />
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">{user?.firstName} {user?.lastName}</p>
                                <p className="text-sm text-base-content/60">{user?.emailId}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Current Password</span>
                                </label>
                                <input 
                                    type="password" 
                                    className="input input-bordered w-full" 
                                    placeholder="Enter current password"
                                    ref={oldPassword} 
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">New Password</span>
                                </label>
                                <input 
                                    type="password" 
                                    className="input input-bordered w-full" 
                                    placeholder="Enter new password"
                                    ref={newPassword} 
                                />
                                <label className="label">
                                    <span className="label-text-alt">Use at least 8 characters</span>
                                </label>
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
                                    onClick={changePassword}
                                >
                                    Update Password
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-info/10 rounded-lg border border-info/20">
                            <div className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-info mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm font-medium text-info">Security Tip</p>
                                    <p className="text-sm text-base-content/70 mt-1">
                                        Use a strong password with letters, numbers, and symbols. 
                                        Avoid using personal information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showToast && (
                <div className="toast toast-top toast-end">
                    <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Password updated successfully!</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ManagePassword