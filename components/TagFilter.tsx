"use client";

import { BLOG } from "@/lib/constants";

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({
  tags,
  activeTag,
  onTagChange,
}: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onTagChange(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
          activeTag === null
            ? "bg-primary text-black border-primary"
            : "bg-card-bg text-text-secondary border-border-green hover:bg-primary-subtle hover:text-primary"
        }`}
      >
        {BLOG.filterAll}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onTagChange(tag === activeTag ? null : tag)}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all capitalize ${
            activeTag === tag
              ? "bg-primary text-black border-primary"
              : "bg-card-bg text-text-secondary border-border-green hover:bg-primary-subtle hover:text-primary"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
