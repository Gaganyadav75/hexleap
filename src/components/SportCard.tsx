
import {Sport} from "../helpers/interfaces"
import Image from "next/image"

function SportCard({data}:{data:Sport}) {

  return (


    <div 
    className="p-2 large:basis-[calc(100%/5-0.75rem)] medium:basis-[calc(100%/3-0.75rem)] small:basis-[calc(100%-0.75rem)] bg-cards-bg-color flex flex-auto flex-col justify-between shadow-sm transition-all dark:bg-[#3B3E47] medium:max-w-[25vw] max-h-[100vh]"
    >
        <div 
        className="w-full aspect-[9/14] img overflow-hidden"
        >
            <Image 
            src={data.image} 
            alt="#" 
            width={200}
            height={300}
            loading='lazy'
            className=' w-full'
            placeholder='empty'
            />
        </div>

        <div 
        className="flex flex-col gap-2 pt-2"
        >
        <div>
            <h3 
            className="font-semibold text-sm mobile:text-lg dark:text-white"
            >
                {
                data.name
                }
            </h3>
        </div>
        <div 
        className="flex p-2 dark:bg-[#292B32] bg-gray-100"
        >
            <div 
            className="flex flex-col w-1/2"
            >
                <span 
                className=" text-xs text-gray-500"
                > 
                Total events
                </span>

                <span 
                className="text-xs dark:text-white"
                >
                    {
                    data.events
                    } Events
                </span>

            </div>
            <div 
            className="flex flex-col w-1/2"
            >
                <span 
                className=" text-xs text-gray-500"
                >
                    sports
                </span>

                <span 
                className="text-xs dark:text-white"
                >
                    {
                    data.sport
                    }
                </span>
                </div>
        </div>
        </div>
 </div>

  )
}

export default SportCard