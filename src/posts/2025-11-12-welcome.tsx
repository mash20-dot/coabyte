import React from "react";

export const meta = {
    title: "Welcome to the Coabyte Blog",
    date: "2025-11-12",
    excerpt: "How we'll share product updates, engineering insights, and stories from our Ghana team.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=600&fit=crop",
    readTime: "3 min read",
    category: "Announcements",
};

const Post: React.FC = () => {
    return (
        <div>
            <p>
                Welcome to the Coabyte blog. This site uses a repo-driven blog workflow: to publish a new post,
                add a new file under <code>src/posts</code> in the same format as this example and push to your
                repository. Netlify (or your static host) will rebuild the site and the post will appear under
                <code>/blog</code>.
            </p>

            <h2>How to publish</h2>
            <ol>
                <li>Add a new file to <code>src/posts</code> named <code>YYYY-MM-DD-your-slug.tsx</code>.</li>
                <li>Export a <code>meta</code> object and a default React component that renders your content.</li>
                <li>Commit and push. After the site rebuilds your post will be available at <code>/blog/your-slug</code>.</li>
            </ol>

            <h2>Notes</h2>
            <ul>
                <li>Use the <code>meta</code> fields (title, date, excerpt, image, readTime, category) for listing.</li>
                <li>If you want to use Markdown instead of JSX we can switch to .mdx or a markdown loader—tell me if you prefer that.</li>
            </ul>

            <p>
                That's it — simple, no-backend publishing by adding files to the repo. If you want, I can add a small
                README and a script to scaffold new posts quickly.
            </p>
        </div>
    );
};

export default Post;
