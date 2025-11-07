
import Image from "next/image";

const SecondCard = () => {
    return (
        <div className="border border-color  h-[447px] rounded-[25px] p-[10px]  pb-[20px] flex  flex-col  bg-[#FAFAFA] w-[427px]">
                
            <div className="border border-color rounded-[15px] flex items-center justify-center h-[271px] w-full">
                <Image src="/2.svg" alt="Orbit Demo" width={252} height={251} className="w-[252px] h-[252px]" />
      
            </div>

            <div className="flex flex-col items-center mt-auto">
                <h3 className="third-heading-style navy-blue text-center ">Pan-India Presence</h3>
                <p className="text-description !text-black pt-[10px] max-w-[367px] text-center">
                    Partnering with leading NBFCs, fintechs, and institutions to create impactful solutions.
                </p>
            </div>
        </div>
    )
}

export default SecondCard;