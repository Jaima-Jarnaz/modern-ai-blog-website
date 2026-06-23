import type { BlogPost, BlogPostRaw } from "@/types/blog";
import { API, ISR } from "@/lib/constants";

export { formatDate } from "./utils";

function normalizePost(post: BlogPostRaw): BlogPost {
  const tagList = Array.isArray(post.tag_list)
    ? post.tag_list
    : Array.isArray(post.tags)
      ? post.tags
      : typeof post.tag_list === "string"
        ? post.tag_list.split(",").map((t) => t.trim()).filter(Boolean)
        : typeof post.tags === "string"
          ? post.tags.split(",").map((t) => t.trim()).filter(Boolean)
          : [];

  return {
    ...post,
    tag_list: tagList,
    tags: tagList.join(", "),
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const res = await fetch(API.devtoListUrl, {
    next: { revalidate: ISR.fetchPosts },
  });
  if (!res.ok) throw new Error(API.errors.fetchPosts);
  const posts: BlogPostRaw[] = await res.json();
  return posts.map(normalizePost);
}

export async function getPostById(id: string): Promise<BlogPost> {
  const res = await fetch(API.devtoPostUrl(id), {
    next: { revalidate: ISR.fetchPost },
  });
  if (!res.ok) throw new Error(API.errors.postNotFound);
  const post: BlogPostRaw = await res.json();
  return normalizePost(post);
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts[0] ?? null;
}

export async function getRelatedPosts(
  currentId: number,
  tags: string[]
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts
    .filter((post) => post.id !== currentId)
    .filter((post) =>
      post.tag_list.some((tag) => tags.includes(tag.toLowerCase()))
    )
    .slice(0, ISR.relatedPostsCount);
}
