import React from 'react'

export default function About() {
    return (
        <div className=' mt-20'>
            <div className=' text-white p-10 md:p-20  lg:pl-40 sm:flex md:flex-wrap gap-20 border-t-2 border-red-500/80'>
                <div className='max-w-sm'>
                    <h1 className='text-4xl font-black text-white '>VITAL<span className='text-red-500'>CORE</span></h1>
                    <p className='text-gray-500 text-sm mt-5'>Elite supplements engineered for champions who refuse to compromise.</p>
                </div>
                <div className='sm:flex  md:flex-wrap md:gap-30 lg:gap-50'>
                    <div>
                        <h1 className=' text-red-500 font-bold mb-4'>PRODUCTS</h1>
                        <ul className='space-y-3'>
                            <li className='font-medium hover:text-red-500 '>PROTIEN</li>
                            <li className='font-medium hover:text-red-500 '>VITAMINS</li>
                            <li className='font-medium hover:text-red-500 '>PRE-WORKOUT</li>
                            <li className='font-medium hover:text-red-500 '>RECOVERY</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className=' text-red-500 font-bold mb-4'>COMPANY</h1>
                        <ul className='space-y-3'>
                            <li className='font-medium hover:text-red-500 '>ABOUT</li>
                            <li className='font-medium hover:text-red-500 '>OUR SCIENCE</li>
                            <li className='font-medium hover:text-red-500 '>BLOG</li>
                            <li className='font-medium hover:text-red-500 '>CONTACT</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className=' text-red-500 font-bold mb-4'>SUPPORT</h1>
                        <ul className='space-y-3'>
                            <li className='font-medium hover:text-red-500 '>FAQ</li>
                            <li className='font-medium hover:text-red-500 '>SHIPPING</li>
                            <li className='font-medium hover:text-red-500 '>RETURNS</li>
                            <li className='font-medium hover:text-red-500 '>PRIVACY</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            

        </div>
    )
}
