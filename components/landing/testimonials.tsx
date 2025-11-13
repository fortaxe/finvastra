"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Nair",
      title: "CFO, Vistara Technologies",
      quote:
        "Finvastra helped us secure structured debt at the right time, enabling our expansion without equity dilution. Their team understands finance beyond numbers — they understand growth.",
    },
    {
      name: "Aditi Sharma",
      title: "Co-founder, CredGrow Fintech",
      quote:
        "Partnering with Finvastra was a turning point. Their strategic advisory and strong connections with NBFCs gave us access to capital we couldn't tap before.",
    },
    {
      name: "Arjun Mehta",
      title: "Managing Director, Mehta Healthcare Group",
      quote:
        "Finvastra's insights helped us optimize our funding model and maintain steady liquidity during expansion. The team blends financial precision with strategic foresight, ensuring every move strengthens the business foundation. They bring stability to ambition.",
    },
    {
      name: "Sneha Pillai",
      title: "Founder, GreenPath AgriTech",
      quote:
        "From the first discussion, Finvastra felt like a partner genuinely invested in our journey. Their team structured capital solutions that fueled our growth while keeping risk in check. With Finvastra, we didn't just get funding — we got a strategic ally.",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each card will move further down as scroll progresses
  const translateYs = testimonials.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [0, (i + 1) * 250]) // Adjust 120px gap
  );

  return (
    <div ref={containerRef} className="relative w-full h-[1400px] overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/hero.png"
        alt="Background"
        fill
        className="object-cover"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-[60px] md:pt-[58px] pt-[30px]">
      <div className="flex flex-row gap-[142px] items-start">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="sub-heading-style text-white font-medium text-left mb-10 flex-shrink-0"
        >
          <span className="block">Hear it from</span>
          <span className="block">Our Clients</span>
        </motion.h2>

        {/* Centered Stack */}
        <div className="relative h-[800px] w-full flex ">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              style={{
                y: translateYs[i],
                zIndex: testimonials.length - i,
              }}
              className="absolute top-0 w-[90%] md:w-[500px] bg-white/10 border border-white/20 rounded-2xl p-6 text-white backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold mb-1 text-left">{testimonial.name}</h3>
              <p className="opacity-80 text-sm mb-3 text-left">{testimonial.title}</p>
              <p className="text-base leading-relaxed text-left">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Testimonials;
