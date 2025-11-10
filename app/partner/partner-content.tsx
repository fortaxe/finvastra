"use client";

import { motion } from "motion/react";
import Image from "next/image";

const PartnerContent = () => {
    return (
        <section className="w-full  py-[70px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
                <div className="flex flex-col lg:flex-row gap-[60px] items-center">
                    {/* Left Column - Image */}
                    <div className="w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <Image
                                src="/partner.jpg"
                                alt="Partnership handshake"
                                width={649}
                                height={434}
                                className="w-full h-[434px] rounded-[25px] object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#FAFAFA] rounded-[25px] p-[30px] border border-color"
                        >
                            {/* Title */}
                            <h2 className="sub-heading-style mb-[20px]">
                                <span className="navy-blue">Partner With</span>{" "}
                                <span className="text-[#DBB25A]">Finvastra</span>
                            </h2>

                            {/* Description */}
                            <p className="secondary-description mb-[50px] max-w-[516px]">
                                Whether you're an NBFC, fintech, or institution seeking growth capital or strategic alliances — Finvastra offers end-to-end partnership solutions.
                            </p>

                            {/* Contact Information */}
                            <div className="space-y-[30px]">
                                {/* Phone */}
                                <div>
                                    <p className="text-[16px] leading-[12px] text-[#9E9E9E] mb-[15px]">
                                        Phone
                                    </p>
                                    <p className="text-[16px] leading-[12px] text-black ">
                                        988-543-3303
                                    </p>
                                </div>

                                {/* Email */}
                                <div>
                                    <p className="text-[16px] leading-[12px] text-[#9E9E9E] mb-[15px]">
                                        Email
                                    </p>
                                    <p className="text-[16px] leading-[12px] text-black">
                                        ajay@finvastra.com
                                    </p>
                                </div>

                                {/* Address */}
                                <div>
                                    <p className="text-[16px] leading-[12px] text-[#9E9E9E] mb-[15px]">
                                        Address
                                    </p>
                                    <p className="text-[16px] leading-[12px] text-black ">
                                        Imperial Towers, 3rd Floor, Ameerpet, Hyderabad
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerContent;

