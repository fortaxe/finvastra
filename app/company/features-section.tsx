"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface Feature {
  title: string;
  highlight: string;
  text: string;
  image: string;
}

const FeatureSection = () => {
  const features: Feature[]  = [
    {
      title: "Trust as the",
      highlight: "Fabric",
      text: "Trust is at the heart of everything we do. We act with honesty, integrity, and openness, building confidence through every relationship and decision.",
      image: "/about-icons/1.svg"
    },
    {
      title: "Growth as the",
      highlight: "Thread",
      text: "We believe in growth that lasts. Our focus is on progress that benefits people, communities, and the planet—creating shared success for all.",
      image: "/about-icons/2.svg"
    },
    {
      title: "Security as the",
      highlight: "Foundation",
      text: "We safeguard what matters most through strong systems and responsible practices, ensuring peace of mind today and stability for the future.",
      image: "/about-icons/3.svg"
    },
    {
      title: "Innovation with",
      highlight: "Responsibility",
      text: "We combine technology and expert guidance to deliver smart, ethical solutions that drive purposeful innovation and lasting results.",
      image: "/about-icons/4.svg"
    },
    {
      title: "Legacy Beyond",
      highlight: "Wealth",
      text: "Our legacy goes beyond financial success. We strive to empower lives and build futures that reflect progress, purpose, and impact.",
      image: "/about-icons/5.svg"
    }
  ];

  return (
    <section className=" py-[70px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[70px]"
        >
          <h2 className="sub-heading-style mb-5">
            <span className="navy-blue">Core </span>
            <span className="text-[#DBB25A]">Values</span>
          </h2>
        </motion.div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[15px] items-center justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Blue Square with Checkmark */}
              {/* <div className="w-12 h-12 bg-custom-blue rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div> */}
              <Image 
                src={feature.image}
                alt="Feature 1"
                width={160}
                height={160}
                className=""
              />
              {/* Feature Title */}
              <h3 className="text-[18px] leading-[24px] text-black text-center font-medium mb-[10px]  mx-auto">
                {feature.title}{" "}
                <span className="text-[#DBB25A]">{feature.highlight}</span>
              </h3>
              {/* Feature Text */}
              <p className="text-description text-center text-[#9E9E9E]">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

