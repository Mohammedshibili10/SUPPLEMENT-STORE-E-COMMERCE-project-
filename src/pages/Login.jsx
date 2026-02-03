import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import assets from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    // const handlechange = (e) => {
    //     setUsername(e.target.value)
    // }
    // const handlechangepass = (e) => {
    //     setPassword(e.target.value)
    // }
  const handleLogin = (e) => {
      localStorage.setItem("isLoggedin",true)
    localStorage.removeItem("isLoggedin")
        e.preventDefault()
        if ( !email || !password) {
            toast.info('please fill all required field')
            return;
        }
        // const data = {
        //      email, password
        // }

        axios.post('http://localhost:5555/login', {email,password})
       
            .then((res) => {
                 localStorage.setItem("token",res.data.token)
                 console.log(res.data)
                console.log("successfully loginned");
               localStorage.setItem('isLoggedin',true)
                 navigate('/')
            })
            .catch((error) => {
                console.log(error)
                toast.error(' error happend, please check console')
            })
    }
    return (
        <div className='bg-black/90'>
            <div className='flex justify-center items-center h-screen  '>
                <div className='  w-100 h-125 border bg-white  rounded-lg shadow-lg '>
                    <div className='text-center mt-5  '>
                        <h1 className='text-3xl font-bold'>Login </h1>
                        <p className='text-[12px] text-gray-400 mt-2'>Welcome back! Please enter your details</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className='mt-5 '>

                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border-b-1 w-90 h-10 mt-5 ml-5 rounded-md ' type="text" placeholder='Email' />
                            <br />
                            < input onChange={(e) => setPassword(e.target.value)} value={password} className='border-b-1  w-90 h-10 mt-5 ml-5 rounded-md ' type="password" placeholder='Password' />
                            <br />
                        </div>
                        <div>
                            <button className='text-lg text-white font-bold  w-90 h-10 bg-red-500 rounded-lg mt-7 ml-5'>Login</button>
                            {message && <h1 className='text-sm ml-5'>{message}</h1>}
                            <div className='ml-5 flex justify-between mr-5 text-sm mt-3'>
                                <div>
                                    <input type="checkbox" placeholder='Remember me' />
                                    <label className='ml-2 text-sm'>Remember me</label>
                                </div>
                                <div>
                                    <span className='text-blue-500 underline underline-offset-4'>forgot password</span>
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-2 mt-3 mb-5'>
                                <hr className='w-30' /><span>or</span><hr className='w-30' />
                            </div>
                            <div className='relative'>
                                <button className=' border-2 w-70 h-12 ml-15 rounded-md'>Login with Google</button>
                                <img className='w-6 absolute left-25 bottom-3' src={assets[1]} alt="error" />
                            </div>
                            <div className='flex gap-1 justify-center mt-2 '>
                                <p className='text-[14px]'>Don't have an account?</p><Link to={'/signup'}><p className='text-blue-500 text-[14px] underline underline-offset-4'>Signup</p></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}
