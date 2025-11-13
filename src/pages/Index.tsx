import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurWorks from "@/components/OurWorks";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <OurWorks />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
