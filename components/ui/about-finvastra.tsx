"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface AboutFinvastraProps {
  backgroundImage?: string;
}

const AboutFinvastra = ({ backgroundImage = "/placeholder.jpg" }: AboutFinvastraProps) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] ">
      <div className="relative rounded-[25px] overflow-hidden h-[641px]">
        {/* Background Image */}
        {backgroundImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>

          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-[60px] py-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-[800px]"
          >
            {/* Headline */}
            <h2 className="sub-heading-style text-white mb-[20px]">
              Weaving Wealth,
              <br />
              Securing Futures
            </h2>

            {/* Body Text */}
            <p className="text-description text-white max-w-[539px] mx-auto">
              The name Finvastra combines Finance + Vastra (fabric). Just as a fabric is woven from countless threads, we integrate lending, wealth, advisory, insurance, and investments into a seamless financial ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFinvastra;

