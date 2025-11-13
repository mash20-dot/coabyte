import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/Contact";
import Reveal from "@/components/Reveal";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Reveal>
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
