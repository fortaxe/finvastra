import WealthHero from "./wealth-hero";
import WealthFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";
import ContentSection from "@/components/ui/content-section";
import { wealthContent } from "./wealth-content-data";

const WealthPage = () => {
    return (
        <div>
            <WealthHero />
            <ContentSection 
                title={wealthContent.title}
                highlightedWord={wealthContent.highlightedWord}
                description={wealthContent.description}
                buttons={wealthContent.buttons}
            />
            <WealthFeatures />
            <div className="mb-[70px]">
                <WhyChoose />
            </div>
        </div>
    )
}

export default WealthPage;