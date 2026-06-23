import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";
import { BLOG_CARD, BLOG_DETAIL, ROUTES, UI } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const tags = post.tag_list.slice(0, BLOG_CARD.maxTags);
  const postUrl = ROUTES.blogPost(post.id);

  return (
    <article className="group bg-card-bg border border-border-green rounded-xl overflow-hidden transition-all duration-300 hover:border-primary">
      {post.cover_image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-subtle text-primary border border-border-green"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
          <Link href={postUrl}>{post.title}</Link>
        </h3>

        <p className="text-text-secondary text-sm line-clamp-2 mb-4">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center gap-3">
            <span>{formatDate(post.published_at)}</span>
            <span>{UI.separator}</span>
            <span>{BLOG_DETAIL.minRead(post.reading_time_minutes)}</span>
          </div>
          <Link
            href={postUrl}
            className="text-primary font-medium hover:text-primary-dark transition-colors"
          >
            {BLOG_CARD.readMore}
          </Link>
        </div>
      </div>
    </article>
  );
}
