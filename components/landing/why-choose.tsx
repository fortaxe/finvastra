"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface WhyChooseFeature {
    icon: string;
    title: string;
}

interface WhyChooseProps {
    description: string;
    features: WhyChooseFeature[];
}

const WhyChoose = ({ description, features }: WhyChooseProps) => {

    const firstRow = features.slice(0, 2);
    const secondRow = features.slice(2, 4);

    return (
        <div className="w-full bg-white  max-w-[1440px] mx-auto px-4 md:px-[60px]">
            <div className="md:border-y border-y-[#EFEFEF] md:py-[50px] pt-[30px]">
                <div className="flex flex-col lg:flex-row md:gap-[108px] gap-[30px]  items-center">
                    {/* Left Section - Text Content */}
                    <div className="flex-1 lg:max-w-[500px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="sub-heading-style 
                            mb-[15px] md:mb-5 leading-tight text-center md:text-left"
                        >
                            <span className="navy-blue">Why Choose </span>
                            <span className="gold">
                                Finvastra?
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="secondary-description text-center md:text-left"
                        >
                            {description}
                        </motion.p>
                    </div>


                    {/* Mobile Layout - Single Column */}
                    <div className="flex-1 flex flex-col md:hidden w-full gap-[30px]">
                        {/* Card 1 */}
                     
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex flex-col items-center text-center  border-b-[#EFEFEF] "
                        >
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                className="mb-[30px] w-[170px] h-[170.01px] relative"
                            >
                                <Image
                                    src={features[0].icon}
                                    alt={features[0].title}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <p className="text-description !text-black mx-auto">
                                {features[0].title.split('\n').map((line, i, arr) => (
                                    <span key={i}>
                                        {line}
                                        {i < arr.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                        

                        {/* Card 2 */}
                    
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex flex-col items-center text-center  border-b-[#EFEFEF] mt-[15px]"
                        >
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                className="mb-[30px] w-[170px] h-[170.01px] relative"
                            >
                                <Image
                                    src={features[1].icon}
                                    alt={features[1].title}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <p className="text-description !text-black mx-auto">
                                {features[1].title.split('\n').map((line, i, arr) => (
                                    <span key={i}>
                                        {line}
                                        {i < arr.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                        {/* Card 3 */}
                   
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center text-center "
                        >
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                className="mb-[30px] w-[170px] h-[170.01px] relative"
                            >
                                <Image
                                    src={features[2].icon}
                                    alt={features[2].title}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <p className="text-description !text-black mx-auto">
                                {features[2].title.split('\n').map((line, i, arr) => (
                                    <span key={i}>
                                        {line}
                                        {i < arr.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                  
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex flex-col items-center text-center "
                        >
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                className="mb-[30px] w-[170px] h-[170.01px] relative"
                            >
                                <Image
                                    src={features[3].icon}
                                    alt={features[3].title}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <p className="text-description !text-black mx-auto">
                                {features[3].title.split('\n').map((line, i, arr) => (
                                    <span key={i}>
                                        {line}
                                        {i < arr.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                    </div>

                    {/* Desktop Layout - Grid */}
                    <div className="hidden md:grid flex-1 grid-cols-2">
                        {firstRow.map((feature: WhyChooseFeature, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                className="flex flex-col items-center text-center md:px-[72px] py-[15px] border-l border-l-[#EFEFEF]"
                            >
                                {/* Icon */}
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="mb-[30px] w-[170px] h-[170.01px] relative"
                                >
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                {/* Text */}
                                <p className="text-description !text-black mx-auto">
                                    {feature.title.split('\n').map((line, i, arr) => (
                                        <span key={i}>
                                            {line}
                                            {i < arr.length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </motion.div>
                        ))}

                        {/* Divider */}
                        <div className="col-span-1 md:col-span-2 my-[15px] border-t border-[#EFEFEF]"></div>

                        {secondRow.map((feature: WhyChooseFeature, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: (index + 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                className="flex flex-col items-center text-center px-[72px]  py-[15px] border-l border-l-[#EFEFEF]  "
                            >
                                {/* Icon */}
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: (index + 2) * 0.1 + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="mb-[30px] w-16 h-16 md:w-[170px] md:h-[170.01px] relative "
                                >
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        fill

                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                {/* Text */}
                                <p className="text-description !text-black mx-auto">
                                    {feature.title.split('\n').map((line, i, arr) => (
                                        <span key={i}>
                                            {line}
                                            {i < arr.length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;

