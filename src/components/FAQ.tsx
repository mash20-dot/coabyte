import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "Does Coabyte only offer services in Ghana?",
            answer: "No, while we are based in Ghana, we serve clients across Africa and internationally. Our team works with businesses in West Africa, East Africa, and beyond. We leverage remote collaboration tools to deliver seamless services regardless of location. Whether you're in Ghana, Nigeria, Kenya, or anywhere globally, we can work with you to build your digital solutions."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "We specialize in modern web and mobile development using cutting-edge technologies including React, TypeScript, Node.js, cloud platforms (AWS, Google Cloud, Azure), and various databases. We choose the best technology stack for each project based on your specific needs, scalability requirements, and business goals."
        },
        {
            question: "How long does a typical software project take?",
            answer: "Project timelines vary based on scope and complexity. A simple website might take 4-8 weeks, while a full-featured web application can take 3-6 months or more. During our initial discovery phase, we'll provide you with a detailed timeline and milestone schedule after understanding your requirements."
        },
        {
            question: "Do you provide support after project delivery?",
            answer: "Absolutely! We provide ongoing maintenance and support after launch. This includes bug fixes, performance monitoring, security updates, and feature enhancements. We offer flexible support packages tailored to your needs, ensuring your application runs smoothly and continues to evolve with your business."
        },
        {
            question: "How do you ensure the quality of your work?",
            answer: "Quality is built into our process at every stage. We use rigorous testing procedures including functional testing, performance testing, and security audits. Our code follows industry best practices and standards. We also maintain clear communication throughout the project and provide regular updates and demonstrations to ensure the final product meets your expectations."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-background via-light-bg to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get answers to common questions about our services, process, and how we work with clients
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-2 border-primary/10 rounded-lg mb-4 px-6 hover:border-primary/30 transition-colors">
                                <AccordionTrigger className="text-lg font-semibold text-navy hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-muted-foreground mb-6">
                        Didn't find your answer?
                    </p>
                    <a href="https://wa.me/233552148347?text=Hi%20there%20from%20Coabyte%20Technologies" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        Contact Us on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
