"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  features: FeatureItem[];
}

// Helper function to highlight the last word or content in parentheses
const highlightTitle = (title: string): string => {
  // Check if there's a word after parentheses (e.g., "Co-lending & BC (Business Correspondent) Partnerships")
  const wordAfterParentheses = title.match(/\([^)]+\)\s+(\w+)$/);
  if (wordAfterParentheses) {
    // Highlight the word after parentheses
    return title.replace(/(\w+)(?=\s*$)/, '<span class="text-[#DBB25A]">$1</span>');
  }
  // Check if parentheses are at the end (e.g., "Business Loans (BL)")
  const parenthesesAtEnd = title.match(/\(([^)]+)\)$/);
  if (parenthesesAtEnd) {
    // Highlight content in parentheses
    return title.replace(/\(([^)]+)\)$/, '<span class="text-[#DBB25A]">($1)</span>');
  }
  // Otherwise, highlight the last word
  return title.replace(/(\w+)(?=\s*$)/, '<span class="text-[#DBB25A]">$1</span>');
};

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] 
    md:py-[70px] py-[30px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[20px] auto-rows-fr">
        {features.map((feature, idx) => (
          <div
            key={feature.id}
            className="relative group p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#F5F5F5] rounded-[20px] md:rounded-[25px]"
                  layoutId="featureHover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }}
                />
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 md:rounded-[25px] rounded-[20px] p-[15px] md:p-[20px] border border-color flex flex-col items-start bg-white h-full"
            >
              {/* Icon */}
              <div className="p-[10px] border border-color rounded-[8px]">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
              </div>

              {/* Title */}
              <h1 className="text-description text-black! md:mt-5 mt-[10px]">
                {feature.title}
              </h1>

              {/* Description */}
              <p className="secondary-description text-[#6E6E6E] md:mt-[10px] mt-[5px]">
                {feature.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;

