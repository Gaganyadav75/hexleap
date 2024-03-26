import React, { useState } from 'react'
import SportCard from './SportCard'
import AdSportCard from './AdSportCard'
import { Ad, Sport } from '@/helpers/interfaces'
import { sportsData } from '@/stores/store'

function SportsSection() {

  let [seeMore,setSeeMore]=useState(false)

    const SeeMoreHandler = ()=>{
        setSeeMore(!seeMore)
    }

    const datareturner = (ele:Sport | Ad | {type:null})=>{
        if (ele.type=="sport") {
          let sprtdata = ele as Sport
         return <SportCard key={ele.id} data={sprtdata}/>
        }else if (ele.type=="ad") {
          let adData = ele as Ad
          return <AdSportCard key={ele.id} data={adData}/>
        }else{
          return <div></div>
        }
      }


  return (
    <div 
    className="flex flex-col gap-2 w-full p-1"
    >
    <div 
    className="flex justify-start"
    >
      <h2 
      className="text-xl font-bold border-b-2 border-blue-500 dark:text-white"
      >
        Sports
      </h2>
    </div>

    {/* large:grid-cols-5 medium:grid-cols-3 small:grid-cols-1  */}

    <div 
    className={`sports-card-container flex overflow-x-hidden grid-flow-col items-stretch content-stretch flex-wrap large:auto-cols-[calc(100%/5-0.75rem)] medium:auto-cols-[calc(100%/3-0.75rem)] small:auto-cols-[calc(100%-0.75rem)] relative gap-3 py-4 `}
    >

      {
        sportsData.map((ele,index)=>{
          if (!seeMore && index<5) {
            return datareturner(ele)
          }else if (seeMore) {
            return datareturner(ele)
          }
        })
      }
 
    </div>

    <div 
    className="flex justify-center mt-2"
    >
          <span>
            <button 
            onClick={SeeMoreHandler} 
            className="text-sm text-white bg-buttom-primary-color px-4 py-2 rounded-sm"
            >
              See More 
            </button>
          </span>
    </div>

  </div>
  )
}

export default SportsSection