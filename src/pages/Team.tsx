import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sakyi Mustapha",
      role: "Founder & CTO",
      bio: "Visionary leader and technical expert with years of experience building innovative solutions.",
      image: "https://imglink.io/i/3adbb029-5a3a-470f-ba99-e94ae615256c.jpeg",
    },
    {
      name: "Asare Maxwell",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in scalable architecture and AI integration.",
      image: "https://imglink.io/i/12006b79-795e-43fb-a448-85e98658f21d.jpg",
    },
    {
      name: "Product Manager Name",
      role: "Product Manager",
      bio: "Strategic leader focused on driving business growth and product excellence.",
      image: "https://imglink.io/i/de6a5348-5035-40ba-bf07-dfcf29bdc673.jpg",
    },
    {
      name: "Mike Ajei Sarfo",
      role: "Frontend Developer",
      bio: "Full-stack developer passionate about creating scalable applications.",
      image: "https://imglink.io/i/0d409d16-0d3b-460f-a31d-42de1f29c589.jpg",
    },


  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <Reveal>
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-5xl font-bold text-navy mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our talented Ghana-based team of developers, designers, and strategists work together to deliver exceptional digital solutions across Ghana and the region.
              </p>
            </section>

            {/* Team Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10"
                      />
                    </div>
                    <CardTitle className="text-center text-navy mb-1">{member.name}</CardTitle>
                    <p className="text-primary text-center font-semibold">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-4">
                      <a
                        href="https://www.linkedin.com/company/mhistack/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        aria-label={`Open ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                      </a>
                      <a
                        href={`mailto:contact@coabyte.com`}
                        className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5 text-primary" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Join Section */}
            <section className="text-center bg-gradient-to-br from-light-bg to-background rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Join Our Team
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our growing team. If you're passionate about technology and innovation, we'd love to hear from you.
              </p>
              <button
                onClick={() => window.location.href = "/contact"}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </button>
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Team;
