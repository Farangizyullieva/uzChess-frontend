import { useState } from "react";
import BookInfoItem from "./BookInfo";
export default function InfBook() {
     const [inCart , setCart]=useState(false)

    return (<div className="p-2">

       
        
        <div className="flex items-center bg-[#272B30] w-full h-19 rounded-lg gap-5">
            <img className="w-26 h-8.75  " src="uzchess.svg" alt="icon" />
            <div className="w-px h-5 bg-[#3D4549] "></div>
            <p className="text-[#FFFFFF] font-[Poppins] font-medium">O'zbekcha</p>
            <div className="flex items-center gap-5 text-[#F7F9FA] ">
                <p className="border-b-2 border-[#3B8FE0] pb-1">Asosiy</p>
                <p>Yangiliklar</p>
                <p >O'rganish</p>
                <p>Kutubxona</p>
                <p >Bog'lanish</p>
                <div className=" flex items-center gap-5">
                    <img className="h-6 w-6" src="search.svg" alt="search" />
                    <img className="h-6 w-6" src="basket.svg" alt="basket" />
                    <img className="h-6 w-6" src="notification.svg" alt="notification" />
                    <p className="font-light">Jasurbek Po'latov</p>
                    <img className="h-9 w-9 shrink-0 rounded-full object-cover" src="Ellipse 3.png" alt="avatar" />
                </div>
            </div>

        </div>
        <div className="flex items-center gap-2 ">
            <img src="home.svg" alt="icon" />
            <p className="text-[#6D7274] ">Asosiy</p>
            <img src="chess.svg" alt="icon" />
            <p className=" text-[#6D7274]">Kutubxona</p>
            <img src="chess.svg" alt="icon" />
            <p className="text-[#F7F9FA]">Shaxmatdagi qobilyatlaringizga qayta baxo bering</p>

          <div className="flex-1 flex flex-col gap-4 border border-[#272B30]">


            </div>

        </div>


<main  className="flex gap-5">
        <div className="flex-1 bg-[#2C2F31] rounded-lg">

            <div className="flex gap-5 p-2">
                <img className= "w-45 h-63 object-cover rounded-lg"src="BookInfo.png" alt="image" />
               <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-2xl text-[#F7F9FA] font-bold"> Shaxmatdagi qobiliyatlaringizga qayta baho bering</h1>

                    <div className="flex flex-row gap-2">
                    <img src="cash.svg" alt="icon" />
                    <p className="gap-4 text-[#F7F9FA] font-bold">55.000.00 uzs</p>
                     <p className="text-white/50 font-bold line-through decoration-red-400">160.000.00 uzs</p>
                    </div>

                    <div className="grid grid-cols-4 border border-[#272B30]">
                    
                        <BookInfoItem icon="/shaxmat.svg" text1="Daraja" text2="Boshlang'ich"/>
                        <BookInfoItem icon="/author.svg" text1="Muallif" text2="Jeremy Silman"/>
                         <BookInfoItem icon="/page.svg" text1="Sahif soni " text2="231"/>
                        <BookInfoItem icon="/date.svg" text1="Chop etilgan sana" text2="2002"/>
                     </div>

                     <div className="flex gap-3">
                        {/* onClick={()=> setIsbought(!isBought)}  className={"h-12.5 px-10 rounded-lg bg-[#1C92E0]"}>{isBought ? 'Kurs sotib oldindi' : 'Kurs sotib olish'} */}

                    <button onClick={() => setCart(!inCart)} className={`flex items-center gap-2 text-[#F7F9FA] rounded-lg p-4 ${inCart ? "bg-[#272B30]" : "bg-[#1C92E0]" }`}>
                         <img src="basket.svg" alt="icon" />
                         {inCart ? "Savatchada" : "Savatchaga"}
</button>
                        <div className="flex gap-3"> 
                        <img className="flex items-center justify-center w-16 h-16 rounded-lg border border-[#3D4549]" src="heart (1).svg" alt="icon" />
                        <img className="flex items-center justify-center w-16 h-16 rounded-lg border border-[#3D4549]"  src="search.svg" alt="icon" />
                        </div>
                     </div>
                   


                    
                </div>

             </div>
        </div>

      


      

        <div className="flex gap-6 justify-end">
            
            <div className="w-81.5 h-48 rounded-xl relative overflow-hidden justify-end">
                <img
                    className="w-full h-full object-cover"
                    src="./yoshlarP.png"
                    alt="image"
                />

                <img className="p-2 absolute top-0 left-0" src="Group.svg" alt="" />

                <p className="absolute top-8 left-2 text-white">
                    Yoshlar portali
                </p>

                <p className="absolute bottom-12 left-4 right-4 text-[#F7F9FA] font-bold">
                    Aynan siz uchun qanday imtiyozlar borligini bilib oling
                </p>

                <button className="w-20 h-8 absolute bottom-3 left-4 bg-[#1C92E0] text-[#F7F9FA] rounded-lg ">
                    Batafsil
                </button>
            </div>



           

        </div>

        </main>

    </div>
    );
}