"use client";


import { motion } from "motion/react";
import Navigation from "../ui/navigation";
import CustomButton, { ImageButton } from "../ui/custom-button";
import LiquidEther from "../LiquidEther";

const Hero = () => {
    return (

        <div className="min-h-screen w-full bg-white relative">
            {/* LiquidEther Background */}
            <div style={{ width: '100%', height: '100%', position: 'absolute' }} className="inset-0 z-0">
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>


            <div className="absolute top-0 left-0 right-0 z-50">
                <Navigation />
            </div>
            {/* Hero Content Overlay */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-[1000px] mx-auto "
                    >
                        <h1 className="heading-style  max-w-[971px] mx-auto">
                            Weaving Financial


                            Legacies.
                        </h1>
                        <p className="text-description max-w-[669px] mx-auto py-[30px]">
                            Finvastra partners with NBFCs, fintechs, and institutions to structure debt, unlock capital, and build sustainable financial ecosystems. Together, we transform growth into legacy.
                        </p>

                        {/* Industry Tags */}
                        <div className="flex justify-center gap-[10px]">
                            <CustomButton name="Explore Solutions" onClick={() => { }} />
                            <CustomButton name="Partner With Us" onClick={() => { }} />
                          
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default Hero;