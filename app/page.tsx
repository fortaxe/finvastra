import Hero from "@/components/landing/hero";
import ClientMarquee from "@/components/ui/client-marquee";
import WhyChoose from "@/components/landing/why-choose";
import Testimonials from "@/components/landing/testimonials";
import GetInTouch from "@/components/ui/get-in-touch";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div>
    <Hero />
    <ClientMarquee />
    <WhyChoose />
    <Testimonials />
    <GetInTouch />
    <Footer />
    </div>
  );
}
