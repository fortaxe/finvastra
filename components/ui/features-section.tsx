"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  layout: "image-left" | "image-right";
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
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] flex flex-col py-[70px] gap-x-[60px]">
      {features.map((feature) => {
        const isImageLeft = feature.layout === "image-left";
        
        return (
          <div
            key={feature.id}
            className="flex flex-row gap-[60px] items-center justify-start"
          >
            {/* Image Section */}
            <div className={isImageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={649}
                height={550}
                className="w-[649px] h-[550px] object-cover rounded-[10px] border border-white/10"
              />
            </div>

            {/* Content Section */}
            <div className={isImageLeft ? "order-1 lg:order-2 max-w-[610px]" : "order-1 lg:order-1 max-w-[610px]"}>
              <motion.div
                initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-[10px]"
              >
                {/* Title */}
                <div>
                  <p className="third-description text-[#9E9E9E]">
                    /{feature.id}
                  </p>
                  <h1
                    className="sub-heading-style navy-blue mt-2"
                    dangerouslySetInnerHTML={{
                      __html: highlightTitle(feature.title)
                    }}
                  >
                  </h1>
                </div>

                {/* Description */}
                <p className="secondary-description mt-5">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesSection;

