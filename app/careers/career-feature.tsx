"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  features: FeatureItem[];
}


const CareerFeature = ({ features }: FeaturesSectionProps) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[20px]">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#FAFAFA] md:rounded-[25px] rounded-[20px] p-[15px] md:p-[20px] border border-color  flex flex-col items-start"
          >
            {/* Icon */}
            <div className=" p-[10px] border border-color rounded-[8px]">
              <Image
                src={feature.icon}
                alt={feature.title}
                  width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>

            {/* Title */}
            <h1
              className="text-description !text-black md:mt-5 mt-[10px]"
             
            >
              {feature.title}
            </h1>

            {/* Description */}
            <p className="secondary-description text-[#6E6E6E] md:mt-[10px] mt-[5px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerFeature;

