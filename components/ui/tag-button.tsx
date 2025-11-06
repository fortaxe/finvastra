interface TagButtonProps {
    name: string;
    onClick: () => void;
}

const TagButton = ({ name , onClick }: TagButtonProps) => {
    return (
        <div onClick={onClick} className="border border-whtie rounded-[10px] px-[18px] py-[14px] text-white text-[14px] leading-[10px] tracking-[0em]">
            {name}
        </div>
    )
}

export default TagButton;