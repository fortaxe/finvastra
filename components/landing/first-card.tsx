import Image from "next/image"

const FirstCard = () => {
    return (
        <div className="border border-color rounded-[25px]  w-[427px] p-[10px] pb-[30px] h-[447px] bg-[#FAFAFA]">
            <div className="border border-color rounded-[15px] flex items-center justify-center h-[271px] "> 
          <Image src="/1.svg" alt="First Card" width={318} height={211}
          className="w-[318px] h-[211px]"
          />
</div>
            <div className="flex flex-col justify-center items-center pt-[20px]">
            <h3 className="third-heading-style navy-blue max-w-[194px] text-center">25+ Partner Institutions </h3>
            <p className="text-description !text-black pt-[10px] max-w-[367px] text-center">Partnering with leading NBFCs, fintechs, and institutions to create impactful solutions.</p>
            </div>
        </div>  
    )
}


const InnerCard = () => {
    return (
        <div className="p-[3px] border-[0.98px] border-color rounded-[10px]">
            <div className="h-[46px] px-[6.5px]  border-[0.98px] border-color rounded-[8px] flex items-center justify-center">
                <Image src="/icons/inner.svg" alt="Inner Card" width={35} height={10} />
            </div>
        </div>
    )
}

export default FirstCard;


// import Image from "next/image"
// import OurGlanceContent from "./our-glance-content";


// const FirstCard = () => {
//     return (
//         <div className="border border-color rounded-[25px] p-[10px]  h-full  pb-[30px]">
//             <div
//             className="border border-color rounded-[15px] "
//             >
//             <div className="">
//                 <svg width="118" height="68" viewBox="0 0 118 71" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0.81543 0L0.81543 27.5C0.815311 43.3 0.8154 43.3 16.7155 43.3H102.815C116.315 43.3 116.315 43.3 116.315 70.5" stroke="#092F52" stroke-width="1.63111" />
//                 </svg>
//             </div>


//             <div className="grid grid-cols-5 gap-[6px] ">
//                 {Array.from({ length: 10 }).map((_, index) => (
//                     <InnerCard key={index} />
//                 ))}
//             </div>
//             <div className="flex justify-end">
//                 <svg width="92" height="68" viewBox="0 0 92 71" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0.81543 0L0.81543 27.5C0.815311 43.3 0.8154 43.3 16.7155 43.3H76.8154C90.3154 43.3 90.3154 43.3 90.3154 70.5" stroke="#092F52" stroke-width="1.63111" />
//                 </svg>
//             </div>
//             </div>

//             <div className="flex flex-col justify-center items-center pt-[30px]">
//             <h3 className="third-heading-style navy-blue max-w-[194px] text-center">25+ Partner Institutions </h3>
//             <p className="text-description !text-black pt-[10px] max-w-[367px] text-center">Partnering with leading NBFCs, fintechs, and institutions to create impactful solutions.</p>
//             </div>
          
//         </div>  
//     )
// }


// const InnerCard = () => {
//     return (
//         <div className="p-[3px] border-[0.98px] border-color rounded-[10px]">
//             <div className="h-[46px] px-[6.5px]  border-[0.98px] border-color rounded-[8px] flex items-center justify-center">
//                 <Image src="/icons/inner.svg" alt="Inner Card" width={35} height={10} />
//             </div>
//         </div>
//     )
// }

// export default FirstCard;