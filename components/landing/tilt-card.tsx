"use client"



import { motion } from "motion/react";
import Image from "next/image";

interface AiFeature {
    image: string;
    title: string;
    description: string;
}

export const aiFeatures: AiFeature[] = [
    {
      image: "/icons/tilt/1.svg",
      title: "Partner with Us",
      description: "Collaborate. Grow. Succeed. Sustain.",
    },
    {
      image: "/icons/tilt/2.svg",
      title: "Unlock Capital",
      description: "Empower growth through funding.",
    },
    {
      image: "/icons/tilt/3.svg",
      title: "Structure Smart Debt",
      description: "Design efficient financial solutions.",
    },
    {
      image: "/icons/tilt/4.svg",
      title: "Build Your Legacy",
      description: "Transform growth into legacy.",
    },
  ];
  
const TiltCard = () => {
    return (
            <div className="
            w-[308px] md:w-[350px] md:h-[345px] h-[278px]
            border border-[#E8E8E8] relative rounded-[20px] py-[30px]  px-[20px] bg-white">
                <motion.div 
                initial={{ rotate: 7.1 }}
                whileHover={{ rotate: 0 }}
                transition={{ 
                  duration: 0.3, 
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                }}
                className="absolute inset-0 flex flex-col items- justify-center rounded-[20px] 
                px-[20px] py-[30px]
                md:px-[30px] border border-[#E8E8E8] bg-white md:gap-[34px] gap-[30px]" >
                  {aiFeatures.map((feature, index) => (
                      <div 
                    
                      key={index}
                      className="flex flex-row items-start md:gap-[14px] gap-[10px]">
                        <div>
                      <Image src={feature.image} alt={feature.title} width={24} height={24}
                      className="w-[21.4px] h-[21.4px] md:w-[24px] md:h-[24px]"
                      />
                      </div>
                      <div>
                      <h2 className="md:text-[20px] text-[16px] leading-[12px] md:leading-[15px] tracking-[0em] navy-blue md:mb-[15px] mb-[10px] font-medium">
                        {feature.title}
                      </h2>
                      <p className="text-[14px] leading-[10px]  text-[#6E6E6E] tracking-[0em]">
                        {feature.description}
                      </p>
                      </div>
                      </div>
                  ))}
                </motion.div>
            </div>
   
  );
};

export default TiltCard;
