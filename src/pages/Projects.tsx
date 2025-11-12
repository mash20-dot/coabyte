import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Smartphone, Network, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.",
      category: "Software Development",
      icon: Code,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.",
      category: "Mobile Development",
      icon: Smartphone,
      technologies: ["React Native", "Firebase", "Plaid API"],
    },
    {
      title: "RESTful API Gateway",
      description: "Scalable API gateway handling millions of requests with rate limiting, authentication, and comprehensive documentation.",
      category: "API Development",
      icon: Network,
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    },
    {
      title: "AI Chatbot Solution",
      description: "Intelligent chatbot powered by natural language processing for customer service automation and support.",
      category: "AI Solutions",
      icon: Brain,
      technologies: ["Python", "TensorFlow", "OpenAI", "FastAPI"],
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine consultations.",
      category: "Software Development",
      icon: Code,
      technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC"],
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform mobile app for workout tracking, nutrition planning, and progress monitoring with social features.",
      category: "Mobile Development",
      icon: Smartphone,
      technologies: ["Flutter", "Firebase", "HealthKit"],
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
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects across various industries. Each project showcases our commitment to excellence and innovation.
            </p>
          </section>

          {/* Projects Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                  </div>
                  <CardTitle className="text-navy mb-2">{project.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center bg-gradient-to-br from-light-bg to-background rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </button>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;