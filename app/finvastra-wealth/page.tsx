import WealthHero from "./wealth-hero";
import WealthFeatures from "./features";
import DivisionWhyChoose from "@/components/ui/division-why-choose";
import GetInTouch from "@/components/ui/get-in-touch";
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
  
                <DivisionWhyChoose 
                    description={wealthWhyChoose.description}
                    features={wealthWhyChoose.features}
                />
      
            <GetInTouch />
        </div>
    )
}

export default WealthPage;