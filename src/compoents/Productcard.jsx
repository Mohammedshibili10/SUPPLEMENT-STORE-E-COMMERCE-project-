import React, { useContext } from 'react'
import protien from '../assets/images/protien.jpg'
import prework from '../assets/images/prework.jpg'
import omega from '../assets/images/omega.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { createContext } from 'react'
import Addcart from '../pages/Addcart'
import { useEffect } from 'react'
 

export default function Productcard({product}) {

  const navigate = useNavigate()
  // const product = [
  //   {
  //     id:1,
  //     name: "BEAST MODE PROTEIN",
  //     description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
  //     price: "$54.99",
  //     selling: "BEST SELLER",
  //     image: protien   
  //   },
  //   {
  //     id:2,
  //     name: "BEAST MODE PROTEIN",
  //     description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
  //     price: "$30.99",
  //     selling: "TOP RATED",
  //     image: prework
  //   },
  //   {
  //     id:3,
  //     name: "BEAST MODE PROTEIN",
  //     description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
  //     price: "$60.99",
  //     selling: "NEW ARRIVAL",
  //     image: omega
  //   },
  // ]

  

  const handleMove = (id) => {
      navigate(`/product/${id}`)
  } 
  return (
   
    <div className=' sm:flex  md:flex-wrap  gap-15 justify-center items-center mt-10 px-5 '>
     
      {product?.slice(0,3).map((prod) => (
        <div key={prod._id} className='border-2 broder-gray-500 w-85 md:w-100 h-155 rounded-xl bg-black text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-red-500 mt-5 '>
          <div className='relative cursor-pointer'  onClick={() => handleMove(prod._id)}>
            <img className='w-100 h-95 rounded-t-xl ' src={`http://localhost:5555/uploads/${prod.image}`} alt="error" />
            <div className=' absolute bottom-82 left-52 md:left-68 w-28 h-7 text-sm font-bold bg-red-500 text-center pt-1 rounded-full  '>{prod.feature}</div>
          </div>
          <div className='px-5  space-y-2'>
            <div className='text-2xl text-red-500 mt-5'>★★★★★</div>
            <h1 className='font-bold text-xl cursor-pointer' onClick={() => handleMove(prod._id)}>{prod.name}</h1>
            <p className=''>{prod.description}</p>
            <div className='flex justify-between mt-7 items-center'>
              <h1 className='text-3xl font-bold text-red-500'> {prod.price}</h1>
             <Link to={'/cart'}> <button className='w-30 h-10 bg-red-500 rounded-lg font-bold' > ADD TO CART</button></Link>
            </div>
          </div>
        </div> ))}
        
       
    </div>
  )
}
