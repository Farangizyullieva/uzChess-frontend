export default function LessonItem() {
    return <div className="flex flex-col gap-4 w-78">
        <div className="relative w-full h-38.25 overflow-hidden rounded-lg">
            <div className="w-full h-full border border-[#F7F9FA]/16 rounded-lg overflow-hidden">
                <img className="w-full h-full" src="/lesson-1.png" alt="image" />
                <div className="absolute left-3 bottom-3 flex flex-row gap-1 items-center">
                    <img src="/play.svg" alt="icon" />
                    <p className="text-[#F7F9FA]/60 text-[14px]">07:20</p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#82CC27] rounded-xs"></div>
        </div>
        <h3 className="text-[#F7F9FA] text-[20px] font-medium">1.1 Kirish</h3>
    </div>
}





//   return 
// // <div className="p-7.75">
// //     <div className="w-256.5 bg-[#1A1D1F] rounded-lg border border-[#1F272A]">
// //       <div>
// //         <div className="flex flex-row justify-between items-center h-16 px-5">
// //           <h1 className="text-[24px] text-[#F7F9FA] font-bold">1. Asosiy donalar</h1>
// //           <img src="/arrow-up.svg" alt="icon"/>
// //         </div>

// //         <div className="w-full bg-[#F7F9FA]/3 p-5">
//           <div className="flex flex-col gap-4 w-78">
//             <div className="relative w-full h-38.25 overflow-hidden rounded-lg">
//               <div className="w-full h-full border border-[#F7F9FA]/16 rounded-lg overflow-hidden">
//                 <img className="w-full h-full" src="/lesson-1.png" alt="image"/>
//                 <div className="absolute left-3 bottom-3 flex flex-row gap-1 items-center">
//                   <img src="/play.svg" alt="icon"/>
//                   <p className="text-[#F7F9FA]/60 text-[14px]">07:20</p>
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-0 w-[30%] h-1 bg-[#82CC27] rounded-xs"></div>
//             </div>
//             <h3 className="text-[#F7F9FA] text-[20px] font-medium">1.1 Kirish</h3>
//           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>;
// }
