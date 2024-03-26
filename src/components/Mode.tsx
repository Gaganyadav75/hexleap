"use client"



const Mode = () => {


  return (
    <div 
    className="modeswitch w-2 h-2 bg-black dark:bg-white  animate-[ping_2s_infinite] overflow-hidden absolute bottom-5 left-5  rounded-full"
    onClick={()=>{
      document.querySelector("body")!.classList.toggle("dark")
    }}
    title="switch mode"
    >
     
    </div>
  )
}

export default Mode
