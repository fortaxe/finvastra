"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

import CustomButton from "./custom-button";
import { useRouter } from "next/navigation";
import ApplicationsDropdown from "./service-dropdown";


const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();

  const handleMouseEnter = (): void => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = (): void => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  return (
    <div className="w-full max-w-[1440px] px-4 md:px-[70px] mx-auto">
      <div className="flex items-center justify-between gap-6 pt-7 md:pt-15 ">
        {/* Mobile layout: Hamburger (left) + Logo (center) */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Logo - Left side */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/white-logo.svg"
                alt="Equitas IT INC Logo"
                width={51.9}
                height={44}
                className="w-[full] h-[full]"
              />
            </Link>
          </motion.div>


        </div>



        {/* Logo - Left side (not sticky) - Centered vertically with navbar */}
        <div className="hidden md:block relative z-[60]">
          <motion.div
            className="shrink-0"
            style={{
              marginTop: 'calc((50px + 9px + 13px) - 60px - 16.5px)' // navbar center - parent padding - half logo height
            }}
          >
            <Image
              src="/logo.svg"
              alt="Equitas IT INC Logo"
              width={38.18}
              height={35}
              className="w-[38.18px] h-[35px]"
            />
          </motion.div>
        </div>

        {/* Navigation Container with Gradient Border - Sticky Center side */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[50px] left-0 w-full   z-50 hidden md:block  "
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-[70px] flex justify-center  ">

            <div
              className="relative backdrop-blur-md px-[15px] py-[9px] flex items-center justify-center rounded-[10px] overflow-visible border border-white/30 bg-[#F3F3F3]"

            >


              {/* Desktop Navigation - Right aligned */}
              <div className="flex items-center gap-[15px]  relative z-10">

                <Link href="/#" className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center">
                  <Image src="/icons/home.svg" alt="Home" width={16} height={16} className="w-[16px] h-[16px]" />

                </Link>

                <div className="w-[0.5px] h-[26px] bg-divider"></div>

                <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                  <ApplicationsDropdown />


                </div>

                <div className="w-[0.5px] h-[26px] bg-divider"></div>

                <Link href="/company" className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center">
                  About

                </Link>

                <div className="w-[0.5px] h-[26px] bg-divider"></div>

                <Link href="/careers" className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-[3px]">
                  <Image src="/icons/partner.svg" alt="Partner With Us" width={16} height={16} className="w-[16px] h-[16px]" />
                  Partner With Us
                </Link>

                <div className="w-[0.5px] h-[26px] bg-divider"></div>

                <Link href="/careers" className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-[3px]">
                  <Image src="/icons/phone.svg" alt="Contact" width={16} height={16} className="w-[16px] h-[16px]" />
                  Contact
                </Link>

              </div>
            </div>
          </div>
        </motion.nav>



      </div>

      {/* Mobile Full Screen Menu - Moved outside of nav */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[9999] flex bg-[#F3F3F3] lg:hidden">
          {/* Overlay */}
          <div
            className="flex-1 bg-[#F3F3F3] bg-opacity-50"
            onClick={() => setIsMobileOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="w-full bg-[#F3F3F3] min-h-screen flex flex-col py-4 pt-4 px-4 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="flex items-center">
                <Image
                  src="/white-logo.svg"
                  alt="Equitas IT INC Logo"
                  width={142}
                  height={37.82}
                  className="w-[142px] h-[37.82px]"
                />
              </Link>
              <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isMobileOpen}
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center text-white rounded-lg z-50"
              >
                <span className="sr-only">Close main menu</span>
                <span className="text-[14px] cursor-pointer text-white leading-1 tracking-0">
                  Go Back
                </span>
              </button>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col flex-1 mt-6 pt-[75px]">
              {/* Navigation Menu */}
              <div className="">
                <ul className="">
                  <li className="border-b border-neutral-700 -mx-4">
                    <Link
                      href="/"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="border-b border-neutral-700 -mx-4">
                    <Link
                      href="/automobile"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Automobile
                    </Link>
                  </li>

                  <li className="border-b border-neutral-700 -mx-4">
                    <Link
                      href="/about"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      About
                    </Link>
                  </li>

                  <li className="border-b border-neutral-700 -mx-4">
                    <Link
                      href="/careers"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Careers
                    </Link>
                  </li>

                  <li className="border-b border-neutral-700 -mx-4">
                    <Link
                      href="/blogs"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="border-b border-neutral-700 -mx-4">
                    <Link
                      href="/contact"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Footer pushed to bottom */}
              <div className="pt-[25px] space-y-[10px]">
                <div className="rounded-[10px]">
                  <p className="text-gray-400 text-[12px] mb-1 font-medium flex items-center leading-none tracking-0">
                    <span className="w-[6px] h-[6px] bg-blue-400 rounded-full mr-2"></span>
                    Address
                  </p>
                  <p className="text-white text-[14px] leading-none tracking-0 pt-[10px]">
                    123 Business Street, City, State 12345
                  </p>
                </div>

                <div className="rounded-[10px]">
                  <p className="text-gray-400 text-[12px] mb-1 font-medium flex items-center leading-none tracking-0">
                    <span className="w-[6px] h-[6px] bg-blue-400 rounded-full mr-2"></span>
                    Contact
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="hover:underline text-white text-[14px] leading-none tracking-0 mt-[10px]"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>

                <div className="rounded-[10px]">
                  <p className="text-gray-400 text-[12px] mb-1 font-medium flex items-center leading-none tracking-0">
                    <span className="w-[6px] h-[6px] bg-blue-400 rounded-full mr-2"></span>
                    Email
                  </p>
                  <a
                    href="mailto:info@equitasitinc.com"
                    className="hover:underline text-white text-[14px] leading-none tracking-0 mt-[10px]"
                  >
                    info@equitasitinc.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navigation;