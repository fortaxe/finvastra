"use client";
import { motion } from "motion/react";
import FirstCard from "./first-card";
import SecondCard from "./second-card";
import ThirdCard from "./third-card";

const OurGlance = () => {
    return (
        <div className="py-[70px] px-[60px] max-w-[1440px] mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sub-heading-style mb-[50px] leading-tight text-center"
            >
                <span className="navy-blue">Our Impact at a Glance </span>
                <span className="gold">
                    Glance
                </span>
            </motion.h2>

            <div className="flex flex-row gap-[20px]">
                <FirstCard />
                <SecondCard />
                <ThirdCard />
            </div>



        </div>
    )
}

export default OurGlance;