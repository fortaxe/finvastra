"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

interface ServiceDropdownProps {
    img: string;
    name: string;
    link: string;
}

const dropdownItems: ServiceDropdownProps[] = [
    {
        img: "/icons/arrow.svg",
        name: "FINVASTRA WEALTH Pvt Ltd",
        link: "finvastra-wealth",
    },
    {
        img: "/icons/arrow.svg",
        name: "FINVASTRA INSURANCE MARKETING Pvt Ltd",
        link: "finvastra-insurance-marketing",
    },
    {
        img: "/icons/arrow.svg",
        name: "FINVASTRA ADVISORS Pvt Ltd",
        link: "finvastra-advisors",
    },
];

// Updated ApplicationsDropdown component
const ApplicationsDropdown = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleNavigation = (link: string) => {
        router.push(`/${link}`);

        setIsOpen(false);
    };

    return (
        <DropdownMenu
            modal={false}
            open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
                className="text-white transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-[5px] bg-[#041D36] border border-[#092F52] px-[16px] py-[14px] rounded-full outline-none focus-visible:ring-0 focus-visible:outline-none focus:ring-0"
                onMouseEnter={() => setIsOpen(true)}

            >

                Divisions
               
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onMouseEnter={() => setIsOpen(true)}
                className="bg-[#F3F3F3]  
                    rounded-[10px] py-[10px] pl-[10px] pr-[11.5px] divide-y divide-black/10 min-w-[261px] overflow-hidden border-none"
                align="start"

            >
                {dropdownItems.map((item) => (
                    <DropdownMenuItem
                        onClick={() => handleNavigation(item.link)}
                        key={item.name}
                        className="flex items-center justify-between py-[10px] text-[14px] leading-[10px] cursor-pointer text-black rounded-[0px] "
                    >

                        <span className="!text-[14px] !leading-[10px] tracking-[0em]  text-black">
                            {item.name}
                        </span>
                     
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    );
};

export default ApplicationsDropdown;