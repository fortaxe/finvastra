import InsuranceHero from "./insurance-hero";
import InsuranceFeatures from "./features";
import WhyChoose from "@/components/landing/why-choose";

const InsuranceMarketingPage = () => {
    return (
        <div>
            <InsuranceHero />
            <InsuranceFeatures />
            <div className="mb-[70px]">
                <WhyChoose />
            </div>
        </div>
    )
}

export default InsuranceMarketingPage;