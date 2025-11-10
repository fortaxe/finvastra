"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";


import { useRouter, usePathname } from "next/navigation";



const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState<boolean>(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();
  const pathname = usePathname();

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
            <Image
              src="/white-logo.svg"
              alt="Equitas IT INC Logo"
              width={51.9}
              height={44}
              className="w-[full] h-[full] cursor-pointer"
              onClick={() => router.push("/")}
            />
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
              src="/footer-gold.svg"
              alt="Equitas IT INC Logo"
              width={35}
              height={35}
              className="w-[35px] h-[35px] cursor-pointer"
              onClick={() => router.push("/")}
            />
          </motion.div>
        </div>

        {/* Navigation Container with Gradient Border - Sticky Center side */}
        <motion.nav
  
          className="fixed bottom-[60px] left-0 w-full   z-50 hidden md:block  "
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-[70px] flex justify-center">

            <motion.div
              className="relative backdrop-blur-md p-[3px] flex flex-col items-center justify-center overflow-hidden bg-white  border border-color"
              animate={{
                borderRadius: "25px"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Dropdown Content - Above nav items */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: isServicesOpen ? 1 : 0,
                  height: isServicesOpen ? "auto" : 0
                }}
                transition={{ duration: 0.3 }}
                className={`w-full  overflow-hidden ${isServicesOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white px-[15px] pt-[15px] pb-[30px] gap-[12.5px] flex flex-col">
                  <Link 
                    href="/finvastra-advisors" 
                    className={`block text-[14px] leading-[10px] transition-colors font-medium ${
                      pathname === "/finvastra-advisors" ? "text-black" : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Finvastra Advisors
                  </Link>
                  <Link 
                    href="/finvastra-wealth" 
                    className={`block text-[14px] leading-[10px] transition-colors ${
                      pathname === "/finvastra-wealth" ? "text-black" : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Finvastra Wealth
                  </Link>
                  <Link 
                    href="/finvastra-insurance-marketing" 
                    className={`block text-[14px] leading-[10px] transition-colors ${
                      pathname === "/finvastra-insurance-marketing" ? "text-black" : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Finvastra Insurance Marketing
                  </Link>
                </div>
              </motion.div>

              {/* Desktop Navigation - White pill with items */}
              <div className="flex items-center gap-[3px] relative z-10">
                {/* Home Icon Button */}
                <motion.button
                  onClick={() => router.push("/")}
                  className="flex items-center justify-center w-[56px] h-[42px] rounded-full bg-[#FAFAFA] border border-color transition-colors cursor-pointer " 
                
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.00001H6.75V19.5H17.25V8.00001H18.75V18.75C18.75 19.9926 17.7426 21 16.5 21H7.5C6.25736 21 5.25 19.9926 5.25 18.75L5.25 8.00001Z" fill="#000000"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7166 3.72814C11.4883 3.19225 12.5117 3.19225 13.2834 3.72814L22.0438 9.81177L21.1882 11.0438L12 4.66312L2.81177 11.0438L1.95618 9.81177L10.7166 3.72814Z" fill="#000000"></path>
                  </svg>
                </motion.button>

                {/* Verticals Link */}
                <motion.div 
                  className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1  py-[14px] rounded-full cursor-pointer  px-[18px] ${
                    (pathname === "/finvastra-advisors" || pathname === "/finvastra-wealth" || pathname === "/finvastra-insurance-marketing") && "bg-[#fafafa] border border-color" 
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  animate={{ 
                    backgroundColor: isServicesOpen ? "#fafafa" : "transparent"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Verticals
                  <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="#000000" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ 
                      rotate: isServicesOpen ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z" data-mode="fill"></path>
                  </motion.svg>
                </motion.div>

                {/* Company Link with External Icon */}
                <Link 
                  href="/company" 
                  className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1  py-[14px] rounded-full hover:bg-[#fafafa] px-[18px]"
                  onMouseEnter={() => setIsCompanyHovered(true)}
                  onMouseLeave={() => setIsCompanyHovered(false)}
                >
                  Company
                  <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="#000000" 
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ x: 0, y: 0 }}
                    animate={{ 
                      x: isCompanyHovered ? 2 : 0,
                      y: isCompanyHovered ? -2 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.166 9.88297V10.55H11.5V9.88297V5.16701C11.5 4.79862 11.2014 4.49999 10.833 4.49999H6.11703H5.45002V5.83402H6.11703H9.22266L4.97165 10.085L4.5 10.5567L5.4433 11.5L5.91496 11.0283L10.166 6.77731V9.88297Z" data-mode="fill"></path>
                  </motion.svg>
                </Link>

                {/* Partner With Us Link */}
                <Link 
                  href="/company" 
                  className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center  py-[14px] rounded-full hover:bg-[#fafafa] px-[18px]"
                >
                  Partner With Us
                </Link>

                {/* Support Link */}
                <Link 
                  href="/company" 
                  className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center  py-[14px] rounded-full hover:bg-[#fafafa] px-[18px]"
                >
                  Support
                </Link>

              </div>
            </motion.div>
          </div>
        </motion.nav>


        <div>
          <p className="text-[14px] leading-[10px] tracking-[0em] text-white underline">
          Request a Callback
          </p>
        </div>
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
              <Image
                src="/white-logo.svg"
                alt="Equitas IT INC Logo"
                width={142}
                height={37.82}
                className="w-[142px] h-[37.82px] cursor-pointer"
                onClick={() => {
                  router.push("/");
                  setIsMobileOpen(false);
                }}
              />
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