import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const email = useRef(null)
    const password = useRef(null)
    const firstName = useRef(null)
    const lastName = useRef(null)
    const age = useRef(null)
    const gender = useRef(null)

    const [isSignUpForm, setIsSignUpForm] = useState(false)

    const [errMsg, setErrMsg] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((store) => store.user)


    const validateLogin = async () => {
        setErrMsg("")
        try {
            // console.log(email.current.value, password.current.value);

            const resp = await axios.post(BASE_URL + "/login", {
                emailId: email.current.value,
                password: password.current.value
            }, {
                withCredentials: true
            })
            // console.log(resp);
            dispatch(addUser(resp.data.data))
            navigate('/feed')
        }
        catch (err) {
            setErrMsg(err.response.data)
            console.error(err.response.data);
        }
    }

    const validateSignup = async () => {
        setErrMsg("")
        try {
            const resp = await axios.post(BASE_URL + '/signup', {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                age: age.current.value,
                emailId: email.current.value,
                password: password.current.value,
                gender: gender.current.value
            }, {
                withCredentials: true
            })

            dispatch(addUser(resp.data.data))
            navigate('/profile')
        }
        catch (err) {
            setErrMsg(err.response.data)
            console.error(err.response.data);
        }
    }

    return (
        <div className="min-h-screen bg-base-100 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 py-4 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">

                    <div className="space-y-6 lg:pr-8 animate-fade-in-up">
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text text-transparent">
                                    DevSaathi
                                </h1>
                                <span className="text-4xl ml-3 animate-bounce">🤝</span>
                            </div>
                            <p className="text-xl lg:text-2xl font-light text-gray-700 dark:text-base-content/80 mb-4 animate-fade-in animation-delay-300">
                                Connect with <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold">Fellow Developers</span>
                            </p>
                            <p className="text-base text-base-content/70 leading-relaxed animate-fade-in animation-delay-500">
                                Join the community where developers connect, collaborate, and build amazing things together.
                                Find your coding partner and grow your professional network.
                            </p>
                        </div>

                        <div className="space-y-4 animate-fade-in animation-delay-700">
                            <div className="card bg-white dark:bg-base-200 backdrop-blur-sm shadow-xl border border-slate-300 dark:border-primary/20 hover:border-slate-400 dark:hover:border-primary/40 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                                <div className="card-body p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-slate-100 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/10 border border-slate-300 dark:border-transparent rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:from-primary/30 dark:group-hover:to-primary/20 transition-all duration-300 group-hover:rotate-6">
                                            <svg className="w-5 h-5 text-slate-600 dark:text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors">⚡ Smart Developer Matching</h3>
                                            <p className="text-sm text-base-content/60">Find developers with complementary skills</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-white dark:bg-base-200 backdrop-blur-sm shadow-xl border border-slate-300 dark:border-secondary/20 hover:border-slate-400 dark:hover:border-secondary/40 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                                <div className="card-body p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-slate-100 dark:bg-gradient-to-br dark:from-secondary/20 dark:to-secondary/10 border border-slate-300 dark:border-transparent rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:from-secondary/30 dark:group-hover:to-secondary/20 transition-all duration-300 group-hover:-rotate-6">
                                            <svg className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-base-content group-hover:text-secondary transition-colors">🤝 Project Collaboration</h3>
                                            <p className="text-sm text-base-content/60">Work together on exciting projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-white dark:bg-base-200 backdrop-blur-sm shadow-xl border border-slate-300 dark:border-accent/20 hover:border-slate-400 dark:hover:border-accent/40 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                                <div className="card-body p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-slate-100 dark:bg-gradient-to-br dark:from-accent/20 dark:to-accent/10 border border-slate-300 dark:border-transparent rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:from-accent/30 dark:group-hover:to-accent/20 transition-all duration-300 group-hover:rotate-12">
                                            <svg className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-base-content group-hover:text-accent transition-colors">🌍 Global Network</h3>
                                            <p className="text-sm text-base-content/60">Connect with developers worldwide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {
                        !user && (
                            <div className="lg:pl-8 animate-fade-in animation-delay-1000">
                                <div className="w-full max-w-md mx-auto lg:mx-0">
                                    <div className="card bg-white dark:bg-base-100 shadow-2xl border border-slate-300 dark:border-base-300 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-30"></div>
                                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/15 rounded-full blur-xl animate-pulse"></div>
                                        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary/15 rounded-full blur-xl animate-pulse animation-delay-1000"></div>

                                        <div className="card-body p-6 relative z-10">
                                            <div className="text-center mb-4">
                                                <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-cyan-500 dark:to-blue-500 bg-clip-text text-transparent">
                                                    {isSignUpForm ? "Create Account" : "Welcome Back"}
                                                </h2>
                                                <p className="text-base-content/70 text-sm">
                                                    {isSignUpForm ? "Join the developer community 🚀" : "Sign in to continue your journey 👋"}
                                                </p>
                                            </div>

                                            <div className="space-y-3">
                                                {isSignUpForm && (
                                                    <>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <input type="text" className="input input-bordered input-sm focus:input-primary focus:scale-105 transition-all duration-300 bg-base-100 backdrop-blur-sm" placeholder="👤 First Name" ref={firstName} />
                                                            <input type="text" className="input input-bordered input-sm focus:input-primary focus:scale-105 transition-all duration-300 bg-base-100 backdrop-blur-sm" placeholder="👤 Last Name" ref={lastName} />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <input type="number" className="input input-bordered input-sm focus:input-primary focus:scale-105 transition-all duration-300 bg-base-100 backdrop-blur-sm" placeholder="🎂 Age" ref={age} />
                                                            <select className="select select-bordered select-sm focus:select-primary focus:scale-105 transition-all duration-300 bg-base-100 backdrop-blur-sm" ref={gender}>
                                                                <option disabled selected>⚧️ Gender</option>
                                                                <option>male</option>
                                                                <option>female</option>
                                                                <option>others</option>
                                                            </select>
                                                        </div>
                                                    </>
                                                )}

                                                <div className="relative">
                                                    <input type="email" className="input input-bordered input-sm w-full focus:input-primary focus:scale-105 transition-all duration-300 bg-base-100 backdrop-blur-sm" placeholder="📧 Email address" ref={email} />
                                                </div>
                                                <div className="relative">
                                                    <input type="password" className="input input-bordered input-sm w-full focus:input-primary focus:scale-105 transition-all duration-300 bg-base-100 backdrop-blur-sm" placeholder="🔒 Password" ref={password} />
                                                </div>

                                                {errMsg && (
                                                    <div className="alert alert-error alert-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="text-sm">{errMsg}</span>
                                                    </div>
                                                )}

                                                <button
                                                    className="btn bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus btn-sm w-full mt-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-none"
                                                    onClick={isSignUpForm ? validateSignup : validateLogin}
                                                >
                                                    <span className="flex items-center justify-center gap-2 ">
                                                        {isSignUpForm ? "🎉 Create Account" : "🚀 Sign In"}
                                                    </span>
                                                </button>

                                                <div className="text-center mt-3">
                                                    <p className="text-base-content/70 text-sm">
                                                        {isSignUpForm ? "Already have an account? " : "Don't have an account? "}
                                                        <button
                                                            className="link bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 dark:from-orange-400 dark:via-pink-500 dark:to-red-500 bg-clip-text text-transparent font-semibold text-sm hover:from-red-600 hover:via-pink-600 hover:to-purple-600 dark:hover:from-pink-400 dark:hover:via-red-400 dark:hover:to-orange-400 transition-all duration-300 hover:scale-110"
                                                            onClick={() => setIsSignUpForm(!isSignUpForm)}
                                                        >
                                                            {isSignUpForm ? "Sign in ✨" : "Sign up ✨"}
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Login