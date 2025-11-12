"use client";
import { motion } from "motion/react";
import FirstCard from "./first-card";
import SecondCard from "./second-card";
import ThirdCard from "./third-card";

const OurGlance = () => {
    return (
        <div className="md:py-[70px] py-[30px] md:px-[60px] px-4 max-w-[1440px] mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="sub-heading-style mb-[30px] md:mb-[50px] leading-tight text-center"
            >
                <span className="navy-blue">Our Impact at a </span>
                <span className="gold">
                    Glance
                </span>
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-[20px]">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <FirstCard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <SecondCard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <ThirdCard />
                </motion.div>
            </div>
        </div>
    )
}

export default OurGlance;