"use client"
import {Ad} from '@/helpers/interfaces'
import React from 'react'
function AdSportCard({data}:{data:Ad}) {

  return (
    
    <div 
    className="p-2 large:basis-[calc(100%/5-0.75rem)] medium:basis-[calc(100%/3-0.75rem)] small:basis-[calc(100%-0.75rem)] bg-cards-bg-color flex flex-auto flex-col justify-between shadow-sm transition-all dark:bg-[#3B3E47] medium:max-w-[25vw] max-h-[100vh]"
    >
        <div 
        className="w-full grid place-items-center aspect-[9/9] overflow-hidden img relative"
        >
            <img 
            src={data.image}
            alt="#" 
            loading='lazy'
            className=' w-full'
            />

            <div 
            className='absolute right-0 top-0 w-10 h-6 bg-black text-center text-white'
            >
                Ad
            </div>
        </div>

        <div 
        className="flex p-2 flex-col gap-2"
        >
            <h1 
            className='font-semibold text-lg mobile:text-sm dark:text-white'
            >
                {
                data.title
                }
            </h1>
            <p 
            className=' text-ellipsis line-clamp-6 medium:line-clamp-5 dark:text-gray-200'
            title={data.description}
            >
                {
                data.description
                }
            </p>
        </div>
 </div>
  )
}

export default AdSportCard