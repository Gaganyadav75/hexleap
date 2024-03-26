
import { Ad, Collection, Sport } from "@/helpers/interfaces"




  let sportsData:Array<Sport|Ad|{type:null}> = [
    {id:"sport1",type:"sport",image:"/sport1.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport2",type:"sport",image:"/sport2.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport3",type:"sport",image:"/sport3.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport4",type:"sport",image:"/sport2.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport5",type:"ad",image:"https://i.imgur.com/9PVQpeS.png",title:"Las Vegas Aviators",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere beatae recusandae sunt porro, enim atque perferendis quod repudiandae asperiores dolor, quasi magni voluptatem."},
    {id:"sport6",type:"sport",image:"/sport1.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport7",type:"sport",image:"/sport2.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport8",type:"ad",image:"https://i.imgur.com/9PVQpeS.png",title:"Las Vegas Aviators",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere beatae recusandae sunt porro, enim atque perferendis quod repudiandae asperiores dolor, quasi magni voluptatem."},
    {id:"sport9",type:"sport",image:"/sport3.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport10",type:"sport",image:"/sport2.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    

  ]




  
  let collectionData:Array<Collection> = [
    {id:"collection1",image:"/collection1.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
    {id:"collection2",image:"/collection2.png",title:"Sacramento River Cats",time:"OCT 15 | SUN | 4:30 PM",description:"Sutter Health Park, Sacramento, California",button:"Orange Collection",},
    {id:"collection3",image:"/collection3.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
    {id:"collection4",image:"/collection1.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
    {id:"collection5",image:"/collection2.png",title:"Sacramento River Cats",time:"OCT 15 | SUN | 4:30 PM",description:"Sutter Health Park, Sacramento, California",button:"Orange Collection",},
    {id:"collection6",image:"/collection3.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
  ]








  export {sportsData,collectionData}