import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a Ghana-based team of passionate developers and innovators committed to delivering cutting-edge software solutions that transform businesses and drive digital success across Ghana and the region.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative software solutions that streamline operations, enhance productivity, and drive growth through cutting-edge technology and exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading software development partner for businesses worldwide, recognized for our innovation, quality, and commitment to client success in the digital age.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients as partners, ensuring transparent communication and shared success.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and creative solutions to solve complex challenges effectively.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">123+</div>
                <div className="text-lg opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;