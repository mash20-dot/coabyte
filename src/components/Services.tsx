import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Network, Brain } from "lucide-react";
import softwareImg from "@/assets/service-software.jpg";
import mobileImg from "@/assets/service-mobile.jpg";
import apiImg from "@/assets/service-api.jpg";
import aiImg from "@/assets/service-ai.jpg";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs. We build scalable, secure, and efficient applications using the latest technologies.",
    image: softwareImg,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android. Deliver exceptional user experiences on any device.",
    image: mobileImg,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Network,
    title: "API Development",
    description: "Robust and scalable API solutions that enable seamless integration and data exchange between your systems and services.",
    image: apiImg,
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence and machine learning to automate processes and gain valuable insights from your data.",
    image: aiImg,
    color: "from-orange-500 to-red-500"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
