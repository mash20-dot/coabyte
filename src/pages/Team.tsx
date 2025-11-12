import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in software development and business strategy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Technical expert specializing in AI and cloud architecture solutions.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating scalable applications.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Williams",
      role: "UI/UX Designer",
      bio: "Creative designer focused on delivering exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "David Brown",
      role: "Mobile Developer",
      bio: "Expert in iOS and Android development with a focus on performance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Davis",
      role: "AI Specialist",
      bio: "Machine learning engineer developing intelligent solutions.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our talented team of developers, designers, and strategists work together to deliver exceptional digital solutions.
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
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </button>
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </button>
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Team;
