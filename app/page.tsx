import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StackMarquee from "@/components/StackMarquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Intelligence from "@/components/Intelligence";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StackMarquee />
        <Manifesto />
        <Services />
        <Work />
        <Process />
        <Stats />
        <Intelligence />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
