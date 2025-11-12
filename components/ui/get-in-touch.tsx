"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { NavyBlueButton } from "./custom-button";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
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
    <section className="relative bg-white md:py-[70px] py-[30px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] w-full">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[63px] items-start">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sub-heading-style  leading-tight text-center md:text-left"
            >
              <span className="navy-blue">Ready to Transform  </span>
              <span className="gold">
                Your Growth?
              </span>
            </motion.h2>
            <p className="text-white secondary-description md:pt-5 pt-[15px] text-center md:text-left">
              Ready to unlock capital or structure your next funding round? We'd love to hear from you. Our team is here to discuss your financing needs, explore debt syndication opportunities, and help you build a sustainable financial foundation for growth.
            </p>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-transparent w-full lg:flex-1"
          >
            <form onSubmit={handleSubmit} className="md:space-y-5 space-y-[10px] w-full">
              {/* First Name and Last Name Row */}
              <div className="flex flex-col md:flex-row md:gap-5 gap-[10px]">
                <div className="w-full md:min-w-[360px]">
                  <label htmlFor="firstName" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div className="w-full md:min-w-[360px]">
                  <label htmlFor="lastName" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              {/* Phone and Email Row */}
              <div className="flex flex-col md:flex-row md:gap-5 gap-[10px]">
                <div className="w-full md:min-w-[360px]">
                  <label htmlFor="phone" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Phone*
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
                <div className="w-full md:min-w-[360px]">
                  <label htmlFor="email" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Email*
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
              </div>


              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                  How Can We Help You?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 h-[148px] bg-[#FAFAFA] border border-color md:rounded-[25px] rounded-[20px] text-black placeholder-gray-400 focus:outline-none focus:border-white/30 resize-none"
                  placeholder=""
                />
              </div>

              {/* Learn More Button */}
              <div className="flex justify-end md:justify-start ">
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