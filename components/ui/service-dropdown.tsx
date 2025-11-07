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
        name: "Finvastra Advisors Pvt. Ltd.",
        link: "finvastra-advisors",
    },
    {
        img: "/icons/arrow.svg",
        name: "Finvastra Wealth Pvt. Ltd.",
        link: "finvastra-wealth",
    },
    {
        img: "/icons/arrow.svg",
        name: "Finvastra Insurance Marketing Pvt. Ltd.",
        link: "finvastra-insurance-marketing",
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

Verticals
               
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onMouseEnter={() => setIsOpen(true)}
                className="bg-[#041D36]  
                    rounded-[25px] px-4 divide-y divide-[#092F52] min-w-[261px] overflow-hidden border border-[#092F52] py-[5px]"
                align="start"

            >
                {dropdownItems.map((item) => (
                    <DropdownMenuItem
                        onClick={() => handleNavigation(item.link)}
                        key={item.name}
                        className="flex items-center justify-between py-[11px] text-[14px] leading-[10px] cursor-pointer text-white rounded-[0px] "
                    >

                        <span className="!text-[14px] !leading-[10px] tracking-[0em]  text-white">
                            {item.name}
                        </span>
                     
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    );
};

export default ApplicationsDropdown;