"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  layout: "image-left" | "image-right";
}

const features: FeatureItem[] = [
  {
    id: "01",
    title: "Corporate & Institutional Finance",
    description: "Tailored financial solutions for corporates and institutions, helping them optimize capital structure, manage liquidity, and fund strategic growth initiatives.",
    image: "/placeholder.jpg",
    imageAlt: "Corporate & Institutional Finance",
    layout: "image-left",
  },
  {
    id: "02",
    title: "Debt Syndication & Structured Lending",
    description: "End-to-end support in arranging large-ticket financing through a network of banks and NBFCs, ensuring customized structures and competitive terms.",
    image: "/placeholder.jpg",
    imageAlt: "Debt Syndication & Structured Lending",
    layout: "image-right",
  },
  {
    id: "03",
    title: "Co-lending & BC (Business Correspondent) Partnerships",
    description: "Facilitating co-lending models and BC partnerships between NBFCs and banks to enhance credit access and operational scalability.",
    image: "/placeholder.jpg",
    imageAlt: "Co-lending & BC Partnerships",
    layout: "image-left",
  },
  {
    id: "04",
    title: "NBFC Setup Advisory & Compliance Consulting",
    description: "Expert guidance for setting up and operating NBFCs, covering licensing, RBI compliance, governance frameworks, and operational best practices.",
    image: "/placeholder.jpg",
    imageAlt: "NBFC Setup Advisory & Compliance Consulting",
    layout: "image-right",
  },
  {
    id: "05",
    title: "Capital Advisory & Institutional Collaborations",
    description: "Strategic advisory on capital raising, fund structuring, and institutional partnership to drive sustainable business expansion.",
    image: "/placeholder.jpg",
    imageAlt: "Capital Advisory & Institutional Collaborations",
    layout: "image-left",
  },
  {
    id: "06",
    title: "Retail Lending & Credit Solutions",
    description: "Comprehensive lending services designed for individuals and small businesses, combining flexibility, speed, and trusted financial partnerships.",
    image: "/placeholder.jpg",
    imageAlt: "Retail Lending & Credit Solutions",
    layout: "image-right",
  },
  {
    id: "07",
    title: "Business Loans (BL)",
    description: "Unsecured and secured funding options for SMEs and startups to meet working capital, expansion, or equipment financing needs.",
    image: "/placeholder.jpg",
    imageAlt: "Business Loans",
    layout: "image-left",
  },
  {
    id: "08",
    title: "Loan Against Property (LAP)",
    description: "Tailored financial solutions for corporates and institutions, helping them optimize capital structure, manage liquidity, and fund strategic growth initiatives.",
    image: "/placeholder.jpg",
    imageAlt: "Loan Against Property",
    layout: "image-right",
  },
  {
    id: "09",
    title: "Home Loans (HL)",
    description: "Affordable and transparent home financing solutions to help customers purchase, build, or renovate their dream homes.",
    image: "/placeholder.jpg",
    imageAlt: "Home Loans",
    layout: "image-left",
  },
  {
    id: "10",
    title: "Working Capital Loans (WC)",
    description: "Short-term financing designed to meet day-to-day operational expenses and maintain smooth business cash flow cycles.",
    image: "/placeholder.jpg",
    imageAlt: "Working Capital Loans",
    layout: "image-right",
  },
  {
    id: "11",
    title: "Credit Cards",
    description: "Wide range of credit cards offering financial flexibility, rewards, and benefits tailored to personal and business needs.",
    image: "/placeholder.jpg",
    imageAlt: "Credit Cards",
    layout: "image-left",
  },
  {
    id: "12",
    title: "Personal Loans (Optional)",
    description: "Quick and hassle-free personal financing to manage emergencies, education, or lifestyle expenses with flexible repayment options.",
    image: "/placeholder.jpg",
    imageAlt: "Personal Loans",
    layout: "image-right",
  },
];

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

const FeaturesSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] flex flex-col py-[70px] gap-x-[60px]">
      {features.map((feature, index) => {
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