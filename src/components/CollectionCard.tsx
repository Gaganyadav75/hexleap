import { Collection } from '@/helpers/interfaces'
import React from 'react'

function CollectionCard({data}:{data:Collection}) {
  return (
    <div  
    onSelect={()=>alert("clicked")}
    id={data.id}
    className={` scroll-smooth bg-cards-bg-color dark:bg-[#3B3E47] dark:shadow-none shadow-[#dde0e6] shadow-xl`}
    >
        <div 
        className="img flex items-center justify-center aspect-[9/14]  "
        >
          <img 
          src={data.image} 
          alt="#"  
          className=' scale-[110%] translate-y-4'
          loading='lazy'
          />

        </div>

        <div 
        className='w-full px-5 py-2 relative'
        >
            <div 
            className='absolute top-0 -left-2 w-4 h-4 bg-gradient-to-l to-transparent dark:to-[#18282A] dark:from-[#221A2C] from-[#dde0e6] rounded-full '
            >
            </div>

            <hr 
            className='border-dashed border-red-300 border-spacing-1'
            />

            <div 
            className='absolute top-0 -right-2 w-4 h-4 bg-gradient-to-r to-transparent dark:to-[#18282A] dark:from-[#221A2C] from-[#dde0e6] rounded-full '
            >
            </div>

        </div>

        <div 
        className='m-2 gap-1 w-full flex flex-col justify-between items-center child:text-center'
        >
            <h3 
            className='large:text-lg text-sm font-bold dark:text-white'
            >
              {
              data.title
              }
            </h3>

            <h4 
            className='large:text-sm text-xs dark:text-gray-50'
            >
              {
              data.time
              }
            </h4>

            <p 
            className='large:text-sm text-xs p-2 dark:text-gray-100'
            >
              {
              data.description
              }
            </p>

            <button 
            className='bg-black-button-color text-white px-6 py-1 large:text-sm text-xs '
            >{
            data.button
            }
            </button>

        </div>

    </div>
  )
}

export default CollectionCard