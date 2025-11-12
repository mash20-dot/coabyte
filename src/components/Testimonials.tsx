import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
    id: number;
    name: string;
    company: string;
    role: string;
    message: string;
    image: string;
    rating: number;
}

const Testimonials = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Mr Mathew",
            company: "Swift Motors",
            role: "CEO",
            message: "Working with this team was a game-changer for our business. Their innovative solutions transformed our operations and increased efficiency by 40%.",
            image: "https://imglink.io/i/c03c6d7e-58f7-495a-a43b-e24872bbd1e9.jpg",
            rating: 5,
        },
        {
            id: 2,
            name: "Mr Frimpong",
            company: "Prime company",
            role: "CEO",
            message: "Exceptional attention to detail and outstanding communication throughout the project. They delivered beyond our expectations and stayed within budget.",
            image: "https://imglink.io/i/5387ec7d-721b-420c-95c3-e529e91444c4.jpg",
            rating: 5,
        },
        {
            id: 3,
            name: "Ms Frema",
            company: "Frema wash",
            role: "Manager",
            message: "The expertise and professionalism demonstrated by this team is unmatched. They not only built our platform but also provided valuable strategic guidance.",
            image: "https://imglink.io/i/d9294dc2-88a9-47fb-8409-d5fad68ee9ee.jpg",
            rating: 5,
        },
        {
            id: 4,
            name: "Mrs Gifty",
            company: "Gift Restaurant",
            role: "Operations Manager",
            message: "Their development approach is methodical and results-driven. We saw measurable improvements in our sales and customersatisfaction.",
            image: "https://imglink.io/i/ad2737e7-811b-41b1-8e48-83ca17bc81e8.jpg",
            rating: 5,
        },
        {
            id: 5,
            name: "Mama Jane",
            company: "Family Supermarket",
            role: "CTO",
            message: "Outstanding team of professionals. They understand complex requirements and translate them into elegant, scalable solutions. Highly recommended!",
            image: "https://imglink.io/i/9aea5ab1-786a-4171-ba9a-73a00d041a83.jpg",
            rating: 5,
        },
    ];

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const autoScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const maxScroll = scrollWidth - clientWidth;

            if (scrollLeft >= maxScroll - 10) {
                // Reset to beginning
                scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Scroll right
                scrollContainerRef.current.scrollBy({
                    left: 400,
                    behavior: "smooth",
                });
            }
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        container?.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        // Set up auto-scroll interval
        if (isAutoScrolling) {
            autoScrollIntervalRef.current = setInterval(autoScroll, 5000); // Scroll every 5 seconds
        }

        return () => {
            container?.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
            }
        };
    }, [isAutoScrolling]);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
        // Pause auto-scroll when user interacts
        setIsAutoScrolling(false);
        if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
        }
        // Resume auto-scroll after 10 seconds of inactivity
        setTimeout(() => setIsAutoScrolling(true), 10000);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
                        What Our <span className="text-primary">Clients Say</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover how we've helped businesses transform their digital presence and achieve remarkable results
                    </p>
                </div>

                <div className="relative">
                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {testimonials.map((testimonial) => (
                            <Card
                                key={testimonial.id}
                                className="flex-shrink-0 w-full sm:w-96 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
                            >
                                <CardContent className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                            />
                                            <div>
                                                <p className="font-semibold text-navy">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-primary text-primary"
                                            />
                                        ))}
                                    </div>

                                    {/* Message */}
                                    <p className="text-muted-foreground leading-relaxed italic">
                                        "{testimonial.message}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <p className="text-center text-sm text-muted-foreground mt-4">
                        Auto-scrolling testimonials • Swipe or use arrows to browse
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
