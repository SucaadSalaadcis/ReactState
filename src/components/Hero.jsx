import { useState } from "react"
 
function Hero() {
    const [bgColor , setBgColor] = useState("")
    const [textColor , setTextColor] = useState()


    const onBtn = () => {
        setBgColor("yellow");
        setTextColor(true)
       
    }
 

    const offBtn = () => {
        setBgColor("white");
        setTextColor(false);
    }
 
  return (
   <div>

  <div style={{backgroundColor: bgColor}}  className="ml-[35%] border-2 border-red-600 md:ml-[43%] justify-center align-center  mt-5 rounded-full md:w-[300px] w-[200px] h-[200px] md:h-[300px] ">
    </div>
            <button style={{color: textColor == true ? "red" : "" }}  className="md:ml-[46%] ml-[35%] border-2 text-2xl mt-4 border-red-600 w-20" onClick={onBtn}  >ON</button>
            <button style={{color: textColor == false ? "red" : ""}} className="border-2 border-sky-600 ml-[40px] text-2xl mt-3  w-20 " onClick={offBtn} >OFF</button>
   </div>
    
  )
}

export default Hero