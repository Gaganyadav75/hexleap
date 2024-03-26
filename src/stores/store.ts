
import { Ad, Collection, Sport } from "@/helpers/interfaces"




  let sportsData:Array<Sport|Ad|{type:null}> = [
    {id:"sport1",type:"sport",image:"https://i.imgur.com/38nA8Fh.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport2",type:"sport",image:"https://i.imgur.com/PtShtXp.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport3",type:"sport",image:"https://i.imgur.com/1ewhloV.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport4",type:"sport",image:"https://i.imgur.com/PtShtXp.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport5",type:"ad",image:"https://i.imgur.com/9PVQpeS.png",title:"Las Vegas Aviators",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere beatae recusandae sunt porro, enim atque perferendis quod repudiandae asperiores dolor, quasi magni voluptatem."},
    {id:"sport6",type:"sport",image:"https://i.imgur.com/38nA8Fh.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport7",type:"sport",image:"https://i.imgur.com/PtShtXp.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport8",type:"ad",image:"https://i.imgur.com/9PVQpeS.png",title:"Las Vegas Aviators",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere beatae recusandae sunt porro, enim atque perferendis quod repudiandae asperiores dolor, quasi magni voluptatem."},
    {id:"sport9",type:"sport",image:"https://i.imgur.com/1ewhloV.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    {id:"sport10",type:"sport",image:"https://i.imgur.com/PtShtXp.png",name:"Las Vegas Aviators",events:"48",sport:"Baseball"},
    

  ]




  
  let collectionData:Array<Collection> = [
    {id:"collection1",image:"https://i.imgur.com/17M3aM7.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
    {id:"collection2",image:"https://i.imgur.com/rOxndDt.png",title:"Sacramento River Cats",time:"OCT 15 | SUN | 4:30 PM",description:"Sutter Health Park, Sacramento, California",button:"Orange Collection",},
    {id:"collection3",image:"https://i.imgur.com/0bn5789.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
    {id:"collection4",image:"https://i.imgur.com/17M3aM7.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
    {id:"collection5",image:"https://i.imgur.com/rOxndDt.png",title:"Sacramento River Cats",time:"OCT 15 | SUN | 4:30 PM",description:"Sutter Health Park, Sacramento, California",button:"Orange Collection",},
    {id:"collection6",image:"https://i.imgur.com/0bn5789.png",title:"Las Vegas Aviators",time:"OCT 15 | SUN | 4:30 PM",description:"Las Vegas Ballpark, Las Vegas, Nevada",button:"Take Flight Collection",},
  ]








  export {sportsData,collectionData}