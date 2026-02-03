import React, { useState } from 'react'

export default function Wishlist() {
    const [state,setState]=useState("white")
    function heart(){
        setState(state==="white"?"red":"white")

    }
  return (
    <div className=' relative left-12 md:left-0'>
        <div className=' border w-12 md:w-12 h-10 md:h-15 rounded-lg flex justify-center items-center'>
        <button onClick={heart} class="svg-heart-button">
    <svg width="34" height="30" viewBox="0 0 24 24" fill={state} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
</button>
</div>
    </div>
  )
}