export const SITE = {
  name: "AIBlog",
  namePrefix: "AI",
  nameAccent: "Blog",
  tagline:
    "Your daily source for AI insights, tutorials, and the latest developments in artificial intelligence.",
} as const;

export const ROUTES = {
  home: "/",
  blog: "/blog",
  about: "/about",
  blogPost: (id: string | number) => `/blog/${id}`,
} as const;

export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.about, label: "About" },
] as const;

export const FOOTER_LINKS = NAV_LINKS;

export const LAYOUT = {
  lang: "en",
} as const;

export const METADATA = {
  title: "AIBlog — Explore the Future of Artificial Intelligence",
  description:
    "A modern AI-themed blog powered by Next.js ISR, featuring the latest articles on artificial intelligence, machine learning, and more.",
  titleSuffix: " — AIBlog",
  postNotFoundTitle: "Post Not Found — AIBlog",
} as const;

export const HERO = {
  titlePrefix: "Explore the Future of",
  titleHighlight: "Artificial Intelligence",
  subtitle:
    "Stay ahead with curated AI articles, tutorials, and insights from the developer community. Powered by real-time data with Incremental Static Regeneration.",
  cta: "Browse All Articles",
} as const;

export const HOME = {
  latestArticles: "Latest Articles",
  viewAll: "View All →",
} as const;

export const BLOG = {
  titlePrefix: "AI",
  titleAccent: "Blog",
  description:
    "Browse our collection of AI articles. Search by keyword or filter by tags to find exactly what you're looking for.",
  noResultsTitle: "No articles found.",
  noResultsHint: "Try adjusting your search or filter.",
  searchPlaceholder: "Search articles...",
  filterAll: "All",
} as const;

export const BLOG_DETAIL = {
  relatedArticles: "Related Articles",
  backToBlog: "← Back to Blog",
  minRead: (minutes: number) => `${minutes} min read`,
} as const;

export const BLOG_CARD = {
  readMore: "Read More →",
  maxTags: 3,
} as const;

export const FEATURED = {
  badge: "Featured",
  title: "Top Story",
  maxTags: 4,
} as const;

export const ABOUT = {
  titlePrefix: "About",
  titleAccent: "AIBlog",
  subtitle:
    "A modern AI-themed blog built to showcase Next.js Incremental Static Regeneration.",
  mission: {
    title: "Our Mission",
    body: "AIBlog curates the best artificial intelligence articles from the Dev.to community, delivering them through a fast, modern reading experience. We believe AI knowledge should be accessible to everyone, and our platform makes it easy to discover, search, and read the latest insights.",
  },
  builtWith: {
    title: "Built With",
    items: [
      {
        name: "Next.js 14+",
        description: "App Router with Incremental Static Regeneration",
      },
      {
        name: "Dev.to API",
        description: "Free, real AI content with no API key required",
      },
      {
        name: "Tailwind CSS",
        description: "Custom green-themed design system",
      },
      {
        name: "TypeScript",
        description: "End-to-end type safety",
      },
    ],
  },
  isr: {
    title: "ISR Strategy",
    revalidateLabel: "revalidate",
    routes: [
      { route: "Homepage", time: "60s" },
      { route: "Blog List", time: "120s" },
      { route: "Blog Detail", time: "300s" },
    ],
  },
} as const;

export const FOOTER = {
  quickLinks: "Quick Links",
  technology: "Technology",
  isrBadge: "Built with Next.js ISR",
  dataSourcedFrom: "Data sourced from",
  dataSourceName: "Dev.to",
  dataSourceUrl: "https://dev.to",
  lastUpdated: (timestamp: string) => `Last updated: ${timestamp}`,
  copyright: (year: number) =>
    `© ${year} ${SITE.name}. All rights reserved.`,
} as const;

export const AUTHOR = {
  github: "GitHub",
  twitter: "Twitter",
  website: "Website",
  username: (name: string) => `@${name}`,
  githubUrl: (username: string) => `https://github.com/${username}`,
  twitterUrl: (username: string) => `https://twitter.com/${username}`,
} as const;

export const NOT_FOUND = {
  code: "404",
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  cta: "Go Home",
} as const;

export const ERROR = {
  title: "Something went wrong",
  fallbackMessage: "Failed to load this article. Please try again.",
  retry: "Try Again",
} as const;

export const LOADING = {
  blog: "Loading blog articles...",
  blogDetail: "Loading article...",
  card: "Loading article card...",
  counts: {
    blogTags: 6,
    blogCards: 6,
    detailParagraphs: 8,
    relatedCards: 3,
  },
} as const;

export const A11Y = {
  toggleMenu: "Toggle menu",
} as const;

export const UI = {
  separator: "·",
  externalLinkRel: "noopener noreferrer",
} as const;

export const DATE = {
  locale: "en-US",
  options: {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const,
} as const;

export const ISR = {
  home: 60,
  blog: 120,
  blogDetail: 300,
  fetchPosts: 120,
  fetchPost: 300,
  staticParamsCount: 10,
  relatedPostsCount: 3,
} as const;

export const PAGINATION = {
  homeGridWithFeatured: { start: 1, end: 7 },
  homeGridWithoutFeatured: { start: 0, end: 6 },
} as const;

export const API = {
  devtoListUrl: "https://dev.to/api/articles?tag=ai&per_page=20",
  devtoPostUrl: (id: string) => `https://dev.to/api/articles/${id}`,
  errors: {
    fetchPosts: "Failed to fetch posts",
    postNotFound: "Post not found",
  },
} as const;

export const POST_TITLE = (title: string) => `${title}${METADATA.titleSuffix}`;
