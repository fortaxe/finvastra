"use client";
import Link from "next/link";
import Image from "next/image";
import { NavyBlueButton } from "../ui/custom-button";

const footerIcons =["icons/footer/1.svg", "icons/footer/2.svg", "icons/footer/3.svg", "icons/footer/4.svg"]

export default function Footer() {
  return (
    <div className="">
      <footer className="bg-[#FAFAFA] text-[#B0C4DE] px-[60px] pt-[60px]  max-w-[1440px] mx-auto ">
        {/* Top Section */}
        <div className="border-b border-white/20 flex flex-col lg:flex-row justify-between gap-[332px]">
          {/* Left Section - Company Description & Social Media */}
          <div className="max-w-[398px]">
            <div className="flex flex-row gap-[10px]">
              <div className="flex flex-row gap-[15px] items-center">
                
                <Image src="/footer-gold.svg" alt="Equitas IT INC" width={35} height={35} />
                <div>
                <p className="text-[20px] leading-[15px] tracking-[0em] text-black">
                  Finvastra
                </p>
                <p className="text-[14px] leading-[10px] tracking-[0em] text-[#9E9E9E] mt-2">
                Weaving Financial Legacies.
                </p>
              </div>
              </div>
            </div>
            <p className="third-description !leading-[20px] text-[#9E9E9E] mt-5 max-w-[401px] mb-[20px]">
              We bridge traditional lending frameworks with new-age fintech agility, enabling institutions to grow faster, safer, and smarter through strategic debt syndication and capital structuring.
            </p>

            <NavyBlueButton name="Partner With us" onClick={() => console.log("Contact Us")} />
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-row  flex-1 gap-[50px]">
            {/* Services */}
            <div>
              <p className="text-black  mb-5">Services</p>
              <ul className="flex flex-col gap-[15px]">
                <Link href="/debt-syndication" className="third-description text-[#9e9e9e]">Debt Syndication</Link>
                <Link href="/co-lending" className="third-description text-[#9e9e9e]">Co-Lending & BC Partnerships</Link>
                <Link href="/capital-advisory" className="third-description text-[#9e9e9e]">Capital Advisory</Link>
                <Link href="/fintech-collaboration" className="third-description text-[#9e9e9e]">Fintech Collaboration & Distribution</Link>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-black  mb-5">Contact</p>
              <div className="flex flex-col gap-[15px]">
                <a href="tel:+919885433303" className="third-description text-[#9e9e9e]">+91 988 543 3303</a>
                <a href="mailto:ajay@finvastra.com" className="third-description text-[#9e9e9e]">ajay@finvastra.com</a>
                <p className="third-description text-[#9e9e9e] !leading-[18px]">
                  Imperial Towers, 3rd Floor,<br />
                  Ameerpet, Hyderabad
                </p>
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="text-black  mb-5">Company</p>
              <ul className="flex flex-col gap-[15px]">
                <Link href="/about" className="third-description text-[#9e9e9e]">About</Link>
                <Link href="/contact-us" className="third-description text-[#9e9e9e]">Contact Us</Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[6px] mt-[27px] justify-end">
          {footerIcons.map((icon, index: number) => (
            <div key={index} className="w-[32px] h-[32px] border border-color rounded-full flex items-center justify-center">
            <Image key={index} src={icon} alt="Footer Icon" width={16} height={16} />
            </div>
          ))}
          
        </div>

        {/* Bottom Section */}
        <div className="mt-[50px] flex flex-col sm:flex-row justify-between items-center gap-4 py-5 border-t border-color">
          <p className="third-description text-[#9e9e9e]">
            ©2025 Finvastra. All Rights Reserved
          </p>
          <div className="flex flex-row gap-[50px]">
            <Link href="/security" className="third-description text-[#9e9e9e]">
              Security
            </Link>
            <Link href="/terms-of-service" className="third-description text-[#9e9e9e]">
              Terms Of Service
            </Link>
            <Link href="/privacy-policy" className="third-description text-[#9e9e9e]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
