"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import SearchBar from "@/components/SearchBar";
import TagFilter from "@/components/TagFilter";
import type { BlogPost } from "@/types/blog";
import { BLOG } from "@/lib/constants";
import { getAllTags } from "@/lib/utils";

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => getAllTags(posts), [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesTag =
        activeTag === null ||
        post.tag_list.some((tag) => tag.toLowerCase() === activeTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, search, activeTag]);

  return (
    <div className="space-y-8">
      <SearchBar value={search} onChange={setSearch} />

      <TagFilter tags={tags} activeTag={activeTag} onTagChange={setActiveTag} />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-text-secondary text-lg">{BLOG.noResultsTitle}</p>
          <p className="text-text-secondary text-sm mt-2">{BLOG.noResultsHint}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
