import InsuranceHero from "./insurance-hero";
import InsuranceFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";
import ContentSection from "@/components/ui/content-section";
import GetInTouch from "@/components/ui/get-in-touch";
import { insuranceContent } from "./insurance-content-data";
import { insuranceWhyChoose } from "./insurance-why-choose-data";

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
      
                <WhyChoose 
                    description={insuranceWhyChoose.description}
                    features={insuranceWhyChoose.features}
                />  
            <GetInTouch />
        </div>
    )
}

export default InsuranceMarketingPage;