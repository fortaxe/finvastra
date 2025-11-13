"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Nair",
            title: "CFO, Vistara Technologies",
            quote: "Finvastra helped us secure structured debt at the right time, enabling our expansion without equity dilution. Their team understands finance beyond numbers — they understand growth."
        },
        {
            name: "Aditi Sharma",
            title: "Co-founder, CredGrow Fintech",
            quote: "Partnering with Finvastra was a turning point. Their strategic advisory and strong connections with NBFCs gave us access to capital we couldn't tap before."
        },
        {
            name: "Arjun Mehta",
            title: "Managing Director, Mehta Healthcare Group",
            quote: "Finvastra's insights helped us optimize our funding model and maintain steady liquidity during expansion. The team blends financial precision with strategic foresight, ensuring every move strengthens the business foundation. They bring stability to ambition."
        },
        {
            name: "Sneha Pillai",
            title: "Founder, GreenPath AgriTech",
            quote: "From the first discussion, Finvastra felt like a partner genuinely invested in our journey. Their team structured capital solutions that fueled our growth while keeping risk in check. With Finvastra, we didn't just get funding — we got a strategic ally."
        },
        {
            name: "Vikram Reddy",
            title: "CEO, TechFlow Solutions",
            quote: "Finvastra's expertise in debt syndication transformed our capital structure. They navigated complex regulatory requirements effortlessly and connected us with the right lenders. Their tech-led approach made the entire process transparent and efficient."
        },
        {
            name: "Priya Khanna",
            title: "Founder & CEO, UrbanLend Finance",
            quote: "Working with Finvastra was seamless from day one. Their deep understanding of NBFC operations and compliance helped us structure deals that were both profitable and sustainable. They're not just advisors — they're true partners in growth."
        },
        {
            name: "Rahul Desai",
            title: "Chief Financial Officer, NextGen Manufacturing",
            quote: "Finvastra's strategic guidance during our expansion phase was invaluable. They helped us secure multi-source debt financing that aligned perfectly with our cash flow cycles. Their team's attention to detail and proactive approach sets them apart in the industry."
        },
        {
            name: "Anjali Patel",
            title: "Co-founder, FinanceFlow Platform",
            quote: "The partnership with Finvastra opened doors we didn't know existed. Their extensive network of fintech partners and NBFCs gave us access to capital markets we had been struggling to penetrate. Their holistic approach to financial structuring is unmatched."
        },
    ];

    return (
        <div className="w-full relative h-[850px] overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0 ">
                <Image
                    src="/hero.png" // Placeholder - user will add actual image
                    alt="Background"
                    fill
                    className="object-cover"
                />
     
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-[60px] md:pt-[58px] pt-[30px] ">
                <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[80px] md:items-start items-center">
                    {/* Left Section - Title */}
                    <div className="flex-1 lg:max-w-[400px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sub-heading-style text-white font-medium text-center md:text-left"
                        >
                            <span className="block">Hear it from</span>
                            <span className="block ">Our Clients</span>
                        </motion.h2>
                    </div>

                    {/* Right Section - Testimonial Cards */}
                    <div 
                        className="testimonials-scroll flex-1 lg:max-w-[426px] max-h-[887px] overflow-y-auto pr-2 pb-50 md:pb-30 md:space-y-5 space-y-[10px]" 
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style jsx>{`
                            .testimonials-scroll::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white/10 rounded-[20px] md:rounded-[25px] pt-[20px] md:pt-[25px] pb-[20px] px-[10px] md:px-[20px] border border-white/20 "
                            >
                                <h3 className="text-[16px] leading-[12px] text-white mb-2">
                                    {testimonial.name}
                                </h3>
                                <p className="third-description text-white mb-[15px]">
                                    {testimonial.title}
                                </p>
                                <p className="text-[16px] leading-[22px] tracking-[0em] text-white">
                                        {testimonial.quote}&quot;
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
