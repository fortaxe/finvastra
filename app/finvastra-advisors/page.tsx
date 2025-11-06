import AdvisorsHero from "./advisors-hero";
import FeaturesSection from "./features";
import WhyChoose from "@/components/landing/why-choose";

export default function AdvisorsPage() {
    return (
        <div>
            <AdvisorsHero />
            <FeaturesSection />
            <div className="mb-[70px]">
            <WhyChoose />
            </div>
        </div>
    )
}