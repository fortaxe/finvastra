"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What profiles do you hire most for?",
    answer:
      "We primarily hire for Relationship Managers, Credit & Operations Analysts, Debt Syndication Associates, Wealth Management professionals, and Insurance Sales Managers. These roles span across our Advisors, Wealth, and Insurance Marketing divisions.",
  },
  {
    id: "item-2",
    question: "Is there a strong incentive structure?",
    answer:
      "Yes, we offer competitive fixed salaries plus performance-based incentives. Our compensation structure is designed to reward high performers and align individual success with company growth.",
  },
  {
    id: "item-3",
    question: "Can I apply without NBFC experience?",
    answer:
      "While NBFC experience is preferred, we welcome candidates with relevant financial services experience. We value transferable skills, analytical mindset, and a strong understanding of financial products and markets.",
  },
  {
    id: "item-4",
    question: "Remote options?",
    answer:
      "Currently, our positions are based in Hyderabad with a hybrid work model. We offer flexibility for certain roles, and remote options may be available based on the position and team requirements.",
  },
  {
    id: "item-5",
    question: "What profiles do you hire most for?",
    answer:
      "We primarily hire for Relationship Managers, Credit & Operations Analysts, Debt Syndication Associates, Wealth Management professionals, and Insurance Sales Managers. These roles span across our Advisors, Wealth, and Insurance Marketing divisions.",
  },
];

const FAQSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-[750px] mx-auto md:my-[70px] my-[30px] px-4 sm:px-6 lg:px-[60px]"
    >
      <h2 className="sub-heading-style md:mb-[50px] mb-[30px] text-center">
        <span className="navy-blue">Frequently Asked </span>
        <span className="gold">Questions</span>
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => {
          const isLast = index === faqData.length - 1;
          const isFirst = index === 0;

          return (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={`border-b border-[#E8E8E8] ${
                isLast ? "last:border-b! last:border-[#E8E8E8]" : ""
              }`}
            >
              <AccordionTrigger
                className={`text-black text-[16px] leading-[10px] ${
                  isFirst ? "pt-0 pb-[18px]" : "py-[18px]"
                }`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#9e9e9e] text-[16px] leading-[22px] pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </motion.div>
  );
};

export default FAQSection;

