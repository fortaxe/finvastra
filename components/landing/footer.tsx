"use client";
import Link from "next/link";
import Image from "next/image";

const footerIcons = ["icons/footer/1.svg", "icons/footer/2.svg", "icons/footer/3.svg", "icons/footer/4.svg"]

export default function Footer() {
  return (
    <div className="bg-[#FAFAFA]">
      <footer className="text-[#B0C4DE] px-4 sm:px-6 lg:px-[60px] pt-4 md:pt-[60px] pb-4 md:pb-[30px] max-w-[1440px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-8 lg:gap-[50px] md:pb-8">
          {/* Left Section - Company Description & Social Media */}
          <div className="w-full lg:max-w-[398px]">
            <div className="mb-5">
              <Image src="/footer-gold.svg" alt="Finvastra" width={35} height={35} />
            </div>
            <p className="third-description !leading-[18px] md:!leading-[20px] text-[#9E9E9E] mb-5">
              Finvastra partners with NBFCs, fintechs, and institutions to structure debt, unlock capital, and build sustainable financial ecosystems. Together, we transform growth into legacy.
            </p>

            <div className="flex flex-row gap-[6px]">
              {footerIcons.map((icon, index: number) => (
                <div key={index} className="w-[32px] h-[32px] border border-color rounded-full flex items-center justify-center bg-[#FAFAFA]">
                  <Image key={index} src={icon} alt="Footer Icon" width={16} height={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-col sm:flex-row flex-1 gap-5 sm:gap-[50px] lg:justify-end">
            {/* Services */}
            <div>
              <p className="text-black mb-5 third-description !leading-[10px]">Services</p>
              <ul className="flex flex-col gap-[15px]">
                <Link href="/debt-syndication" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Debt Syndication</Link>
                <Link href="/co-lending" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Co-Lending & BC Partnerships</Link>
                <Link href="/capital-advisory" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Capital Advisory</Link>
                <Link href="/fintech-collaboration" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Fintech Collaboration & Distribution</Link>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-black mb-5 third-description !leading-[10px]">Contact</p>
              <div className="flex flex-col gap-[15px]">
                <a href="tel:+919885433303" className="third-description text-[#9e9e9e] hover:text-black transition-colors">+91 988 543 3303</a>
                <a href="mailto:ajay@finvastra.com" className="third-description text-[#9e9e9e] hover:text-black transition-colors">ajay@finvastra.com</a>
                <p className="third-description text-[#9e9e9e] !leading-[18px]">
                  Imperial Towers, 3rd Floor,<br />
                  Ameerpet, Hyderabad
                </p>
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="text-black mb-5 third-description !leading-[10px]">Company</p>
              <ul className="flex flex-col gap-[15px]">
                <Link href="/about" className="third-description text-[#9e9e9e] hover:text-black transition-colors">About</Link>
                <Link href="/contact-us" className="third-description text-[#9e9e9e] hover:text-black transition-colors">Contact Us</Link>
                <Link href="/security" className="third-description text-[#9e9e9e] hover:text-black transition-colors lg:hidden">Security</Link>
                <Link href="/terms-of-service" className="third-description text-[#9e9e9e] hover:text-black transition-colors lg:hidden">Terms Of Service</Link>
                <Link href="/privacy-policy" className="third-description text-[#9e9e9e] hover:text-black transition-colors lg:hidden">Privacy Policy</Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[30px] md:mt-[100px]  md:border-t border-color">
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
        </div>
      </footer>
    </div>
  );
}
