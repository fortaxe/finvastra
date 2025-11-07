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
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] py-[70px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-[25px] p-[20px] border border-color  flex flex-col items-start"
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
              className="text-description !text-black mt-5"
             
            >
              {feature.title}
            </h1>

            {/* Description */}
            <p className="secondary-description text-[#9E9E9E] mt-[10px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

