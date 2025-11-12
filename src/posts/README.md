# Writing posts

This folder is where you publish blog posts by adding files — no backend required.

Workflow (simple, repo-driven):

1. Create a new file in `src/posts/` named: `YYYY-MM-DD-your-slug.tsx` (for example `2025-11-20-launching-new-feature.tsx`).
2. Export a `meta` object and a default React component.

Example:

```ts
export const meta = {
  title: "My new feature",
  date: "2025-11-20",
  excerpt: "A short summary used on the blog listing",
  image: "/path-or-external-image.jpg",
  readTime: "4 min read",
  category: "Product",
};

const Post: React.FC = () => (
  <div>
    <p>Your post content in JSX here. Use regular HTML tags or React components.</p>
  </div>
);

export default Post;
```

Notes:
- The post `slug` is derived from the filename: `YYYY-MM-DD-your-slug.tsx` => `/blog/your-slug`.
- Keep content as JSX (React). If you'd rather author in Markdown, I can switch the setup to MDX or a markdown loader — say the word.
- After you push the new file to your repo, Netlify (or your static host) will rebuild and the post will be available in the listing and at `/blog/your-slug`.
- If you want a scaffold command to create a new post file with a template, tell me and I'll add `npm run new-post`.
