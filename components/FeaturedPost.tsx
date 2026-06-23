import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";
import { BLOG_DETAIL, FEATURED, ROUTES, UI } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {FEATURED.badge}
        </span>
        <h2 className="text-2xl font-bold text-white">{FEATURED.title}</h2>
      </div>

      <Link
        href={ROUTES.blogPost(post.id)}
        className="group block bg-card-bg border border-border-green rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {post.cover_image && (
            <div className="relative h-64 md:h-full min-h-[280px]">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          )}

          <div className="p-8 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tag_list.slice(0, FEATURED.maxTags).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-subtle text-primary border border-border-green"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors mb-3">
              {post.title}
            </h3>

            <p className="text-text-secondary mb-4 line-clamp-3">
              {post.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span className="text-primary font-medium">{post.user.name}</span>
              <span>{UI.separator}</span>
              <span>{formatDate(post.published_at)}</span>
              <span>{UI.separator}</span>
              <span>{BLOG_DETAIL.minRead(post.reading_time_minutes)}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
