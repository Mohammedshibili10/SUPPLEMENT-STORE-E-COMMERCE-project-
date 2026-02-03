import React from 'react'
import thander from '../assets/images/thander.png'

export default function Card() {
  const cardData = [{
    name: "MAXIMUM POTENCY",
    description: "Pharmaceutical-grade formulas with clinically proven dosages. No fillers, no BS",
    image:thander

  },
  {
    name: "LAB CREDITED",
    description: "Third-party tested for purity and banned substances. Champions trust our quality."
    

  },
  {
    name: "ELITE PERFORMANCE",
    description: "Engineered for athletes who demand nothing but the absolute best."

  },
  {
    name: "CLEAN FUEL",
    description: "Zero artificial garbage. Pure performance nutrition your body deserves."

  },
  ]
  return (
    <div className='bg-black flex justify-center items-center gap-15 py-10  md:py-20 flex-wrap  '>
      {cardData.map((card) => (
        <div className='w-80 h-90 border-2 border-gray-500 hover:border-red-500 flex flex-col items-center p-4 bg-black    rounded-xl  text-white hover:shadow-lg  '>
          <div className='w-22 h-22 border border-red-500 rounded-full bg-red-500/40 mt-5'>
            <img className='w-15 mt-3 ml-3' src={card.image} alt="" />
          </div>
          <div className=' space-y-3 mt-10 text-center'>
            <h1 className='text-2xl font-bold'>{card.name}</h1>
            <p className='text-center text-gray-400 text-lg'>{card.description}</p>
          </div>

        </div>
      ))}

    </div>
  )
}
