import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Navbar() {
  const [open,setOpen]=useState(false)
  const navigate= useNavigate()
  const isLoggedin= localStorage.getItem('isLoggedin')
  function add(){
  setOpen(!open)
  }
  const handleclick=()=>{
    navigate('/login')
    setOpen(!open)

  }
  return (
    <div>
      <div className='flex justify-between h-20     items-center py-5 px-10 md:px-5 lg:px-20 shadow-md bg-black/90 '>
        <div>
          <h1 className=' text-2xl md:text-3xl lg:text-4xl font-extrabold text-red-500 '>VITAL<span className='text-white'>CORE</span></h1>
        </div>
        
        <div>
          <ul className="hidden md:flex md:space-x-4 lg:space-x-10  text-white font-medium  lg:text-md md:text-sm">
          <Link to={'/products'}> <li className="hover:text-red-400 cursor-pointer">PRODUCT</li></Link> 
          <Link to={'/benfits'}> <li className="hover:text-red-400 cursor-pointer">BENEFITS</li></Link> 
            <li className="hover:text-red-400 cursor-pointer">SCIENCE</li>
          <a href="#rr"> <li className="hover:text-red-400 cursor-pointer">REVIEWS</li></a> 
           <Link to={'/contact'}><li className="hover:text-red-400 cursor-pointer">CONTACT US</li></Link>
          </ul>

        </div>
        <div className='md:flex items-center gap-4 hidden '>
          <div className='w-12 h-12 rounded-full bg-red-500 relative'>
            <img className='w-7  absolute left-2 top-2' src="/images/shopping-cart.png" alt="error" /></div>
          <div className='hidden md:block'>
            {isLoggedin ? <IoPersonCircleOutline className='w-12 h-12 text-red-500'/> :  <button onClick={handleclick} className='w-40 h-10 bg-red-500 rounded-md text-white font-bold'>GET STARTED</button>   }
          </div>
        </div>
        <div className='md:hidden' >
          {open ? " "
         :<GiHamburgerMenu  onClick={add} style={{color:'white', fontSize:'40px',}}/>
       }

        </div>
         {open && (
           
        <div className="md:hidden flex flex-col items-center gap-8 bg-black text-white  w-screen h-screen  absolute top-1 right-1 pt-5 pl-2 px-5 ">
         {open && <IoClose className='ml-85 '  onClick={add} style={{color:'white', fontSize:'40px',}}/>}
         <input className='' type="text" placeholder='search '/>
          <p className="hover:text-red-400 font-bold border-b border-red-500  w-80  ">PRODUCT</p>
          <p className="hover:text-red-400 font-bold border-b border-red-500  w-80  mt-2">BENEFITS</p>
          <p className="hover:text-red-400 font-bold border-b border-red-500  w-80  mt-2">SCIENCE</p>
          <p className="hover:text-red-400 font-bold border-b border-red-500  w-80  mt-2">REVIEWS</p>
          <p className="hover:text-red-400 font-bold border-b border-red-500  w-80  mt-2">CONTACT US</p>

       
        </div>
       
      
      )}




      </div>




    </div>
  )
}
