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
        className="bg-white text-black px-[18px] py-[14px] rounded-[10px] text-[14px] leading-[10px] tracking-[0em]">
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


export default CustomButton;