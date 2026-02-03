import React from 'react'

export default function Reviewcard() {
    const reviewData = [{
        quote: " BEAST MODE PROTEIN is next level. Gains are insane. Recovery time cut in half. This is what champions use.",
        name: "MARCUS STEEL",
        shortname:"MS",
        profession: "PROFESSIONAL BODYBULIDER"
    },{
        quote:"IGNITE PRE-WORKOUT is pure rocket fuel. Crushing PRs every session. No crash, just raw power.",
        name: "SARAH FIERCE",
        shortname:"SF",
        profession: "CROSSFIT CHAMPION"
    },
    {
        quote:"Finally, supplements that don't compromise. POWER STACK keeps me operating at peak performance 24/7.",
        name: "DEREK TITAN",
        shortname:"DT",
        profession: "ELITE ATHLETE"
    },

]
    return (
          <div className='bg-black flex justify-center items-center gap-10 md:gap-15 py-15 md:py-20 flex-wrap  '>
            {reviewData.map((rev)=>(
            <div className='w-80 md:w-90 h-85 border-2 border-gray-500 hover:border-red-500 flex flex-col  p-6 bg-black    rounded-xl  text-white hover:shadow-lg  '>
               
                <div className='  mt-5 '>
                     <div className='text-3xl text-red-500 mb-5'>★★★★★</div>
                    <h1 className='text-xl font-medium'>{rev.quote}</h1>
                </div>
                <div className='flex gap-5 mt-2 '>
                <div className='w-15 h-15 border border-red-500 rounded-full bg-red-500/40 mt-5'>
                    <h1 className='mt-3 ml-3 text-2xl font-bold'>{rev.shortname}</h1>
                </div>
                <div className='mt-7 '>
                    <h1 className='font-bold text-xl '>{rev.name}</h1>
                    <h2 className='font-bold  text-sm text-red-500'>{rev.profession}</h2>
                </div>
                </div>
            </div>
            ))}
        </div>
    )
}
