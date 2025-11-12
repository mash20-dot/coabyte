import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type PostModule = {
    default: React.ComponentType<any>;
    meta: {
        title: string;
        date?: string;
        excerpt?: string;
        image?: string;
        readTime?: string;
        category?: string;
        slug?: string;
    };
};

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const modules = import.meta.glob<PostModule>("../posts/*.tsx", { eager: true });
    const matchEntry = Object.entries(modules).find(([path]) => path.endsWith(`${slug}.tsx`));

    if (!matchEntry) {
        return (
            <div className="container mx-auto py-20">
                <h2 className="text-2xl font-bold mb-4">Post not found</h2>
                <p className="mb-6">We couldn't find the blog post you're looking for.</p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-primary">
                    <ArrowLeft className="h-4 w-4" /> Back to blog
                </Link>
            </div>
        );
    }

    const [, mod] = matchEntry;
    const PostComponent = mod.default;
    const meta = mod.meta || {};

    return (
        <article className="container mx-auto py-20">
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{meta.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{meta.date}</span>
                    <span>•</span>
                    <span>{meta.readTime}</span>
                </div>
            </header>

            {meta.image && (
                <div className="mb-8">
                    <img src={meta.image} alt={meta.title} className="w-full h-72 object-cover rounded-md" />
                </div>
            )}

            <section className="prose max-w-none">
                <PostComponent />
            </section>

            <div className="mt-12">
                <Link to="/blog" className="inline-flex items-center gap-2 text-primary">
                    <ArrowLeft className="h-4 w-4" /> Back to blog
                </Link>
            </div>
        </article>
    );
};

export default BlogPost;
