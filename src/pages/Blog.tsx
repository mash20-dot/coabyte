import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type PostModule = {
  default: React.ComponentType<any>;
  meta: {
    title: string;
    excerpt?: string;
    category?: string;
    date?: string;
    readTime?: string;
    image?: string;
    slug?: string;
  };
};

const Blog = () => {
  // Dynamically import post modules from src/posts — add a new .tsx file there to publish a post
  const modules = import.meta.glob<PostModule>("../posts/*.tsx", { eager: true });
  const blogPosts = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.tsx$/, "");
    return {
      slug,
      ...mod.meta,
    };
  })
    // sort by date if present (newest first)
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <Reveal>
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-5xl font-bold text-navy mb-6">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Insights, tutorials, and industry updates from our team of technology experts.
              </p>
            </section>

            {/* Blog Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-navy mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`} className="text-primary font-semibold flex items-center gap-2 group/btn">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
