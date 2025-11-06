"use client";

import ColorBends from "@/components/ColorBends";
import { motion } from "motion/react";
import Navigation from "@/components/ui/navigation";
import TagButton from "./tag-button";

interface DivisionHeroProps {
    title: string;
    description: string;
    tags: string[];
}

const DivisionHero = ({ title, description, tags }: DivisionHeroProps) => {
    return (

        <div className="min-h-screen w-full bg-black relative">
            {/* Silk Background */}
            <div className="absolute inset-0 z-0">
                <ColorBends
                    colors={["#092F52"]}
                />
            </div>


            <div className="absolute top-0 left-0 right-0 z-50">
                <Navigation />
            </div>
            {/* Hero Content Overlay */}
            <div className="relative z-10 flex items-center justify-center min-h-screen ">
                <div className=" px-4 sm:px-6 lg:px-8 ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center  mx-auto max-w-[829px]"
                    >
                        <h1 className="heading-style  max-w-[971px] mx-auto">
                            {title}


                    
                        </h1>
                        <p className="text-description  mx-auto py-[30px]">
                            {description}
                        </p>

                        {/* Industry Tags */}
                        <div className="flex justify-center gap-[10px]">
                            {tags.map((tag) => (
                                <TagButton name={tag} onClick={() => { }} />
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default DivisionHero;