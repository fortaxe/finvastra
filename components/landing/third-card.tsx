
import Image from "next/image";

const ThirdCard = () => {
    return (
        <div className="border border-color  h-[447px] rounded-[25px] p-[10px]  pb-[20px] flex  flex-col bg-[#FAFAFA] w-[427px]">
            <div className="border border-color rounded-[15px] flex items-center justify-center h-[271px] w-full">
                <Image src="/3.svg" alt="Orbit Demo" width={336} height={220} className="w-[336px] h-[220px]" />               
            </div>

            <div className="flex flex-col justify-center items-center mt-auto">
                <h3 className="third-heading-style navy-blue text-center ">
                    ₹1000 Cr+ Debt Structured
                </h3>
                <p className="text-description !text-black pt-[10px] max-w-[367px] text-center">
                    Partnering with leading NBFCs, fintechs, and institutions to create impactful solutions.
                </p>
            </div>
        </div>
    )
}

export default ThirdCard;