
import Image from "next/image";

const ThirdCard = () => {
    return (
        <div className="border border-color rounded-[10px] h-[436px] px-[30px] flex  flex-col justify-center items-center">
            <div className="flex items-center justify-center">
                <Image src="/3.svg" alt="Orbit Demo" width={336} height={220} className="w-[336px] h-[220px]" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <h3 className="third-heading-style navy-blue text-center pt-[30px]">
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