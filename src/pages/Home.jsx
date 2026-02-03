import React from 'react'
import Navbar from '../compoents/Navbar'
import Product from './Product'
import Benfits from './Benfits'
import Review from './Review'
import About from './About'
import { Link } from 'react-router-dom'
import assets from '../assets/assets.js'
import back from '../assets/images/back.jpg';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='w-full  h-screen  bg-cover bg-center  ' style={{ backgroundImage: `url(${back})` }}>
                <div className='max-w-md sm:max-w-2xl md:max-w-xl lg:max-w-3xl text-left pt-15 md:pt-40 space-y-8  md:space-y-6   px-5 md:px-20'>
                    <div className='w-60 md:w-80 h-10 border-2 border-red-600   text-center rounded-full pt-2 md:pt-1'>
                        <h1 className='text-sm md:text-lg font-bold text-white '>UNLEASH YOUR POTENTIONAL</h1>
                    </div>
                    <div>
                        <h1 className=' text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-black text-white'>DOMINATE<span className='text-red-500 [text-shadow:_7px_5px_40px_#f70202]'> EVERY REP</span> </h1>
                        <p className='text-sm md:text-xl text-gray-300'>Scientifically engineered supplements for athletes who refuse to settle. Maximum strength, zero compromise.</p>
                    </div>
                    <div className='mt-25 md:mt-15'>
                     <Link to={'/products'}>  <button className=' w-80 h-12 md:w-40 md:h-12 rounded-lg text-white font-bold text-lg bg-red-500'>SHOP NOW</button></Link> 
                        <button className='w-80 h-12 mt-5 md:mt-0 md:w-40 md:h-12 border-2 border-red-500 md:ml-5 rounded-lg font-bold text-lg bg-black/80 text-red-500'>LEARN MORE</button>
                    </div>
                </div>
            </div>


<Product/>
<Benfits/>
<Review/>
<About/>
        </div>
    )
}
