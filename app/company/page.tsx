import CompanyHero from "./company-hero";
import MeetOurTeam from "@/components/ui/meet-our-team";
import { teamMembers } from "./team-data";
import MissionVission from "./mission-vission";
import AboutFinvastra from "@/components/ui/about-finvastra";
import FeatureSection from "./features-section";

const CompanyPage = () => {
    return (
        <div>
            <CompanyHero />
            <MeetOurTeam teamMembers={teamMembers} />
            <MissionVission />
            <AboutFinvastra
            backgroundImage="/partner.jpg"
            />
            <FeatureSection />
        </div> 
    )
}

export default CompanyPage;

