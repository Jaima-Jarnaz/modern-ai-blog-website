import BlogListClient from "@/components/BlogListClient";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/api";
import { BLOG, ISR } from "@/lib/constants";

export const revalidate = ISR.blog;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const lastUpdated = new Date().toISOString();

  return (
    <>
      <section className="bg-dark-bg py-12 border-b border-border-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {BLOG.titlePrefix}{" "}
            <span className="text-primary">{BLOG.titleAccent}</span>
          </h1>
          <p className="text-text-secondary max-w-2xl">{BLOG.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogListClient posts={posts} />
      </section>

      <Footer lastUpdated={lastUpdated} />
    </>
  );
}

/*
 * ISR CONFIGURATION — Blog Listing (/blog)
 *
 * revalidate = 120 regenerates this page every 2 minutes. The post list is
 * fetched server-side via getAllPosts() with its own 120s fetch cache.
 *
 * Client-side search and tag filtering (BlogListClient) operate on the
 * statically cached post array — no additional API calls needed.
 *
 * Verify ISR: the footer timestamp updates every ~120 seconds on revisit.
 */
