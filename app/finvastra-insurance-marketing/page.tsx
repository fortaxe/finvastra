import InsuranceHero from "./insurance-hero";
import InsuranceFeatures from "./features";
import DivisionWhyChoose from "@/components/ui/division-why-choose";
import GetInTouch from "@/components/ui/get-in-touch";
import { insuranceWhyChoose } from "./insurance-why-choose-data";

const InsuranceMarketingPage = () => {
    return (
        <div>
            <InsuranceHero />
            {/* <ContentSection 
                title={insuranceContent.title}
                highlightedWord={insuranceContent.highlightedWord}
                description={insuranceContent.description}
                buttons={insuranceContent.buttons}
            /> */}
            <InsuranceFeatures />
      
                <DivisionWhyChoose 
                    description={insuranceWhyChoose.description}
                    features={insuranceWhyChoose.features}
                />  
            <GetInTouch />
        </div>
    )
}

export default InsuranceMarketingPage;