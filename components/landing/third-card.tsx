
import Image from "next/image";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { LineChart } from "recharts";
import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { ChartTooltip } from "../ui/chart";
import { ChartTooltipContent } from "../ui/chart";
import { Line } from "recharts";

const chartData = [

    { period: "Q1 2023", debt: 350 },
    { period: "Q2 2023", debt: 420 },
    { period: "Q3 2023", debt: 380 },
    { period: "Q4 2023", debt: 520 },
    { period: "Q1 2024", debt: 680 },
    { period: "Q2 2024", debt: 580 },
    { period: "Q3 2024", debt: 750 },
    { period: "Q4 2024", debt: 1050 },
    { period: "Q1 2025", debt: 920 },
    { period: "Q2 2025", debt: 1150 },
    { period: "Q3 2025", debt: 1080 },
    { period: "Q4 2025", debt: 1250 },
  ];
  
  const chartConfig = {
    debt: {
      label: "Debt Structured (₹ Cr)",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;
  

const ThirdCard = () => {
    return (
        <div className="border border-color  h-[447px] rounded-[25px] p-[10px]  pb-[20px] flex  flex-col bg-[#FAFAFA] w-[427px]">
            <div className="border border-color rounded-[15px] flex items-center justify-center h-[271px] w-full p-4">
                {/* <Image src="/3.svg" alt="Orbit Demo" width={336} height={220} className="w-[336px] h-[220px]" />                */}
                <ChartContainer config={chartConfig} className="w-full h-full ">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                // Extract quarter and year, show as "Q1 '22" format
                const match = value.match(/(Q\d+)\s+(\d{4})/);
                if (match) {
                  return `${match[1]} '${match[2].slice(-2)}`;
                }
                return value;
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              dataKey="debt"
              type="bump"
              stroke="url(#colorUv)"
              dot={false}
              strokeWidth={2}
              filter="url(#rainbow-line-glow)"
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0B84CE" stopOpacity={0.8} />
                <stop offset="20%" stopColor="#224CD1" stopOpacity={0.8} />
                <stop offset="40%" stopColor="#3A11C7" stopOpacity={0.8} />
                <stop offset="60%" stopColor="#7107C6" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#C900BD" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#D80155" stopOpacity={0.8} />
              </linearGradient>
              <filter
                id="rainbow-line-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </LineChart>
        </ChartContainer>
            </div>

            <div className="flex flex-col justify-center items-center mt-auto">
                <h3 className="third-heading-style navy-blue text-center ">
                    ₹1000 Cr+ Debt Structured
                </h3>
                <p className="text-description !text-black pt-[10px] max-w-[367px] text-center">
                    Partnering with leading NBFCs, fintechs, and institutions to create impactful solutions.
                </p>
            </div>
        </div>
    )
}

export default ThirdCard;