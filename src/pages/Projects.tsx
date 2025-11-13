import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const vimeoId = "1136302954";
  const githubRepo = "https://github.com/mash20-dot/SOKO-CONNECT";

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <Reveal>
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-5xl font-bold text-navy mb-6">
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our latest work and see how we transform ideas into reality with cutting-edge technology and innovation.
              </p>
            </section>

            {/* Project Video Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-navy mb-8 text-center">Featured Project</h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}?loop=1&muted=1&autoplay=1&byline=0&portrait=0&title=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                  ></iframe>
                </div>
              </div>
            </section>

            {/* Backend Repository Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-navy mb-8 text-center">E-Commerce Backend</h2>
              <div className="max-w-2xl mx-auto">
                <a
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Github className="h-12 w-12 text-primary" />
                    <ExternalLink className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">SOKO-CONNECT Backend</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore the backend repository for our e-commerce platform. Built with modern technologies for scalability, security, and performance.
                  </p>
                </a>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-16 text-center bg-gradient-to-br from-light-bg to-background rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
              </p>
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
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

export default Projects;