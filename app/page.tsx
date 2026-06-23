import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts, getFeaturedPost } from "@/lib/api";
import { HOME, ISR, PAGINATION, ROUTES } from "@/lib/constants";

export const revalidate = ISR.home;

export default async function HomePage() {
  const [posts, featured] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
  ]);

  const { start, end } = featured
    ? PAGINATION.homeGridWithFeatured
    : PAGINATION.homeGridWithoutFeatured;
  const gridPosts = posts.slice(start, end);
  const lastUpdated = new Date().toISOString();

  return (
    <>
      <HeroSection />

      {featured && <FeaturedPost post={featured} />}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">{HOME.latestArticles}</h2>
          <Link
            href={ROUTES.blog}
            className="text-primary hover:text-primary-dark transition-colors text-sm font-medium"
          >
            {HOME.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Footer lastUpdated={lastUpdated} />
    </>
  );
}

/*
 * ISR CONFIGURATION — Homepage (/)
 *
 * revalidate = 60 means this page is statically generated at build time
 * and automatically re-generated in the background every 60 seconds when
 * a new request comes in after the cache has expired.
 *
 * The fetch() calls in lib/api.ts also use next: { revalidate: N } to
 * cache API responses independently. This two-layer caching ensures fast
 * page loads while keeping content reasonably fresh.
 *
 * Verify ISR: check the "Last updated" timestamp in the footer — it changes
 * on each revalidation cycle.
 */
