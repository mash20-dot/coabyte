const OurWorks = () => {
    const vimeoId = "1136302954";

    return (
        <section className="py-24 bg-gradient-to-br from-background via-light-bg to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
                        One of Our <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        See our projects in action. This is a glimpse of the innovative solutions we deliver for our clients.
                    </p>
                </div>

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
                    <p className="text-center text-muted-foreground mt-6 text-sm">
                        Explore how we transform ideas into reality with cutting-edge technology and creative solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;
