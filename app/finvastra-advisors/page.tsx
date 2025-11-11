import AdvisorsHero from "./advisors-hero";
import AdvisorsFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";
import GetInTouch from "@/components/ui/get-in-touch";
import { advisorsWhyChoose } from "./advisors-why-choose-data";

export default function AdvisorsPage() {
    return (
        <div>
            <AdvisorsHero />
            {/* <ContentSection 
                title={advisorsContent.title}
                highlightedWord={advisorsContent.highlightedWord}
                description={advisorsContent.description}
                buttons={advisorsContent.buttons}
            /> */}
            <AdvisorsFeatures />
      
                <WhyChoose 
                    description={advisorsWhyChoose.description}
                    features={advisorsWhyChoose.features}
                />      
            <GetInTouch />
        </div>
    )
}