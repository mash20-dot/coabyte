import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Pencil, Code, TestTube, Rocket, Wrench } from "lucide-react";
import Stagger from "@/components/Stagger";

const Process = () => {
    const steps = [
        {
            icon: Search,
            title: "Discover & Analyze",
            description: "We dive deep into understanding your business goals, challenges, and requirements. Through research, interviews, and analysis, we identify the core problems that need solving."
        },
        {
            icon: Pencil,
            title: "Plan & Design",
            description: "Our team creates detailed plans and designs based on the insights gathered. We craft wireframes, user flows, and technical architecture to ensure a solid foundation before development begins."
        },
        {
            icon: Code,
            title: "Code & Develop",
            description: "Our developers build your solution using cutting-edge technologies and best practices. We write clean, scalable code following industry standards to ensure quality and maintainability."
        },
        {
            icon: TestTube,
            title: "Test & Quality Assurance",
            description: "Every feature is thoroughly tested to ensure it works as expected. We perform functional testing, performance testing, and security checks to deliver a bug-free, reliable product."
        },
        {
            icon: Rocket,
            title: "Deploy",
            description: "Your solution goes live! We handle all technical aspects of deployment, ensuring a smooth transition to production with minimal downtime and comprehensive monitoring."
        },
        {
            icon: Wrench,
            title: "Maintain & Support",
            description: "After launch, we provide ongoing support and maintenance. We monitor performance, fix issues, apply updates, and add new features based on your feedback and evolving needs."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-light-bg via-background to-light-bg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
                        Our Software Development <span className="text-primary">Process</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A structured approach to delivering exceptional software solutions tailored to your business needs
                    </p>
                </div>

                <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerMs={100}>
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            Step {index + 1}
                                        </span>
                                    </div>
                                    <CardTitle className="text-xl text-navy">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Stagger>

                <div className="mt-16 text-center">
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        This proven methodology ensures we deliver solutions that are not only technically excellent but also aligned with your business objectives and user expectations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Process;
