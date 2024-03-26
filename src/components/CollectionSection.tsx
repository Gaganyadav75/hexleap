import { collectionData } from '@/stores/store'
import React, { useState } from 'react'
import CollectionCard from './CollectionCard'
import { Collection } from '@/helpers/interfaces'

function CollectionSection() {



    let [scrollIndex,setScrollIndex]=useState(1)



    const ScrollHandler =(param:{to:string})=>{
      let scind =scrollIndex;
      if (param.to=="left" && scind>1) {
         scind = scrollIndex-1
      }else if (param.to=="right" && scind<collectionData.length) {
            scind = scrollIndex+1
      }
  
      let anker = document.createElement("a");
  
        anker.href ="#collection"+scind
        anker.click()
        setScrollIndex(scind)
     
  
    }


  return (
    <div 
    className="w-full px-0 large:px-36 py-24 bg-[#F7F7F8] dark:collection-gradient-color"
    >
    <div 
    className="flex w-full flex-col"
    >
      {/* {heading  and para of collection} */}

        <div>
            <h1 
            className="text-center text-4xl font-bold small:text-lg dark:text-white"
            >
                Collection Spotlight
            </h1>
            <p 
            className="text-center mt-2 small:text-xs dark:text-white"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere beatae recusandae sunt porro, enim atque perferendis quod repudiandae asperiores dolor, quasi magni voluptatem.
            </p>
        </div>

      {/* {cards div of collection} */}

        <div 
        className="relative small:px-[5%] medium:px-[10%] large:px-[15%]
        ">
            <div 
            onClick={()=>ScrollHandler({to:"left"})} 
            className=" z-10 grid place-items-center absolute left-0 w-10 h-14 top-1/2 -translate-y-1/2 dark:collection-gradient-color border-blue-500 border"
            >
                <span 
                className=" scale-125 scale-y-150 text-blue-400 font-bold select-none"
                >
                    {'<'}
                </span>
            </div>

            <div className="scrollcontainer transition-all !scroll-smooth grid grid-flow-col medium:auto-cols-[calc(50%-0.73rem)] auto-cols-[calc(100%/3-0.73rem)] small:auto-cols-[100%] gap-3 snap-x overflow-x-scroll flex-nowrap w-full no-scrollbar mt-6">
              {
                collectionData.map((ele:Collection,index)=>{
                  return <CollectionCard key={ele.id} data={{...ele}}/>
                })
              }
            </div>

            <div 
            onClick={()=>ScrollHandler({to:"right"})} 
            className=" z-10 grid place-items-center absolute right-0 w-10 h-14 top-1/2 -translate-y-1/2 dark:collection-gradient-color border-blue-500 border"
            >
                <span 
                className=" scale-125 scale-y-150 text-blue-400 font-bold select-none"
                >
                    {'>'}
                </span>
            </div>
        </div>
    </div>
</div>

  )
}

export default CollectionSection