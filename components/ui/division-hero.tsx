"use client";


import { motion } from "motion/react";
import Navigation from "@/components/ui/navigation";
import Silk from "@/components/Silk";

interface DivisionHeroProps {
    title: string;
    description?: string;
    tags?: string[];
    maxWidth?: string;
}

const DivisionHero = ({ title, description, tags, maxWidth = "899px" }: DivisionHeroProps) => {
    return (

        <div className="min-h-screen w-full bg-white relative">
            {/* Hero Background Silk */}
            <div className="absolute inset-0 z-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#092F52"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>


            <div className="absolute top-0 left-0 right-0 z-50">
                <Navigation />
            </div>
            {/* Hero Content Overlay */}
            <div className="relative z-10 flex items-end justify-start min-h-screen pb-[178px]">
                <div className="w-full px-4 sm:px-6 lg:px-15 max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex lg:flex-row flex-col justify-between 
                        items-start
                        lg:items-end w-full gap-[70px]"
                    >
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(20px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <h1 className="heading-style">
                                {title}
                            </h1>
                        </motion.div>
                        {description && (
                            <motion.div
                  
                            >
                                <p className="text-description max-w-[365px]">
                                    {description}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default DivisionHero;