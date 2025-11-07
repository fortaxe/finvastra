"use client";


import { motion } from "motion/react";
import Navigation from "@/components/ui/navigation";
import TagButton from "./tag-button";

interface DivisionHeroProps {
    title: string;
    description?: string;
    tags?: string[];
    maxWidth?: string;
}

const DivisionHero = ({ title, description, tags, maxWidth = "899px" }: DivisionHeroProps) => {
    return (

        <div className="min-h-screen w-full bg-[#0f172a] relative">
            {/* Blue Radial Glow Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
                }}
            />


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
                        className="text-center  mx-auto"
                        style={{ maxWidth }}
                    >
                        <h1 className="heading-style  ] mx-auto">
                            {title}


                    
                        </h1>
                        {/* <p className="text-description  mx-auto py-[30px]">
                            {description}
                        </p> */}

                        {/* Industry Tags */}
                        {/* <div className="flex justify-center gap-[10px]">
                            {tags.map((tag) => (
                                <TagButton name={tag} onClick={() => { }} />
                            ))}
                        </div> */}

                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default DivisionHero;