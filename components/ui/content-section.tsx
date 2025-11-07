"use client";

import { motion } from "motion/react";
import { NavyBlueButton } from "./custom-button";

interface ContentSectionProps {
  title: string;
  highlightedWord: string;
  description: string;
  buttons: string[];
}

const ContentSection = ({ title, highlightedWord, description, buttons }: ContentSectionProps) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] pt-[70px] ">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-[30px]"
        >
          {/* Title */}
          <div>
            <h1 className="sub-heading-style text-left">
              {title}
              <br />
              <span className="text-[#DBB25A]">{highlightedWord}</span>
            </h1>
          </div>

          {/* Description */}
          <p className="secondary-description text-left">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-[5px]">
            {buttons.map((button, index) => (
              <NavyBlueButton
                key={index}
                name={button}
                onClick={() => {}}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;

