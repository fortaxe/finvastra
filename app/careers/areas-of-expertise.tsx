"use client";

import { motion } from "motion/react";
import { areasOfExpertiseFeatures } from "./areas-of-expertise-data";
import CareerFeature from "./career-feature";

const AreasOfExpertise = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] md:pt-[70px] pt-[30px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:mb-[50px] mb-[30px]"
        >
          <h2 className="sub-heading-style">
            <span className="navy-blue">Our Areas of </span>
            <span className="text-[#DBB25A]">Expertise</span>
          </h2>
        </motion.div>
      </div>

      {/* Features Section */}
      <CareerFeature features={areasOfExpertiseFeatures} />
    </section>
  );
};

export default AreasOfExpertise;
