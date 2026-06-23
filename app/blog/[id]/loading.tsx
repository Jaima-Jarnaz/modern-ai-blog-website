import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import { LOADING } from "@/lib/constants";

export default function BlogDetailLoading() {
  return (
    <div
      className="bg-dark-bg min-h-screen"
      role="status"
      aria-label={LOADING.blogDetail}
    >
      <div className="h-64 md:h-96 bg-[#1a1a1a] animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-[#1a1a1a] rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-[#1a1a1a] rounded-full animate-pulse" />
        </div>
        <div className="h-10 bg-[#1a1a1a] rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-[#1a1a1a] rounded w-1/2 animate-pulse" />
        <div className="space-y-3 pt-4">
          {Array.from({ length: LOADING.counts.detailParagraphs }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-[#1a1a1a] rounded animate-pulse"
              style={{ width: `${85 - i * 5}%` }}
            />
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-8 bg-[#1a1a1a] rounded w-48 mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: LOADING.counts.relatedCards }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
