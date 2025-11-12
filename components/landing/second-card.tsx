"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState, useEffect, useMemo } from "react";
import { useSpring, useMotionValueEvent } from "motion/react";

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
    color: "#FCA070",
  },
} satisfies ChartConfig;

const SecondCard = () => {
    const [currentAngle, setCurrentAngle] = useState(360);
    const [hoveredValue, setHoveredValue] = useState(chartData[chartData.length - 1].presence);
    const [hasAnimated, setHasAnimated] = useState(false);
    const springAngle = useSpring(360, { damping: 30, stiffness: 100 });
    const springValue = useSpring(chartData[chartData.length - 1].presence, { damping: 30, stiffness: 100 });
    const clipPathId = useMemo(() => `clipped-sector-second-${Math.random().toString(36).substr(2, 9)}`, []);

    useMotionValueEvent(springAngle, "change", setCurrentAngle);
    useMotionValueEvent(springValue, "change", setHoveredValue);

    useEffect(() => {
        if (!hasAnimated) {
            // Start animation immediately - show full chart after a brief delay
            const timer = setTimeout(() => {
                springAngle.set(360);
                springValue.set(chartData[chartData.length - 1].presence);
                setHasAnimated(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [hasAnimated, springAngle, springValue]);

    const centerX = 125;
    const centerY = 125;
    const radius = 120;
    const rad = (currentAngle - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(rad);
    const y = centerY + radius * Math.sin(rad);

    return (
        <div className="border border-color  h-[447px] rounded-[25px] p-[10px]  pb-[20px] flex  flex-col  bg-[#FAFAFA] w-[427px]">
            <div className="border border-color rounded-[15px] flex items-center justify-center h-[271px] w-full p-2 overflow-visible">
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

            <div className="flex flex-col items-center mt-auto">
                <h3 className="third-heading-style navy-blue text-center ">Pan-India Presence</h3>
                <p className="text-description !text-black pt-[10px] max-w-[367px] text-center">
                    Partnering with leading NBFCs, fintechs, and institutions to create impactful solutions.
                </p>
            </div>
        </div>
    )
}

export default SecondCard;