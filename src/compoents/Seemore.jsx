import protien from '../assets/images/protien.jpg'
import prework from '../assets/images/prework.jpg'
import omega from '../assets/images/omega.jpg'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Addcart from '../pages/Addcart'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export default function Seemore() {
    const navigate=useNavigate()
    
    // const product = [
    //     {
    //         id:1,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$54.99",
    //         selling: "BEST SELLER",
    //         image: protien
    //     },
    //     {
    //          id:2,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$30.99",
    //         selling: "TOP RATED",
    //         image: prework
    //     },
    //     {
    //          id:3,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$60.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //          id:4,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$60.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //          id:5,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$60.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //          id:6,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$60.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //          id:7,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$30.99",
    //         selling: "TOP RATED",
    //         image: prework
    //     },
    //     {
    //          id:8,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$60.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //          id:9,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$30.99",
    //         selling: "TOP RATED",
    //         image: prework
    //     },
    //     {
    //          id:10,
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         price: "$60.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },

    // ]
   
  const [product,setProduct]=useState([])
  useEffect(()=>{
    axios.get('https://supplement-store-backend.onrender.com/product')
    .then((res)=>{setProduct(res.data.data)})
    .catch((error)=>{console.log(error)})
  },[])


    const handleMove=(id)=>{
        navigate(`/product/${id}`)
    }
    return (
     
        <div className=' sm:flex  md:flex-wrap  gap-15 justify-center items-center mt-10 px-5 lg:px-20'>
          
                
            {product?.slice(0.5).map((prod) => (
                <div key={prod._id} className='border-2 broder-gray-500 w-85 md:w-100 h-125 mt-5 rounded-xl  bg-black text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-red-500' >
                    <div className='relative' onClick={()=>handleMove(prod._id)}>
                        <img className='w-100 h-65 rounded-t-xl ' src={`https://supplement-store-backend.onrender.com/uploads/${prod.image}`} alt="error" />
                        <div className=' absolute bottom-52 left-52 md:left-68 w-28 h-7 text-sm font-bold bg-red-500 text-center pt-1 rounded-full  '>{prod.feature}</div>
                    </div>
                    <div className='px-5  space-y-2'>
                        <div className='text-xl text-red-500 mt-5'>★★★★★</div>
                        <h1 className='font-bold text-lg '>{prod.name}</h1>
                        <p className=''>{prod.description}</p>
                        <div className='flex justify-between mt-7 items-center'>
                            <h1 className='text-2xl font-bold text-red-500'> {prod.price}</h1>
                           <button onClick={()=>navigate('/cart')} className='w-30 h-10 bg-red-500 rounded-lg font-bold '>ADD TO CART</button>
                        </div>
                    </div>
                </div>))}
            
        </div>
      
    )
}