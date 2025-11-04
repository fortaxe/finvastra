interface OurGlanceContentProps {
    title: string;
    description: string;
}

const OurGlanceContent = ({title, description}: {title: string, description: string}) => {
    return (
        <div className="flex flex-col items-center justify-center max-w-[367px] text-center ">
            <h3 className="third-heading-style navy-blue">{title}</h3>
            <p className="text-description !text-black pt-[10px]">{description}</p>
        </div>
    )
}

export default OurGlanceContent;