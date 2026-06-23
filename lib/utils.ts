import type { BlogPost } from "@/types/blog";
import { DATE } from "@/lib/constants";

export function getAllTags(posts: BlogPost[]): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tag_list.forEach((tag) => tagSet.add(tag.toLowerCase()));
  });
  return Array.from(tagSet).sort();
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString(DATE.locale, DATE.options);
}
