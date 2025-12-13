"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


import { useRouter, usePathname } from "next/navigation";



const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full max-w-[1440px] px-4  md:px-[70px] mx-auto">
      <div className="flex items-center justify-between lg:gap-6 pt-4 md:pt-15 ">
        {/* Mobile layout: Hamburger (left) + Logo (center) */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Logo - Left side */}
          <motion.div
            className="shrink-0"
            whileHover={{
              rotate: 180
            }}
            
          >
            <Image
              src="/footer-gold.svg"
              alt="Equitas IT INC Logo"
              width={35}
              height={35}
              className="w-[full] h-[full] cursor-pointer"
              onClick={() => router.push("/")}
            />
          </motion.div>

          <div>
            <p 
            onClick={() => setIsMobileOpen(true)}
            className="text-description cursor-pointer block lg:hidden">
              Menu
            </p>
          </div>
        </div>

        {/* Logo - Left side (not sticky) - Centered vertically with navbar */}
        <div className="hidden lg:block relative z-[60]">
          <motion.div
            className="shrink-0"
            whileHover={{
              rotate: 180
            }}
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
              initial={{ borderRadius: "25px" }}
              animate={{
                borderRadius: "25px"
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Desktop Navigation - White pill with items */}
              <div className="flex items-center gap-[3px] relative z-10">
                {/* Home Icon Button */}
                <motion.button
                  onClick={() => router.push("/")}
                  className="flex items-center justify-center w-[56px] h-[42px] rounded-full bg-[#F0F0F0]  transition-colors cursor-pointer " 
                
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.00001H6.75V19.5H17.25V8.00001H18.75V18.75C18.75 19.9926 17.7426 21 16.5 21H7.5C6.25736 21 5.25 19.9926 5.25 18.75L5.25 8.00001Z" fill="#000000"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7166 3.72814C11.4883 3.19225 12.5117 3.19225 13.2834 3.72814L22.0438 9.81177L21.1882 11.0438L12 4.66312L2.81177 11.0438L1.95618 9.81177L10.7166 3.72814Z" fill="#000000"></path>
                  </svg>
                </motion.button>

                {/* Finvastra Advisors */}
                <Link 
                  href="/finvastra-advisors" 
                  className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center  h-[42px] rounded-full hover:bg-[#F0F0F0] px-[18px] ${
                    pathname === "/finvastra-advisors" ? "bg-[#F0F0F0]" : ""
                  }`}
                >
                   Advisory
                </Link>

                {/* Finvastra Wealth */}
                <Link 
                  href="/finvastra-wealth" 
                  className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center  h-[42px] rounded-full hover:bg-[#F0F0F0] px-[18px] ${
                    pathname === "/finvastra-wealth" ? "bg-[#F0F0F0]" : ""
                  }`}
                >
                   Wealth Management
                </Link>

                {/* Finvastra Insurance Marketing */}
                <Link 
                  href="/finvastra-insurance-marketing" 
                  className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center  h-[42px] rounded-full hover:bg-[#F0F0F0] px-[18px] ${
                    pathname === "/finvastra-insurance-marketing" ? "bg-[#F0F0F0]" : ""
                  }`}
                >
                   Insurance 
                </Link>

                <Link 
                  href="/company" 
                  className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center  h-[42px] rounded-full hover:bg-[#F0F0F0] px-[18px] ${
                    pathname === "/company" ? "bg-[#F0F0F0]" : ""
                  }`}
                >
                   About us 
                </Link>


                {/* Additional links commented out as requested */}
                {/*
                <Link href="/company" className="...">Company</Link>
                <Link href="/partner" className="...">Partner With Us</Link>
                <Link href="/careers" className="...">Career</Link>
                <Link href="/support" className="...">Support</Link>
                */}

              </div>
            </motion.div>
          </div>
        </motion.nav>


        <div>
          <Link 
            href="/support" 
            className="text-[14px] lg:block hidden leading-[10px] tracking-[0em] text-white underline hover:opacity-70 transition-opacity"
          >
            Request a Callback
          </Link>
        </div>
      </div>

      {/* Mobile Full Screen Menu - Moved outside of nav */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[9999] flex lg:hidden">
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsMobileOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="w-full min-h-screen flex flex-col py-4 pt-4 px-4 overflow-y-auto relative"
          >
 
      
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-[1]"></div>
            {/* Header */}
            <div className="flex items-center justify-between w-full relative" style={{ zIndex: 2 }}>
              <Image
                src="/white-logo.svg"
                alt="Equitas IT INC Logo"
                width={35}
                height={35}
                className=" cursor-pointer"
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
            <div className="flex flex-col flex-1 mt-6 pt-[75px] relative" style={{ zIndex: 2 }}>
              {/* Navigation Menu */}
              <div className="">
                <ul className="">
                  <li className="border-b border-white/20 -mx-4">
                    <Link
                      href="/"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors hover:opacity-80"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="border-b border-white/20 -mx-4">
                    <Link
                      href="/finvastra-advisors"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors hover:opacity-80"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Advisory
                    </Link>
                  </li>
                  <li className="border-b border-white/20 -mx-4">
                    <Link
                      href="/finvastra-wealth"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors hover:opacity-80"
                      onClick={() => setIsMobileOpen(false)}
                    >
                       Wealth Management
                    </Link>
                  </li>
                  <li className="border-b border-white/20 -mx-4">
                    <Link
                      href="/finvastra-insurance-marketing"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors hover:opacity-80"
                      onClick={() => setIsMobileOpen(false)}
                    >
                       Insurance 
                    </Link>
                  </li>

                  <li className="border-b border-white/20 -mx-4">
                    <Link
                      href="/company"
                      className="block font-medium px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors hover:opacity-80"
                      onClick={() => setIsMobileOpen(false)}
                    >
                       About us 
                    </Link>
                  </li>
                  {/* Additional links commented out as requested */}
                  {/*
                  <li className="border-b border-white/20 -mx-4">...Company...</li>
                  <li className="border-b border-white/20 -mx-4">...Partner...</li>
                  <li className="border-b border-white/20 -mx-4">...Career...</li>
                  <li className="border-b border-white/20 -mx-4">...Support...</li>
                  */}
                </ul>
              </div>

       
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navigation;