import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handlesubmit = (e) => {

        e.preventDefault()
        if (!name || !email || !password) {
            toast.info('please fill all required field')
            return;
        }
        const data = {
            name, email, password
        }
        axios.post('https://supplement-store-backend.onrender.com/users', data)
            .then(() => {
                console.log("successfully added");

                // toast.success(' succesfully Registered')
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
                        <h1 className='text-2xl font-bold'>Sign Up</h1>
                        <p className='text-sm'> Sign up to continue</p>
                    </div>

                    <form >
                        <div className=' '>
                            <input value={name} className='border-b-1  w-90 h-10 mt-5 ml-5 rounded-md ' type="text" placeholder='Name  ' onChange={(e) => setName(e.target.value)} />
                            <br />
                            <input value={email} className='border-b-1 w-90 h-10 mt-5 ml-5 rounded-md ' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            < input value={password} className='border-b-1  w-90 h-10 mt-5 ml-5 rounded-md ' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <br />
                        </div>
                        <div>
                            <button onClick={handlesubmit} type='submit' className='text-md text-white font-bold  w-90 h-10 bg-red-500 rounded-lg mt-7 ml-5'>Submit</button>
                            <div className='ml-5'>
                                <input type="checkbox" placeholder='Remember me' />
                                <label className='ml-2 text-sm'>Remember me</label>
                            </div>
                            <div className='flex gap-1 justify-center '>
                                <p className='text-[14px]'>Already have an account?</p><Link to={'/login'}><p className='text-blue-500 text-[14px]'>Login</p></Link>
                            </div>
                            <div className='flex justify-center items-center gap-2 mt-1 mb-5'>
                                <hr className='w-30' /><span>or</span><hr className='w-30' />
                            </div>
                            <div className='relative'>
                                <button className=' border-2 w-70 h-12 ml-15 rounded-md'>Sign up with Google</button>
                                <img className='w-6 absolute left-25 bottom-3' src="/images/google.png" alt="error" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}
