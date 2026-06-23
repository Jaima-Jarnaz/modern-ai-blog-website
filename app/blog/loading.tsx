import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import { LOADING } from "@/lib/constants";

export default function BlogLoading() {
  return (
    <div
      className="bg-dark-bg min-h-screen"
      role="status"
      aria-label={LOADING.blog}
    >
      <section className="py-12 border-b border-border-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 bg-[#1a1a1a] rounded w-48 mb-3 animate-pulse" />
          <div className="h-5 bg-[#1a1a1a] rounded w-96 animate-pulse" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="h-12 bg-[#1a1a1a] rounded-lg animate-pulse" />
        <div className="flex gap-2">
          {Array.from({ length: LOADING.counts.blogTags }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-20 bg-[#1a1a1a] rounded-lg animate-pulse"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: LOADING.counts.blogCards }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
