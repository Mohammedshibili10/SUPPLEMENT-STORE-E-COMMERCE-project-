import React, { useEffect } from 'react'
import protien from '../assets/images/protien.jpg'
import prework from '../assets/images/prework.jpg'
import omega from '../assets/images/omega.jpg'
import { Link, useParams } from 'react-router-dom'
import Wishlist from '../compoents/Wishlist'
import Relatedproduct from '../compoents/Relatedproduct'
import Reviewbars from '../compoents/Reviewbars'
import Reviewfilter from '../compoents/Reviewfilter'
import { IoIosArrowForward } from "react-icons/io";
import Popularproduct from '../compoents/Popularproduct'
import About from './About'
import axios from 'axios'
import { useState } from 'react'

export default function ProductDetails() {

    const { id } = useParams()

    // const product = [
    //     {
    //         id: 1,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "BEST SELLER",
    //         image: protien
    //     },
    //     {
    //         id: 2,
    //         brand: "VITALCORE",
    //         name: "PREWORKOUT",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "TOP RATED",
    //         image: prework
    //     },
    //     {
    //         id: 3,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //         id: 4,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //         id: 5,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //         id: 6,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //         id: 7,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "TOP RATED",
    //         image: prework
    //     },
    //     {
    //         id: 8,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },
    //     {
    //         id: 9,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery.",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "TOP RATED",
    //         image: prework
    //     },
    //     {
    //         id: 10,
    //         brand: "VITALCORE",
    //         name: "BEAST MODE PROTEIN",
    //         description: "30g pure isolate protein per serving. Maximum muscle growth and recovery",
    //         offer: "$60.99",
    //         price: "$70.99",
    //         selling: "NEW ARRIVAL",
    //         image: omega
    //     },

    // ]
    const [product, setProduct] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5555/product/${id}`)
            .then((res) => { setProduct(res.data.data)})

            .catch((error) => console.log(error))
    }, [id])
    if (!product) { return <div>Loading...</div>; }

    // const selectedProduct = product.find((p) => p.id === parseInt(id))

    return (
        <>
            <div key={product._id} className='text-white lg:flex px-5 lg:px-50 gap-50 mt-20 '>
                <div className='flex md:gap-5 '>
                    <img className='border w-full md:w-150 h-100 md:h-150 rounded-lg ' src={`http://localhost:5555/uploads/${product.image}`} alt="error" />


                    <Wishlist />

                    <div className=' mt-68 md:mt-117 flex gap-2 flex-col relative  md:right-20'>
                        <button className='border w-12 md:w-15 h-12 md:h-15 rounded-lg font-bold text-lg'>1</button>
                        <button className='border w-12 md:w-15 h-12 md:h-15 rounded-lg font-bold text-lg'>2</button>
                    </div>
                </div>
                <div>
                    <div className='mt-5'>
                        <p className='text-sm text-gray-400'>VITALCORE</p>
                        <h1 className='text-2xl font-bold'>{product.name}</h1>
                        <div className='flex gap-3 mt-3 mb-4'>
                            <p className='font-medium pt-1.5 text-gray-400'>{product.price}</p>
                            <h1 className='text-2xl font-bold text-red-500'>{product.offer}</h1>
                        </div>
                    </div>
                    <hr className=' '></hr>
                    <div className='mt-7'>
                        <h2 className='font-bold  '>Description</h2>
                        <p className='text-sm w-100 mt-3'>{product.description}</p>
                    </div>
                    <div>
                        <p className='mt-5 font-bold'>Flavour Name:</p>
                        <div className='flex gap-5 text-center mt-3'>
                            <div className='border p-2 w-26 md:h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>Watermelon</div>
                            <div className='border p-2 w-26 md:h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>Kiwi Kick</div>
                            <div className='border p-2 w-26 md:h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>Tropical Tango</div>
                            <div className='border p-2 w-26 md:h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>Fruit fusion</div>
                        </div>
                    </div>
                    <div>
                        <p className='mt-5 font-bold'>Size:</p>
                        <div className='flex gap-5 text-center mt-3'>
                            <div className='border w-15 h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>400gm</div>
                            <div className='border w-15 h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>500gm</div>
                            <div className='border w-15 h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>700gm</div>
                            <div className='border w-15 h-10 rounded-md pt-2 text-sm bg-red-500 font-medium '>800gm</div>
                        </div>
                    </div>
                    <div>
                        <p className='mt-5 font-bold'>Quantity:</p>
                        <div className='flex text-center mt-3 font-bold   '>
                            <button className='border-2 w-6 h-8 rounded-l-lg border-red-500'>-</button>
                            <h1 className='border-2 w-10 h-8 pt-1 border-red-500'>5</h1>
                            <button className='border-2 w-6 h-8 rounded-r-lg border-red-500'>+</button>
                        </div>
                    </div>
                    <div className='flex gap-5 mt-6'>
                        <button className='border w-50 h-10 rounded-lg bg-red-500 font-bold'>Add to Cart</button>
                        <button className='border w-50 h-10 rounded-lg bg-white text-black font-bold'>Checkout Now</button>
                    </div>
                </div>

            </div>
            <div className='flex justify-center '>
                <hr className='mt-50  w-400 text-gray-400'></hr>
            </div>
            <div>
                <div className='text-white flex justify-between px-5 md:px-10 lg:px-30 mt-20 mb-10'>
                    <h1 className='font-bold text-2xl'>Related Products</h1>
                 <Link to={'/products'}>   <button className='font-bold'>View All</button></Link>
                </div>
                <Relatedproduct />
            </div>

            <div className='flex justify-center '>
                <hr className='mt-40  w-400 text-gray-400'></hr>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Related Products</h1>
                <div>
                    <div className='flex justify-between px-5 md:px-10 lg:px-30 mt-10 mb-15'>
                        <h1 className='text-white font-bold text-2xl'>Product Reviews</h1>
                    </div>
                    <Reviewbars />
                    <Reviewfilter />

                </div>
                <div className='text-white flex gap-5 justify-center mt-15 mb-20'>
                    <div className='w-10 h-10 border text-center pt-1.5 rounded-xl '>1</div>
                    <div className='w-10 h-10 border text-center pt-1.5 rounded-xl '>2</div>
                    <div className='w-10 h-10 border text-center pt-1.5 rounded-xl '>...</div>
                    <div className='w-10 h-10 border text-center pt-1.5 rounded-xl '>50</div>
                    <div className='w-10 h-10  text-center pt-2' ><IoIosArrowForward className='w-6 h-6' /></div>
                </div>
            </div>
            <div className='flex justify-center'>
                <hr className='text-gray-500 w-400'></hr>
            </div>
            <div className='text-white'>
                <div className='flex justify-between px-5 md:px-10 lg:px-30 mt-20 mb-10'>
                    <h1 className='font-bold text-2xl'>Popular this week</h1>
                  <Link to={'/products'}>  <button className='font-bold '>View All</button></Link>
                </div>
                <Popularproduct />
            </div>
            <About />


        </>





    )
}
