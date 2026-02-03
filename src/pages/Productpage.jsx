import React from 'react'
import Seemore from '../compoents/Seemore'
import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'



export default function Productpage() {


  return (
    <div>
      <div className='mt-20 px-5 xl:px-20 text-white flex gap-10'>
        <h1 className='text-5xl font-bold text-white '>PRODUCTS</h1>

      </div>
      {/* <div className='text-white ml-20 mt-5  '>
        <Link to='new'><button className='w-30 h-8 border rounded-full text-sm '>New Products</button></Link>
        <Link to='featured'><button className='w-32 h-8 border rounded-full text-sm ml-3'>Featured Products</button></Link>
      </div> */}
      <Seemore  />
      <Outlet/>

    </div>
  )
}
