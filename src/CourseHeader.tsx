import { useState } from "react";
import IconAndText from "./IconAndText.tsx";

function CourseHeader() {
  const [isBought , setIsbought ] = useState(false)

    let rating = 4
    let ratingArray = Array.from({length : 5})
   

  return <div className="flex flex-row justify-between w-full min-w-240 h-48.5 bg-black rounded-lg border-[#F7F9FA]/8 border p-8">

    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#F7F9FA] text-[32px] font-bold">Shaxmat donalari bilan tanishuv</h1>
        <div className="flex flex-row items-center gap-3">
          <img className="w-7 h-7" src="/cash.svg" alt="icon"/>
          <p className="text-[#F7F9FA] text-[20px] font-bold">55 000.00 uzs</p>
          <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">160 000.00 uzs</p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <IconAndText icon="/shaxmat.svg" text="Havaskor"/>
        <IconAndText icon="/student.svg" text="Matematika"/>
        <IconAndText icon="/category.svg" text="Andre Miladze"/>
      </div>
    </div>

    <div className=" flex flex-col justify-between items-end h-full pt-1.75">
        <div className="flex flex-row gap-2 items-center"> 
            <div className="flex flex-row gap-1">
               {ratingArray.map((_, index) => <img key={index} src={`/${index < rating ? 'filled' : 'empty'}.svg`} alt="icon" />)}
               </div> 
               
               <div className="w-px h-4 bg-[#1A2226];"></div> 
               <div className="flex flex-row items-center"></div>
               <p className="text-[#FFFFFF] text-[20px] font-medium">4.0</p>
               <p className="text-[14px] text-[#6D7274]">234 ta izoh</p>


        </div>




        <div>
          
        
            <button onClick={()=> setIsbought(!isBought)}  className={"h-12.5 px-10 rounded-lg bg-[#1C92E0]"}>{isBought ? 'Kurs sotib oldindi' : 'Kurs sotib olish'}</button>

             {/* { isOpen && <div className="grid grid-cols-3 w-full gap-6 bg-[#F7F9FA]/3 p-5"> */}
            <button className="w-12.5 h-12.5 rounded-lg items-center justify-center border border-white"> 
                <img src="/heart (1).svg" alt="icon" />
            </button>

            <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]"></button>
            



        </div>



    </div>
  </div>;
}

export default CourseHeader;