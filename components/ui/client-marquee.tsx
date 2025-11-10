"use client";
import React from "react";

// SVG separator between logos
const Separator = () => (
  <img 
    src={"/clientSeparater.svg"} 
  />
);

// Main Component
const ClientMarquee: React.FC = () => {
  const clients = [
    "client/1.svg",
    "client/2.svg",
    "client/3.svg",
    "client/4.svg",
    "client/5.svg",
    "client/6.svg",
    "client/7.svg",
    "client/8.svg",
    
  ];
  
  return (
    <div className="relative w-full overflow-hidden pb-[70px] flex items-center justify-center">
      <div className="animate-marquee whitespace-nowrap flex items-center ">
        {[...clients, ...clients].map((logo, index) => (
          <React.Fragment key={index}>
            <img
              src={logo}
              alt={`Client ${index}`}
              className="w-auto h-[25px] inline-block duration-300 pl-[50px]   hover:grayscale-0 transition-all "
            />
            
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ClientMarquee;
