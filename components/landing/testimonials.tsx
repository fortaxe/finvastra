"use client";

import { motion } from "motion/react";
import { Marquee } from "../ui/marquee";
import Silk from "../Silk";

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

    // Split testimonials into two groups for two rows
    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <div className="w-full relative min-h-[400px] md:min-h-[600px] overflow-hidden">
            {/* Background Silk */}
            <div className="absolute inset-0 z-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#092F52"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-[60px] md:pt-[58px] pt-[30px] pb-[58px]">
                {/* Title Section */}
                <div className="mb-[40px] md:mb-[60px]">
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

                {/* First Row - Scrolls Right (normal direction) */}
                <div className="mb-[20px] md:mb-[30px]">
                    <Marquee 
                        reverse={false} 
                        pauseOnHover={true}
                        className="[--duration:50s] [--gap:1.5rem]"
                        repeat={3}
                    >
                        {firstRow.map((testimonial, index) => (
                            <div
                                key={`row1-${index}`}
                                className="bg-white/10 rounded-[20px] md:rounded-[25px] pt-[20px] md:pt-[25px] pb-[20px] px-[20px] md:px-[30px] border border-white/20 shrink-0 w-[350px] md:w-[426px]"
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
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Second Row - Scrolls Left (reverse direction) */}
                {/* <div>
                    <Marquee 
                        reverse={true} 
                        pauseOnHover={true}
                        className="[--duration:50s] [--gap:1.5rem]"
                        repeat={3}
                    >
                        {secondRow.map((testimonial, index) => (
                            <div
                                key={`row2-${index}`}
                                className="bg-white/10 rounded-[20px] md:rounded-[25px] pt-[20px] md:pt-[25px] pb-[20px] px-[20px] md:px-[30px] border border-white/20 shrink-0 w-[350px] md:w-[426px]"
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
                            </div>
                        ))}
                    </Marquee>
                </div> */}
            </div>
        </div>
    );
};

export default Testimonials;
