"use client";


import { motion } from "motion/react";
import Navigation from "../ui/navigation";
import CustomButton, { ImageButton } from "../ui/custom-button";

const Hero = () => {
    return (

        <div className="min-h-screen w-full bg-[#092F52] relative">
            {/* Dark Sphere Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#020617",
                    backgroundImage: `
                        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
                        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
                    `,
                    backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                }}
            />


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