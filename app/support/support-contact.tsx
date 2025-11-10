"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { NavyBlueButton } from "@/components/ui/custom-button";

export default function SupportContact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative bg-white py-[70px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] w-full">
        <div className="flex flex-row gap-[120px] items-start ">
          {/* Left Side - Heading */}
          <motion.div
            
            className=""
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sub-heading-style  leading-tight"
            >
              <span className="navy-blue">Let's Start a</span>
              <br />
              <span className="text-[#DBB25A]">
                Conversation
              </span>
            </motion.h2>
            <p className="secondary-description pt-5">
              Reach out to explore strategic collaboration, debt opportunities, or funding partnerships.
            </p>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-transparent p-[30px] border border-color rounded-[25px]"
          >
            <form onSubmit={handleSubmit} className="space-y-5 w-full">
              {/* Name and Company Row */}
              <div className="flex  gap-5">
                <div className="min-w-[315px] ">
                  <label htmlFor="name" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div className="min-w-[315px] ">
                  <label htmlFor="company" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="flex flex-wrap gap-5">
                <div className="min-w-[315px] ">
                  <label htmlFor="email" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div className="min-w-[315px] ">
                  <label htmlFor="phone" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>


              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 pt-3 h-[148px] bg-[#FAFAFA] border border-color rounded-[25px] text-black placeholder-gray-400 focus:outline-none focus:border-white/30 resize-none"
                  placeholder=""
                />
              </div>

              {/* Learn More Button */}
              <div className="flex ">
                <NavyBlueButton
                  name="Request a Callback"
                  onClick={() => console.log("Send Message")}

                />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}