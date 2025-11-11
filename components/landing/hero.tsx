"use client";


import { motion } from "motion/react";
import Navigation from "../ui/navigation";
import CustomButton from "../ui/custom-button";

const Hero = () => {
    return (

        <div className="min-h-screen w-full bg-white relative">
            {/* Hero Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/hero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />


            <div className="absolute top-0 left-0 right-0 z-50">
                <Navigation />
            </div>
            {/* Hero Content Overlay */}
            <div className="relative z-10 flex items-end justify-start min-h-screen pb-[178px]">
                <div className="w-full px-4 sm:px-6 lg:px-15 max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-between items-end w-full"
                    >
                        <div>
                            <h1 className="heading-style">
                                Weaving Financial


                                Legacies.
                            </h1>
                        </div>
                        <div>
                            <p className="text-[54px] leading-[39px] tracking-[0.04em] text-white pb-[15px]">
                                25+
                            </p>
                            <p className="text-description max-w-[365px]">
                                Finvastra partners with NBFCs, fintechs, and institutions to structure debt, unlock capital, and build sustainable financial ecosystems. Together, we transform growth into legacy.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default Hero;