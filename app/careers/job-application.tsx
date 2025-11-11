"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { NavyBlueButton } from "@/components/ui/custom-button";


interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  youllDo: string[];
  youBring: string[];
}

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  roleApplied: string;
  location: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  linkedInURL: string;
  message: string;
  cv: FileList;
}

const JobApplication = () => {
  const [selectedJob, setSelectedJob] = useState<string>("rm-bc");

  const jobs: Record<string, Job> = {
    "rm-bc": {
      id: "rm-bc",
      title: "Relationship Manager – BC & Co-Lending (Advisors)",
      location: "Hyderabad",
      type: "Full Time",
      salary: "Fixed + Incentives",
      youllDo: [
        "Originate and close BC/co-lending partnerships with NBFCs/fintechs.",
        "Drive loan sourcing via channels; maintain MIS & compliance hygiene.",
        "Liaise with underwriting, operations, collections."
      ],
      youBring: [
        "2-6 yrs financial services experience; strong partnerships DNA; Excel/MIS comfort."
      ]
    },
    "credit-ops": {
      id: "credit-ops",
      title: "Credit & Operations Analyst (Advisors)",
      location: "Hyderabad",
      type: "Full Time",
      salary: "Fixed + Incentives",
      youllDo: [
        "Analyze credit applications and assess risk profiles.",
        "Maintain operational efficiency and compliance standards.",
        "Support relationship managers with data and insights."
      ],
      youBring: [
        "1-4 yrs in credit analysis or operations; analytical mindset; attention to detail."
      ]
    },
    "debt-syndication": {
      id: "debt-syndication",
      title: "Debt Syndication Associate (Advisors)",
      location: "Hyderabad",
      type: "Full Time",
      salary: "Fixed + Incentives",
      youllDo: [
        "Structure and execute debt syndication deals.",
        "Coordinate with lenders and borrowers throughout the process.",
        "Manage documentation and compliance requirements."
      ],
      youBring: [
        "2-5 yrs in debt syndication or structured finance; strong communication skills."
      ]
    },
    "rm-wealth": {
      id: "rm-wealth",
      title: "Relationship Manager - Wealth (Finvastra Wealth)",
      location: "Hyderabad",
      type: "Full Time",
      salary: "Fixed + Incentives",
      youllDo: [
        "Build and manage client relationships for wealth management services.",
        "Provide investment advisory and portfolio management guidance.",
        "Drive AUM growth through client acquisition and retention."
      ],
      youBring: [
        "3-7 yrs in wealth management or financial advisory; client-focused approach."
      ]
    },
    "insurance": {
      id: "insurance",
      title: "Insurance Sales Manager",
      location: "Hyderabad",
      type: "Full Time",
      salary: "Fixed + Incentives",
      youllDo: [
        "Drive insurance product sales through multiple channels.",
        "Build partnerships with distributors and agents.",
        "Manage sales targets and client relationships."
      ],
      youBring: [
        "2-5 yrs in insurance sales; strong network; target-driven mindset."
      ]
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    reset();
  };

  const currentJob = jobs[selectedJob];

  return (
    <section className="pt-[70px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[50px]"
        >
          <h2 className="sub-heading-style">
            <span className="navy-blue">Be Part of </span>
            <span className="text-[#DBB25A]">Finvastra</span>
          </h2>
        </motion.div>

        {/* Job Category Navigation */}
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-[10px] mb-[15px] justify-start scrollbar-hide">
          {Object.values(jobs).map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(job.id)}
              className={`px-[16px] py-[14px] rounded-full text-[14px] leading-[10px] transition-colors cursor-pointer border border-color hover:bg-[#F0F0F0] whitespace-nowrap shrink-0 ${
                selectedJob === job.id
                  ? "bg-[#F0F0F0] text-black"
                  : "text-black"
              }`}
            >
              {job.title}
            </button>
          ))}
        </div>

        {/* Job Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" mx-auto mb-[60px] space-y-[20px] border border-color rounded-[25px] px-[30px] pt-[30px] pb-[30px]"
        >
            {/* Job Title */}
            <div>
              <h3 className="text-[24px] leading-[24px] font-medium tracking-[0em] text-black mb-[20px]">
                {currentJob.title}
              </h3>

              {/* Job Attributes */}
              <div className="flex flex-wrap gap-[8px] mb-[20px]">
                <div className="px-[16px] py-[11px] rounded-full text-[14px] leading-[10px] text-black flex items-center gap-[3px] border border-color">
                  <Image src="/location/1.svg" alt="location" width={16} height={16} />
                  {currentJob.location}
                </div>
                <div className="px-[16px] py-[11px] rounded-full text-[14px] leading-[10px] text-black flex items-center gap-[3px] border border-color">
                  <Image src="/location/2.svg" alt="type" width={16} height={16} />
                  {currentJob.type}
                </div>
                <div className="px-[16px] py-[11px] rounded-full text-[14px] leading-[10px] text-black flex items-center gap-[3px] border border-color">
                  <Image src="/location/3.svg" alt="salary" width={16} height={16} />
                  {currentJob.salary}
                </div>
              </div>
            </div>

            {/* You'll do Section */}
            <div>
              <p className="description-primary tex mb-[10px]">
                You'll do
              </p>
              <ul className="space-y-[10px]">
                {currentJob.youllDo.map((item, index) => (
                  <li key={index} className="secondary-description  flex items-start">
                    <span className="mr-[10px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* You bring Section */}
            <div>
              <h4 className="primary-description">
                You bring
              </h4>
              <ul className="mt-[10px]">
                {currentJob.youBring.map((item, index) => (
                  <li key={index} className="secondary-description">
                    <span className="mr-[10px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Now Section */}
            <div>
              <h4 className="primary-description flex flex-row items-center gap-[3px] mb-[10px]">
                Apply Now
                <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="#000000" 
                    xmlns="http://www.w3.org/2000/svg"
           
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.166 9.88297V10.55H11.5V9.88297V5.16701C11.5 4.79862 11.2014 4.49999 10.833 4.49999H6.11703H5.45002V5.83402H6.11703H9.22266L4.97165 10.085L4.5 10.5567L5.4433 11.5L5.91496 11.0283L10.166 6.77731V9.88297Z" data-mode="fill"></path>
                  </motion.svg>
              </h4>
              <div className=" flex flex-row gap-[10px]">
                <a
                  href="mailto:careers@finvastra.com"
                  className="secondary-description underline flex flex-row items-center gap-[3px]"
                >
                    <Image src="/location/4.svg" alt="email" width={16} height={16} />
                    careers@finvastra.com
                </a>
                <a
                  href="tel:+919885433303"
                  className="secondary-description underline flex flex-row items-center gap-[3px]"
                >
                  <Image src="/location/5.svg" alt="phone" width={16} height={16} />
                  +91 98854 33303
                </a>
              </div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px] mt-[30px]">
            {/* Three Column Layout for Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", { required: "Full name is required" })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number"
                      }
                    })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.mobile.message}</p>
                  )}
                </div>

                {/* Role Applied */}
                <div>
                  <label htmlFor="roleApplied" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Role Applied
                  </label>
                  <input
                    type="text"
                    id="roleApplied"
                    {...register("roleApplied", { required: "Role applied is required" })}
                    defaultValue={currentJob.title}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.roleApplied && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.roleApplied.message}</p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    {...register("location", { required: "Location is required" })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.location.message}</p>
                  )}
                </div>

                {/* Current CTC */}
                <div>
                  <label htmlFor="currentCTC" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Current CTC
                  </label>
                  <input
                    type="text"
                    id="currentCTC"
                    {...register("currentCTC", { required: "Current CTC is required" })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.currentCTC && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.currentCTC.message}</p>
                  )}
                </div>

                {/* Expected CTC */}
                <div>
                  <label htmlFor="expectedCTC" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Expected CTC
                  </label>
                  <input
                    type="text"
                    id="expectedCTC"
                    {...register("expectedCTC", { required: "Expected CTC is required" })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.expectedCTC && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.expectedCTC.message}</p>
                  )}
                </div>

                {/* Notice Period */}
                <div>
                  <label htmlFor="noticePeriod" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Notice Period
                  </label>
                  <input
                    type="text"
                    id="noticePeriod"
                    {...register("noticePeriod", { required: "Notice period is required" })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.noticePeriod && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.noticePeriod.message}</p>
                  )}
                </div>

                {/* LinkedIn URL */}
                <div>
                  <label htmlFor="linkedInURL" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="linkedInURL"
                    {...register("linkedInURL", {
                      pattern: {
                        value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i,
                        message: "Please enter a valid LinkedIn URL"
                      }
                    })}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30"
                  />
                  {errors.linkedInURL && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.linkedInURL.message}</p>
                  )}
                </div>
              </div>

              {/* Message and CV Upload - Same Line */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 h-[48px] bg-[#FAFAFA] border border-color rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-white/30 resize-none"
                  />
                </div>

                {/* Upload CV */}
                <div>
                  <label htmlFor="cv" className="block text-[16px] leading-[14px] tracking-[0em] text-black mb-[10px]">
                    Upload Your CV
                  </label>
                  <div className="relative flex items-center h-[48px]">
                    <input
                      type="file"
                      id="cv"
                      accept=".pdf,.doc,.docx"
                      {...register("cv", { required: "CV is required" })}
                      className="w-full h-[48px] bg-[#FAFAFA] border border-color rounded-full text-transparent focus:outline-none focus:border-white/30 file:absolute file:right-0 file:top-1/2 file:-translate-y-1/2 file:ml-4 file:mr-[5px] file:py-2 file:px-4 file:rounded-full file:border file:border-[#e8e8e8] file:bg-white file:text-sm file:font-normal  file:text-black hover:file:bg-[#F0F0F0] file:cursor-pointer"
                    />
                  </div>
                  {errors.cv && (
                    <p className="text-red-500 text-[12px] mt-1">{errors.cv.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-[10px]">
                <NavyBlueButton
                  name="Submit"
                  onClick={() => console.log("Submit")}
                />
              </div>
            </form>
        </motion.div>

      

      </div>
    </section>
  );
};

export default JobApplication;

