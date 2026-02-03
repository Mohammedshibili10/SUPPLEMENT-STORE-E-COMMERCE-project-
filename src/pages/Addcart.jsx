import React, { useState } from 'react'
import Wishlist from '../compoents/Wishlist'
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";





export default function Addcart() {
    const [count,setCount]=useState(1)
 const increment=()=>{
       setCount(count+1)
}
 const decrement=()=>{
    if(count>1){
      setCount(count-1)
    }
       
}
    return (
        <div className='flex justify-center items-center mt-20 '>
            <div className='px-10 py-10  bg-[#282929] w-400 h-200   text-white px-10 '>
                <h1 className='text-4xl font bold'>MY CART</h1>
                <div className='flex gap-20'>
                <div className='border-b border-gray-300 flex justify-between w-250 h-70 mt-10 '>
                    <div className='flex   gap-5'>
    
                            <img className='w-52 m-7 rounded-lg' src="/images/prework.jpg" alt="error" />
                            <div className='mt-6 space-y-1'>
                                <h1 className='text-xl font-bold'>PREWORKOUT </h1>
                                <p className='text-sm text-gray-400'>Varient :</p>
                                <p className='text-sm text-gray-400'>Size :</p>
                                <p className='text-sm text-gray-400'>Color :</p>
                           
                            <div className='flex mt-22 gap-10'>
                                <div><IoMdHeartEmpty className='w-8 h-8' /></div>
                                <div><MdDeleteOutline className='w-8 h-8' /></div>
                            </div>
                         </div>
                    </div>
                    <div className=' mt-10 mr-6 text-center '>
                        <h1 className='text-3xl'>$70.99</h1>
                        <div className='flex gap-5 mt-10  '>
                            <button className='text-2xl font-black border w-10 h-10 rounded-full pb-5'onClick={decrement}>-</button>
                            <h1 className='text-2xl'>{count}</h1>
                            <button className='text-2xl font-black  border w-10 h-10 rounded-full pb-5'onClick={increment}>+</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10  w-100 px-5 py-5'>
                    <h1 className='text-2xl font-bold'>Order Summary</h1>
                    <div className='flex justify-between mt-5 space-y-5 '>
                     <div className='space-y-2'>
                    <p className='text-sm font-medium text-gray-300'>Subtotal</p>
                    <p className='text-sm font-medium text-gray-300'>Delivery</p>
                    <p className='text-sm font-medium text-gray-300'>Disount</p>
                    </div>
                    <div className='space-y-2'>
                    <p className='text-sm font-medium text-gray-300'>$111</p>
                    <p className='text-sm font-medium text-gray-300'>$222</p>
                    <p className='text-sm font-medium text-gray-300'>$333</p>
                    </div>
                    </div>
                    <hr className='text-gray-300'></hr>
                    <div className='flex justify-between font-medium mt-2'>
                    <h1 className='text-lg font-medium'>Total</h1>
                    <p>$2222</p>
                    </div>
                    <button className='font-bold text-lg rounded-lg w-90 h-10 bg-red-500 mt-3'>Checkout</button>
                    <div>
                        <h1 className='text-sm mt-1 underline  underline-offset-4 text-gray-300'>Promo code</h1>
                    </div>
                </div>
                </div>
                
            </div>



        </div>
    )
}


