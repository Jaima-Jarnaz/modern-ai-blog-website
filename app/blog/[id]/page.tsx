import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AuthorCard from "@/components/AuthorCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import {
  getAllPosts,
  getPostById,
  getRelatedPosts,
} from "@/lib/api";
import {
  BLOG_DETAIL,
  ISR,
  METADATA,
  POST_TITLE,
  ROUTES,
  UI,
} from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const revalidate = ISR.blogDetail;

interface BlogDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts
    .slice(0, ISR.staticParamsCount)
    .map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  try {
    const post = await getPostById(params.id);
    return {
      title: POST_TITLE(post.title),
      description: post.description,
    };
  } catch {
    return { title: METADATA.postNotFoundTitle };
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  let post;
  try {
    post = await getPostById(params.id);
  } catch {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(
    post.id,
    post.tag_list.map((t) => t.toLowerCase())
  );
  const lastUpdated = new Date().toISOString();

  return (
    <>
      <article className="bg-dark-bg">
        {post.cover_image && (
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tag_list.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-subtle text-primary border border-border-green"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-text-secondary mb-8 pb-8 border-b border-border-green">
            <span className="text-primary font-medium">{post.user.name}</span>
            <span>{UI.separator}</span>
            <span>{formatDate(post.published_at)}</span>
            <span>{UI.separator}</span>
            <span>{BLOG_DETAIL.minRead(post.reading_time_minutes)}</span>
          </div>

          {post.body_html && (
            <div
              className="article-body prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />
          )}

          <div className="mt-12">
            <AuthorCard author={post.user} />
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border-green">
          <h2 className="text-2xl font-bold text-white mb-8">
            {BLOG_DETAIL.relatedArticles}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <BlogCard key={related.id} post={related} />
            ))}
          </div>
        </section>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link
          href={ROUTES.blog}
          className="inline-block bg-primary text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {BLOG_DETAIL.backToBlog}
        </Link>
      </div>

      <Footer lastUpdated={lastUpdated} />
    </>
  );
}

/*
 * ISR CONFIGURATION — Blog Detail (/blog/[id])
 *
 * revalidate = 300 regenerates individual post pages every 5 minutes.
 * generateStaticParams() pre-renders the top 10 posts at build time so
 * they are immediately available as static HTML. Other post IDs are
 * generated on-demand (ISR) when first requested.
 *
 * getPostById() uses fetch with next: { revalidate: 300 } for API caching.
 *
 * Verify ISR: footer timestamp updates on each 300s revalidation cycle.
 */
