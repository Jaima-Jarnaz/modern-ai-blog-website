import Image from "next/image";
import type { BlogUser } from "@/types/blog";
import { AUTHOR, UI } from "@/lib/constants";

interface AuthorCardProps {
  author: BlogUser;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="bg-card-bg border border-border-green rounded-xl p-6">
      <div className="flex items-start gap-4">
        <Image
          src={author.profile_image_90}
          alt={author.name}
          width={72}
          height={72}
          className="rounded-full border-2 border-border-green"
        />
        <div>
          <h3 className="text-lg font-semibold text-primary">{author.name}</h3>
          <p className="text-text-secondary text-sm mb-3">
            {AUTHOR.username(author.username)}
          </p>
          <div className="flex gap-3">
            {author.github_username && (
              <a
                href={AUTHOR.githubUrl(author.github_username)}
                target="_blank"
                rel={UI.externalLinkRel}
                className="text-text-secondary hover:text-primary transition-colors text-sm"
              >
                {AUTHOR.github}
              </a>
            )}
            {author.twitter_username && (
              <a
                href={AUTHOR.twitterUrl(author.twitter_username)}
                target="_blank"
                rel={UI.externalLinkRel}
                className="text-text-secondary hover:text-primary transition-colors text-sm"
              >
                {AUTHOR.twitter}
              </a>
            )}
            {author.website_url && (
              <a
                href={author.website_url}
                target="_blank"
                rel={UI.externalLinkRel}
                className="text-text-secondary hover:text-primary transition-colors text-sm"
              >
                {AUTHOR.website}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
