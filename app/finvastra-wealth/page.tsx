import WealthHero from "./wealth-hero";
import WealthFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";

const WealthPage = () => {
    return (
        <div>
            <WealthHero />
            <WealthFeatures />
            <div className="mb-[70px]">
                <WhyChoose />
            </div>
        </div>
    )
}

export default WealthPage;