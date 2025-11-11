import WealthHero from "./wealth-hero";
import WealthFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";
import ContentSection from "@/components/ui/content-section";
import GetInTouch from "@/components/ui/get-in-touch";
import { wealthContent } from "./wealth-content-data";
import { wealthWhyChoose } from "./wealth-why-choose-data";

const WealthPage = () => {
    return (
        <div>
            <WealthHero />
            {/* <ContentSection 
                title={wealthContent.title}
                highlightedWord={wealthContent.highlightedWord}
                description={wealthContent.description}
                buttons={wealthContent.buttons}
            /> */}
            <WealthFeatures />
  
                <WhyChoose 
                    description={wealthWhyChoose.description}
                    features={wealthWhyChoose.features}
                />
      
            <GetInTouch />
        </div>
    )
}

export default WealthPage;