import { LOADING } from "@/lib/constants";

export default function BlogCardSkeleton() {
  return (
    <div
      className="bg-card-bg border border-border-green rounded-xl overflow-hidden animate-pulse"
      role="status"
      aria-label={LOADING.card}
    >
      <div className="h-48 bg-[#1a1a1a]" />
      <div className="p-5 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-[#1a1a1a] rounded-full" />
          <div className="h-5 w-20 bg-[#1a1a1a] rounded-full" />
        </div>
        <div className="h-5 bg-[#1a1a1a] rounded w-3/4" />
        <div className="h-4 bg-[#1a1a1a] rounded w-full" />
        <div className="h-4 bg-[#1a1a1a] rounded w-2/3" />
        <div className="flex justify-between pt-2">
          <div className="h-3 bg-[#1a1a1a] rounded w-24" />
          <div className="h-3 bg-[#1a1a1a] rounded w-20" />
        </div>
      </div>
    </div>
  );
}
