import AdvisorsHero from "./advisors-hero";
import AdvisorsFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";
import ContentSection from "@/components/ui/content-section";
import { advisorsContent } from "./advisors-content-data";

export default function AdvisorsPage() {
    return (
        <div>
            <AdvisorsHero />
            <ContentSection 
                title={advisorsContent.title}
                highlightedWord={advisorsContent.highlightedWord}
                description={advisorsContent.description}
                buttons={advisorsContent.buttons}
            />
            <AdvisorsFeatures />
            <div className="mb-[70px]">
            <WhyChoose />
            </div>
        </div>
    )
}