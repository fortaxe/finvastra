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
        name: "Software Development",
        link: "software-development",
    },
    {
        img: "/icons/arrow.svg",
        name: "Software Consulting",
        link: "software-consulting",
    },
    {
        img: "/icons/arrow.svg",
        name: "Application Development",
        link: "application-development",
    },
    {
        img: "/icons/arrow.svg",
        name: "Web Development",
        link: "web-development",
    },
    {
        img: "/icons/arrow.svg",
        name: "Mobile App Development",
        link: "mobile-app-development",
    },
    {
        img: "/icons/arrow.svg",
        name: "API Development",
        link: "api-development",
    },
    {
        img: "/icons/arrow.svg",
        name: "IT Staff Augmentation Services",
        link: "it-staff-augmentation-services",
    },
    {
        img: "/icons/arrow.svg",
        name: "Nearshore Staff Augmentation",
        link: "nearshore-staff-augmentation",
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
                className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-[5px] outline-none focus-visible:ring-0 focus-visible:outline-none focus:ring-0"
                onMouseEnter={() => setIsOpen(true)}

            >

                Services
                <div className="w-[5px] h-[5px] gold-bg rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onMouseEnter={() => setIsOpen(true)}
                className="!bg-white/5  backdrop-blur-md 
                 rounded-[10px] border border-white/10   py-[10px] pl-[10px] pr-[11.5px] divide-y min-w-[261px]"
                align="start"

            >
                {dropdownItems.map((item) => (
                    <DropdownMenuItem
                        onClick={() => handleNavigation(item.link)}
                        key={item.name}
                        className="flex items-center justify-between py-[10px] text-[14px] leading-[10px] cursor-pointer text-white "
                    >

                        <span className="!text-[14px] !leading-[10px] tracking-[0em]  text-white">
                            {item.name}
                        </span>
                        <div className="w-[5px] h-[5px] bg-white rounded-full" />
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    );
};

export default ApplicationsDropdown;