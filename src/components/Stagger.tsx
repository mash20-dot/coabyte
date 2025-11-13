import React, { useEffect, useRef, useState } from "react";

type StaggerProps = {
    children: React.ReactNode;
    className?: string;
    staggerMs?: number;
    rootMargin?: string;
    threshold?: number;
};

const Stagger: React.FC<StaggerProps> = ({
    children,
    className = "",
    staggerMs = 100,
    rootMargin = "0px",
    threshold = 0.15,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin, threshold }
        );

        obs.observe(el);

        return () => obs.disconnect();
    }, [rootMargin, threshold]);

    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = React.Children.toArray(children);

    return (
        <div ref={ref} className={className}>
            {items.map((child, index) => (
                <div
                    key={index}
                    style={{
                        transitionDelay: prefersReduced ? "0ms" : `${index * (staggerMs ?? 100)}ms`,
                    }}
                    className={`transform transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Stagger;
