"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

const footerIcons = ["icons/footer/1.svg", "icons/footer/2.svg", "icons/footer/3.svg", "icons/footer/4.svg"]

export default function Footer() {
  return (
    <div className="bg-[#FAFAFA]">
      <footer className="text-[#B0C4DE] px-4 sm:px-6 lg:px-[60px] pt-4 md:pt-[60px] pb-4 md:pb-[30px] max-w-[1440px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-8 lg:gap-[50px] md:pb-8">
          {/* Left Section - Company Description & Social Media */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:max-w-[398px]"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-5"
            >
              <Image src="/footer-gold.svg" alt="Finvastra" width={35} height={35} />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="third-description !leading-[18px] md:!leading-[20px] text-[#6E6E6E] mb-5"
            >
              Finvastra partners with NBFCs, fintechs, and institutions to structure debt, unlock capital, and build sustainable financial ecosystems. Together, we transform growth into legacy.
            </motion.p>

            <div className="flex flex-row gap-[6px]">
            
            <motion.a
                href="https://www.facebook.com/finvastra"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.1 }}
                className="w-[32px] h-[32px] border border-color rounded-full flex items-center justify-center bg-[#FAFAFA]"
              >
                <Facebook className="w-[16px] h-[16px] text-[#9E9E9E]" />
              </motion.a>
              <motion.a
                href="https://x.com/finvastra"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.1 }}
                className="w-[32px] h-[32px] border border-color rounded-full flex items-center justify-center bg-[#FAFAFA]"
              >
                <Image src="/icons/footer/1.svg" alt="Facebook" width={16} height={16} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/finvastra/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.1 }}
                className="w-[32px] h-[32px] border border-color rounded-full flex items-center justify-center bg-[#FAFAFA]"
              >
                <Image src="/icons/footer/2.svg" alt="YouTube" width={16} height={16} />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@FinVastra"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.1 }}
                className="w-[32px] h-[32px] border border-color rounded-full flex items-center justify-center bg-[#FAFAFA]"
              >
                <Image src="/icons/footer/3.svg" alt="Instagram" width={16} height={16} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/finvastra/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.1 }}
                className="w-[32px] h-[32px] border border-color rounded-full flex items-center justify-center bg-[#FAFAFA]"
              >
                <Image src="/icons/footer/4.svg" alt="LinkedIn" width={16} height={16} />
              </motion.a>
          
            </div>
          </motion.div>

          {/* Right Section - Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row flex-1 gap-5 sm:gap-[50px] lg:justify-end"
          >
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-black mb-5 third-description !leading-[10px]">Services</p>
              <ul className="flex flex-col gap-[15px]">
                <Link href="/debt-syndication" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Debt Syndication</Link>
                <Link href="/co-lending" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Co-Lending & BC Partnerships</Link>
                <Link href="/capital-advisory" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Capital Advisory</Link>
                <Link href="/fintech-collaboration" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Fintech Collaboration & Distribution</Link>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-black mb-5 third-description !leading-[10px]">Contact</p>
              <div className="flex flex-col gap-[15px]">
                <a href="tel:+919885433303" className="third-description text-[#9e9e9e] hover:text-black transition-colors">+91 988 543 3303</a>
                <a href="mailto:ajay@finvastra.com" className="third-description text-[#9e9e9e] hover:text-black transition-colors">ajay@finvastra.com</a>
                <p className="third-description text-[#9e9e9e] !leading-[18px]">
                  Imperial Towers, 3rd Floor,<br />
                  Ameerpet, Hyderabad
                </p>
              </div>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-black mb-5 third-description !leading-[10px]">Company</p>
              <ul className="flex flex-col gap-[15px]">
                <Link href="/company" className="third-description text-[#9e9e9e] hover:text-black transition-colors">About us</Link>
                <Link href="/support" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Contact Us</Link>
                <Link href="/partner" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Partner With Us</Link>
                <Link href="/careers" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Career</Link>
       
             
                <Link href="/security" className="third-description text-[#9e9e9e] hover:text-black transition-colors lg:hidden">Security</Link>
                <Link href="/terms-of-service" className="third-description text-[#9e9e9e] hover:text-black transition-colors lg:hidden">Terms Of Service</Link>
                <Link href="/privacy-policy" className="third-description text-[#9e9e9e] hover:text-black transition-colors lg:hidden">Privacy Policy</Link>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-[30px] md:mt-[100px]  md:border-t border-color pt-5"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            <p className="third-description text-[#9e9e9e] text-left">
              ©2025 Finvastra. All Rights Reserved
            </p>
            <div className="hidden lg:flex flex-row gap-[50px]">
              <Link href="/security" className="third-description text-[#9e9e9e] hover:text-black transition-colors">
                Security
              </Link>
              <Link href="/terms-of-service" className="third-description text-[#9e9e9e] hover:text-black transition-colors">
                Terms Of Service
              </Link>
              <Link href="/privacy-policy" className="third-description text-[#9e9e9e] hover:text-black transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
