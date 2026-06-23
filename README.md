# AIBlog

A modern AI-themed blog built with **Next.js 14+ (App Router)** and **Incremental Static Regeneration (ISR)**. Articles are fetched in real time from the free [Dev.to API](https://developers.forem.com/api) — no API key required.

## Data source

All blog content comes from **Dev.to**, a developer community platform. We use their public REST API to pull AI-tagged articles written by real authors.

| Purpose | Endpoint | Used in |
|--------|----------|---------|
| List AI articles (20 posts) | `https://dev.to/api/articles?tag=ai&per_page=20` | Homepage, blog listing, related posts |
| Single article (full body) | `https://dev.to/api/articles/{id}` | Blog detail page |

Fetch logic lives in [`lib/api.ts`](./lib/api.ts).

### What we get from Dev.to

Each article includes:

- **Title & description** — card and page headings
- **Cover image** — hero and card thumbnails (hosted on `media.dev.to`, `media2.dev.to`, or AWS S3)
- **Tags** — filter chips and related-post matching
- **Author** — name, username, profile image, GitHub/Twitter/website links
- **Metadata** — publish date, reading time, reaction counts
- **Full article body** — HTML content on the detail page (`body_html`)

### API notes

- **Free & public** — no authentication or API key needed
- **Rate limits** — Dev.to applies fair-use limits; ISR caching reduces repeated calls
- **Tag normalization** — the list endpoint returns `tag_list` as an array; the single-post endpoint returns it as a comma-separated string. `lib/api.ts` normalizes both to a consistent `string[]`

### Image hosts

Cover images are loaded via `next/image`. Allowed remote hosts are configured in [`next.config.mjs`](./next.config.mjs):

- `media.dev.to`
- `media2.dev.to`
- `dev-to-uploads.s3.amazonaws.com`
- `dev-to-uploads.s3.us-east-2.amazonaws.com`
- `res.cloudinary.com`

## ISR (Incremental Static Regeneration)

Pages are statically generated at build time and revalidated in the background on a schedule:

| Route | Page `revalidate` | Fetch cache (`lib/api.ts`) |
|-------|-------------------|----------------------------|
| `/` (homepage) | 60 seconds | 120 seconds |
| `/blog` (listing) | 120 seconds | 120 seconds |
| `/blog/[id]` (detail) | 300 seconds | 300 seconds |

- **Build time:** `generateStaticParams()` pre-renders the top 10 posts under `/blog/[id]`
- **On demand:** other post IDs are generated on first visit, then cached
- **Verify ISR:** each page footer shows `Last updated: {ISO timestamp}` — it changes after revalidation

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, featured post banner, latest article grid |
| `/blog` | Search bar, tag filter, full post grid |
| `/blog/[id]` | Full article, author card, tags, related posts |
| `/about` | Static page about the project and ISR strategy |

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev      # http://localhost:3000
```

### Production

```bash
npm run build
npm start
```

> **Note:** Restart the dev server after changing `next.config.mjs` (e.g. image hostnames).

## Project structure

```
app/
  page.tsx                 # Homepage (ISR: 60s)
  layout.tsx               # Root layout + Navbar
  about/page.tsx           # About page
  blog/
    page.tsx               # Blog listing (ISR: 120s)
    loading.tsx            # Skeleton loader
    [id]/
      page.tsx             # Blog detail (ISR: 300s)
      loading.tsx
      error.tsx

components/
  Navbar.tsx               # Navigation
  Footer.tsx               # Footer + ISR timestamp
  HeroSection.tsx          # Homepage hero
  FeaturedPost.tsx         # Featured article banner
  BlogCard.tsx             # Article card
  BlogCardSkeleton.tsx     # Loading skeleton
  BlogListClient.tsx       # Search + tag filter (client)
  SearchBar.tsx
  TagFilter.tsx
  AuthorCard.tsx

lib/
  api.ts                   # Dev.to fetch functions + ISR config
  constants.ts             # All static UI copy, routes, API URLs, and ISR values
  utils.ts                 # formatDate, getAllTags

types/
  blog.ts                  # TypeScript types for Dev.to responses
```

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router, ISR, `next/image`
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — custom green theme (`#2ecc71`)
- [Dev.to API](https://dev.to/api) — article data

## Color theme

| Token | Value | Usage |
|-------|-------|-------|
| Primary Green | `#2ecc71` | Logo, accents, buttons, author names |
| Dark Background | `#0a0a0a` | Page background, navbar, footer |
| Card Background | `#111111` | Blog cards, inputs |
| Subtle Green Tint | `#2ecc7115` | Tag backgrounds, hover states |
| Border | `#2ecc7130` | Card and section borders |
| Text Secondary | `#a0a0a0` | Dates, descriptions, muted text |

## License

This project is for educational and demonstration purposes. Article content belongs to the respective Dev.to authors.
