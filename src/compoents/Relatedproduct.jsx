import React, { use, useEffect, useState } from 'react'
import protien from '../assets/images/protien.jpg'
import prework from '../assets/images/prework.jpg'
import omega from '../assets/images/omega.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Relatedproduct() {
  
    // const product = [
    //     {
    //       name: "BEAST MODE PROTEIN",
    //       description: "30g pure isolate protein per serving. ",
    //       price: "$54.99",
    //       selling: "BEST SELLER",
    //       image: protien
    //     },
    //     {
    //       name: "BEAST MODE PROTEIN",
    //       description: "30g pure isolate protein per serving. ",
    //       price: "$30.99",
    //       selling: "TOP RATED",
    //       image: prework
    //     },
    //     {
    //       name: "BEAST MODE PROTEIN",
    //       description: "30g pure isolate protein per serving. ",
    //       price: "$60.99",
    //       selling: "NEW ARRIVAL",
    //       image: omega
    //     },
    //     {
    //       name: "BEAST MODE PROTEIN",
    //       description: "30g pure isolate protein per serving. ",
    //       price: "$54.99",
    //       selling: "BEST SELLER",
    //       image: protien
    //     },
    //     {
    //       name: "BEAST MODE PROTEIN",
    //       description: "30g pure isolate protein per serving. ",
    //       price: "$30.99",
    //       selling: "TOP RATED",
    //       image: prework
    //     },
      
    //   ]
    
    const [product,setProduct]=useState([])
    useEffect(()=>{
      axios.get(`http://localhost:5555/product`)
      .then((res)=>{setProduct(res.data.data)})
      .catch((error)=>{console.log(error)})

    },)
    
  return (
    <div className='w-full overflow-x-auto lg:px-30 '>
       
       <div className=' flex  gap-15 px-10  mt-10 '>
      {product?.slice(0,5).map((prod) => (
        <div  className='min-w-[280px] md:w-[300px] h-[400px] border-2 border-gray-500 rounded-xl bg-black text-white transition duration-300 hover:scale-105 hover:border-red-500 ' >
          <div className='relative'>
            <img className='w-full h-[200px] object-cover rounded-t-xl ' src={`http://localhost:5555/uploads/${prod.image}`} alt="error" />
            
          </div>
          <div className='px-3  space-y-1'>
            <div className='text-2xl text-red-500 mt-3'>★★★★★</div>
            <h1 className='font-bold text-xl '>{prod.name}</h1>
            <p className=''>{prod.description}</p>
            <div className='flex justify-between mt-3 items-center'>
              <h1 className='text-xl font-bold text-red-500'> {prod.price}</h1>
              
            </div>
          </div>
        </div>))}

    </div>


    </div>
  )
}
