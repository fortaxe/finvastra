"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-[1200px] mx-auto mt-[60px]"
    >
      <h2 className="sub-heading-style mb-[50px] text-center">
        <span className="navy-blue">Frequently Asked </span>
        <span className="gold">Questions</span>
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-[#E8E8E8]">
          <AccordionTrigger className="text-black text-[16px] leading-[24px] py-4">
            What profiles do you hire most for?
          </AccordionTrigger>
          <AccordionContent className="text-[#666666] text-[16px] leading-[24px] pb-4">
            We primarily hire for Relationship Managers, Credit & Operations Analysts, Debt Syndication Associates, Wealth Management professionals, and Insurance Sales Managers. These roles span across our Advisors, Wealth, and Insurance Marketing divisions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b border-[#E8E8E8]">
          <AccordionTrigger className="text-black text-[16px] leading-[24px] py-4">
            Is there a strong incentive structure?
          </AccordionTrigger>
          <AccordionContent className="text-[#666666] text-[16px] leading-[24px] pb-4">
            Yes, we offer competitive fixed salaries plus performance-based incentives. Our compensation structure is designed to reward high performers and align individual success with company growth.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b border-[#E8E8E8]">
          <AccordionTrigger className="text-black text-[16px] leading-[24px] py-4">
            Can I apply without NBFC experience?
          </AccordionTrigger>
          <AccordionContent className="text-[#666666] text-[16px] leading-[24px] pb-4">
            While NBFC experience is preferred, we welcome candidates with relevant financial services experience. We value transferable skills, analytical mindset, and a strong understanding of financial products and markets.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b border-[#E8E8E8]">
          <AccordionTrigger className="text-black text-[16px] leading-[24px] py-4">
            Remote options?
          </AccordionTrigger>
          <AccordionContent className="text-[#666666] text-[16px] leading-[24px] pb-4">
            Currently, our positions are based in Hyderabad with a hybrid work model. We offer flexibility for certain roles, and remote options may be available based on the position and team requirements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default FAQSection;

