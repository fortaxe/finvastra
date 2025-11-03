"use client";

import Image from "next/image";
import { motion } from "motion/react";

const WhyChoose = () => {
  const features = [
    {
      icon: "/features/1.svg", // Placeholder - user will add actual path
      title: "Expertise in Debt Syndication",
      description: ""
    },
    {
      icon: "/features/2.svg", // Placeholder - user will add actual path
      title: "Strategic NBFC & Fintech Partnerships",
      description: ""
    },
    {
      icon: "/features/3.svg", // Placeholder - user will add actual path
      title: "Capital Structuring & Compliance Support",
      description: ""
    },
    {
      icon: "/features/4.svg", // Placeholder - user will add actual path
      title: "Technology-led Distribution Approach",
      description: ""
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-[60px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[108px]  items-center">
          {/* Left Section - Text Content */}
          <div className="flex-1 lg:max-w-[500px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sub-heading-style mb-5 leading-tight"
            >
              <span className="text-black">Why Choose </span>
              <span className="gold">
                Finvastra?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="secondary-description"
            >
              At Finvastra, financial growth is not just about capital - it&apos;s about collaboration, clarity, and compliance. We bridge traditional lending frameworks with new-age fintech agility, enabling institutions to grow faster, safer, and smarter.
            </motion.p>
          </div>

          {/* Right Section - Feature Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                
                className="flex flex-col items-center text-center px-[72px] py-[30px] border-l border-l-[#EFEFEF]"
              >
                {/* Icon */}
                <div className="mb-[30px] w-16 h-16 md:w-[170px] md:h-[170.01px] relative ">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                   
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <p className="text-description !text-black max-w-[137px] mx-auto">
                  {feature.title}
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

