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
            w-[390px] h-[390px]
            border border-[#E8E8E8] relative rounded-[20px] p-[30px] bg-white">
                <motion.div 
                initial={{ rotate: 7.1 }}
                whileHover={{ rotate: 0 }}
                transition={{ 
                  duration: 0.3, 
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                }}
                className="absolute inset-0 flex flex-col items- justify-center rounded-[20px] p-[30px] border border-[#E8E8E8] bg-white gap-[35px]" >
                  {aiFeatures.map((feature, index) => (
                      <div 
                    
                      key={index}
                      className="flex flex-row items-start gap-3">
                        <div>
                      <Image src={feature.image} alt={feature.title} width={24} height={24} />
                      </div>
                      <div>
                      <h2 className="text-[20px] leading-[15px] tracking-[0em] navy-blue mb-[14px] font-medium">
                        {feature.title}
                      </h2>
                      <p className="text-description !text-[#9E9E9E]">
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
