"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface MeetOurTeamProps {
  teamMembers: TeamMember[];
}

const MeetOurTeam = ({ teamMembers }: MeetOurTeamProps) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] md:py-[70px] py-[30px]">
      <div className="flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sub-heading-style text-center md:mb-[50px] mb-[30px]"
        >
          <span className="navy-blue">Meet  </span>
          <span className="text-[#DBB25A]">Our Team</span>
        </motion.h2>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[20px] w-full">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[393px] md:rounded-[25px] rounded-[20px] p-[15px] md:p-[30px] border border-color bg-[#FAFAFA] flex flex-col"
            >
              {/* Image Placeholder */}
              {/* <div className="w-full h-[300px] bg-gray-100 rounded-[10px] mb-4 relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div> */}

              {/* Name and Role - Bottom Aligned */}
              <div className="mt-auto">
                <h3 className="text-[16px] leading-[12px] font-medium text-black mb-[10px]">
                  {member.name}
                </h3>

                <p className="text-[16px] leading-[12px]  text-[#6E6E6E] mb-[10px]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;

