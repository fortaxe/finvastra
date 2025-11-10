import Image from "next/image";

interface CustomButtonProps {
    name: string;
    onClick: () => void;
}

interface ImageButtonProps {

    onClick: () => void;
    image: string;
}

const CustomButton = ({ name, onClick }: CustomButtonProps) => {
    return (
        <button 
        onClick={onClick}
        className="text-white transition-colors duration-200 text-[14px] leading-[10px] flex items-center bg-[#041D36] border border-[#092F52] px-[16px] py-[14px] rounded-full">
           {name}
        </button>
    )
}

export const ImageButton = ({  onClick, image }: ImageButtonProps) => {
    return (
        <button 
        onClick={onClick}
        className="bg-white text-black px-[25px] py-[14px] rounded-[10px]">
           <Image src={image} alt={"image"} width={10} height={10} />
        </button>
    )
}

export const NavyBlueButton = ({ name, onClick }: CustomButtonProps) => {
    return (
        <button 
        onClick={onClick}
        className="text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center  px-[16px] py-[14px] rounded-full border border-color hover:bg-[#FAFAFA] cursor-pointer">
           {name}
        </button>
    )
}


export default CustomButton;