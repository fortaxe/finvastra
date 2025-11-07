"use client";

import Image from "next/image";
import { motion } from "motion/react";



const MissionVission = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] flex flex-col gap-x-[60px] pb-[70px]">
      {/* Mission */}
      <div className="flex flex-row gap-[100px] items-center">
      <div className=" max-w-[610px]" >
          <motion.div


            className="space-y-[10px] "
          >

            {/* Title */}
            <div >
              <p className="third-description text-[#9E9E9E] ">
              Our Vision
              </p>

              <h1
                className="sub-heading-style navy-blue mt-2"

              >
                Empowering Sustainable  <span className="text-[#DBB25A]">Financial Growth</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-description-secondary mt-[10px] text-[#9E9E9E]">
            To empower financial institutions with the right funding strategies, partnerships, and insights that help them scale sustainably and compliantly.
            </p>


          </motion.div>
        </div>
        <div>
          <Image
            src="/vision.jpg"
            alt="Mission"
            width={650}
            height={550}
            className="w-[650px] h-[550px] object-cover rounded-[25px] "
          />
        </div>

        
      </div>

      {/* Mission */}
      <div className="flex flex-row gap-[100px] justify-between items-center">
      <div>
          <Image
            src="/mission.jpg"
            alt="Mission"
            width={650}
            height={550}
                className="w-[650px] h-[550px] object-cover rounded-[25px] "
          />
        </div>

      <div className=" max-w-[610px]" >
          <motion.div


            className="space-y-[10px] "
          >

            {/* Title */}
            <div >
              <p className="third-description text-[#9E9E9E] ">
              Our Mission
              </p>

              <h1
                className="sub-heading-style navy-blue mt-2"

              >
                Connecting Financial <span className="text-[#DBB25A]">Ecosystems</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-description-secondary mt-[10px] text-[#9E9E9E]">
            To build a connected financial ecosystem — where NBFCs, fintechs, and capital providers collaborate seamlessly to create value and legacy.
            </p>


          </motion.div>
        </div>
  
      </div>
    </div>
  )
}

export default MissionVission;