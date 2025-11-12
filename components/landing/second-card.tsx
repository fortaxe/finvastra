"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState, useEffect, useMemo, useRef } from "react";
import { useSpring, useMotionValueEvent, motion, useInView } from "motion/react";


const chartData = [
  { region: "North", presence: 28 },
  { region: "South", presence: 25 },
  { region: "East", presence: 22 },
  { region: "West", presence: 20 },
  { region: "Central", presence: 18 },
  { region: "Northeast", presence: 15 },
];

const chartConfig = {
  presence: {
    label: "Presence",
    color: "#DBB25A",
  },
} satisfies ChartConfig;

const SecondCard = () => {
    const [currentAngle, setCurrentAngle] = useState(0);
    const [hoveredValue, setHoveredValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const springAngle = useSpring(0, { damping: 30, stiffness: 100 });
    const springValue = useSpring(0, { damping: 30, stiffness: 100 });
    const clipPathId = useMemo(() => `clipped-sector-second-${Math.random().toString(36).substr(2, 9)}`, []);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useMotionValueEvent(springAngle, "change", setCurrentAngle);
    useMotionValueEvent(springValue, "change", setHoveredValue);

    useEffect(() => {
        if (!hasAnimated && isInView) {
            // Start animation when section comes into view
            const timer = setTimeout(() => {
                springAngle.set(360);
                springValue.set(chartData[chartData.length - 1].presence);
                setHasAnimated(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [hasAnimated, isInView, springAngle, springValue]);

    const centerX = 125;
    const centerY = 125;
    const radius = 120;
    const rad = (currentAngle - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(rad);
    const y = centerY + radius * Math.sin(rad);

    return (
        <div ref={ref} className="border border-color rounded-[20px] md:rounded-[25px] w-full lg:w-[427px] p-[10px] pb-[20px] md:pb-[30px] h-full md:h-[447px] flex flex-col bg-[#FAFAFA]">
            <div className="border border-color rounded-[10px] md:rounded-[15px] flex items-center justify-center h-[271px] w-full p-2 overflow-visible">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full h-full max-h-[230px] max-w-[290px]"
                >
                    <RadarChart
                        data={chartData}
                        onMouseMove={(state) => {
                            if (state.activePayload && state.activePayload[0]) {
                                const v = state.activePayload[0].value;
                                const idx = state.activeTooltipIndex || 0;
                                const a = (idx * 360) / chartData.length;
                                springAngle.set(a);
                                springValue.set(v);
                            }
                        }}
                        onMouseLeave={() => {
                            springAngle.set(360);
                            springValue.set(chartData[chartData.length - 1].presence);
                        }}
                    >
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis dataKey="region" />
                        <PolarGrid strokeDasharray="3 3" />
                        <defs>
                            <clipPath id={clipPathId}>
                                {currentAngle >= 360 ? (
                                    <circle cx={centerX} cy={centerY} r={radius} />
                                ) : currentAngle > 0 ? (
                                    <path
                                        d={`
                                            M ${centerX} ${centerY}
                                            L ${centerX} ${centerY - radius}
                                            A ${radius} ${radius} 0 ${
                                                currentAngle > 180 ? 1 : 0
                                            } 1 ${x} ${y}
                                            Z
                                        `}
                                    />
                                ) : null}
                            </clipPath>
                            <linearGradient
                                id="gradient-clipped-radar-presence"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor={chartConfig.presence.color}
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={chartConfig.presence.color}
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Radar
                            dataKey="presence"
                            stroke={chartConfig.presence.color}
                            fill="url(#gradient-clipped-radar-presence)"
                            fillOpacity={0.4}
                            clipPath={`url(#${clipPathId})`}
                        />
                    </RadarChart>
                </ChartContainer>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-center mt-auto pt-[20px]"
            >
                <motion.h3 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="third-heading-style navy-blue md:max-w-[194px] text-center"
                >
                    Pan-India Presence
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-description !text-black pt-[10px] max-w-[367px] text-center"
                >
                    Partnering with leading NBFCs, fintechs, and institutions to create impactful solutions.
                </motion.p>
            </motion.div>
        </div>
    )
}

export default SecondCard;