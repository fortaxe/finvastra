import InsuranceHero from "./insurance-hero";
import InsuranceFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";
import ContentSection from "@/components/ui/content-section";
import { insuranceContent } from "./insurance-content-data";

const InsuranceMarketingPage = () => {
    return (
        <div>
            <InsuranceHero />
            <ContentSection 
                title={insuranceContent.title}
                highlightedWord={insuranceContent.highlightedWord}
                description={insuranceContent.description}
                buttons={insuranceContent.buttons}
            />
            <InsuranceFeatures />
            <div className="mb-[70px]">
                <WhyChoose />
            </div>
        </div>
    )
}

export default InsuranceMarketingPage;