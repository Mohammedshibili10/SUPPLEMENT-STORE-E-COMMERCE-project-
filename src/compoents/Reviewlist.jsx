import React from 'react'
import person1 from '../assets/images/person1.jpg'
import person2 from '../assets/images/person2.jpg'
import person3 from '../assets/images/person3.jpg'
import preson4 from '../assets/images/preson3.jpg'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";



export default function Reviewlist() {
    const reviewdata=[{
    quote: " BEAST MODE PROTEIN is next level. Gains are insane. Recovery time cut in half. This is what champions use.",
    name: "MARCUS STEEL",
    date:"JUNE 20, 2023 03:29PM",
    image:person1,
   
},
{
    quote: " BEAST MODE PROTEIN is next level. Gains are insane. Recovery time cut in half. This is what champions use.",
    name: "MARCUS STEEL",
    date:"JUNE 20, 2023 03:29PM",
    image:person2,
   
},
{
    quote: " BEAST MODE PROTEIN is next level. Gains are insane. Recovery time cut in half. This is what champions use.",
    name: "MARCUS STEEL",
    date:"JUNE 20, 2023 03:29PM",
    image:person3,
   
},
{
    quote: " BEAST MODE PROTEIN is next level. Gains are insane. Recovery time cut in half. This is what champions use.",
    name: "MARCUS STEEL",
    date:"JUNE 20, 2023 03:29PM",
   image:preson4,
}]
    return (
 
    <div className='md:w-100 lg:w-full '> 
        {reviewdata.map((data)=>( 
        <div className='text-white border-b border-gray-500 mb-5 pb-5 mt-10  '>
        <div className='space-y-3'>
            <h1 className='text-3xl text-red-500'>★★★★★</h1>
            <h1 className='text-xl'>{data.quote}</h1>
            <p className='text-gray-500'>{data.date}</p>
        </div>
        <div className='flex justify-between pt-10 '>
            <div className='flex gap-3 '>
            <img className='w-10 h-10 rounded-full' src={data.image} alt="error" />
            <h1 className='font-bold pt-2'>{data.name}</h1>
            </div>
            <div className='flex gap-3 '>
             <div className='w-15 h-10 border rounded-lg  '><SlLike className='w-6 h-7 ml-4 mt-1'/></div>
             <div className='w-15 h-10 border rounded-lg '><SlDislike className='w-6 h-7 ml-4 mt-1' /></div>
            </div>
        </div>
      </div> ))}
    </div>
   
  )
}
