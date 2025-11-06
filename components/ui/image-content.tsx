"use client";

import { motion } from "motion/react";
import Image from "next/image";



interface ImageContentSectionProps {
    image: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    content: {
        number?: string;
        title: string;
        description: string;
        buttonText?: string;
        buttonHref?: string;
        showArrowButton?: boolean;
    };
    layout?: "image-left" | "content-left";
    className?: string;
}

const ImageContentSection = ({
    image,
    content,
    layout = "image-left",
    className = ""
}: ImageContentSectionProps) => {
    const isImageLeft = layout === "image-left";

    return (
        <section className={` ${className}w-full max-w-[1440px] mx-auto px-[60px] py-[70px]`}>
            <div>
                <motion.div

                    className={`flex flex-row gap-[60px] ${!isImageLeft ? 'justify-start' : 'justify-start'} items-center overflow-hidden`}
                >
                    {/* Image Section */}
                    <div className={isImageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                        <motion.div

                            className="relative"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={649}
                                height={550}
                                className="w-[649px] h-[550px] rounded-[10px] border border-white/10"
                            />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className={isImageLeft ? "order-1 lg:order-2 max-w-[450px]" : "order-1 lg:order-1 max-w-[450px]"}>
                        <motion.div
                            initial={{ opacity: 0, x: isImageLeft ? 500 : -500 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",

                            }}

                            className="space-y-[10px] max-w-[450px]"
                        >
                            {/* Number Indicator */}
                            {/* Title */}
                            <div >
                                {content.number && (
                                    <p className="text-footer-description-primary ">
                                        {content.number}
                                    </p>
                                )}
                                <h1
                                    className=" sub-heading-style navy-blue"
                                    dangerouslySetInnerHTML={{
                                        __html: content.title.replace(/(\w+)(?=\s*$)/, '<span class="text-[#DBB25A]">$1</span>')
                                    }}
                                >
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-description-secondary ">
                                {content.description}
                            </p>

                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImageContentSection;
