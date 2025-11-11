"use client";

import { motion } from "motion/react";
import CareerFeature from "./career-feature";
import { whyFinvastraFeatures } from "./why-finvastra-data";

const WhyFinvastra = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] pt-[70px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[50px]"
        >
          <h2 className="sub-heading-style">
            <span className="navy-blue">Why </span>
            <span className="text-[#DBB25A]">Finvastra</span>
          </h2>
        </motion.div>
      </div>

      {/* Features Section */}
      <CareerFeature features={whyFinvastraFeatures} />
    </section>
  );
};

export default WhyFinvastra;
