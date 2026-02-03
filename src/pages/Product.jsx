import React from 'react'
import Productcard from '../compoents/Productcard'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function Product() {
  const [product,setProduct]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/product`)
    .then((res)=>{
      setProduct(res.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false);
    })
  },[])
  return (
    <div className=' text-white flex justify-center items-center flex-col mt-40 md:flex-wrap '>
        <div className='text-center ' >
          <h1 className='text-5xl  md:text-6xl font-black  ' >PREMINUM <span className='text-red-500'>ARSENAL</span></h1>
          <p className='text-center text-md md:text-lg px-5 md:px-0 mt-5'>Elite-grade supplements engineered for champions</p>
        </div>
        <Productcard product={product}/>
        <div className='mt-10'>
       <Link to={'/products'}> <button className='w-25 h-10 bg-red-500 font-bold rounded-full'>SEE MORE</button></Link>
        </div>
    </div>
  )
}
