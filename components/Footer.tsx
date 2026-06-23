import Link from "next/link";
import { FOOTER, FOOTER_LINKS, SITE, UI } from "@/lib/constants";

interface FooterProps {
  lastUpdated?: string;
}

export default function Footer({ lastUpdated }: FooterProps) {
  const timestamp = lastUpdated ?? new Date().toISOString();

  return (
    <footer className="bg-dark-bg border-t border-border-green mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">{SITE.name}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{FOOTER.quickLinks}</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{FOOTER.technology}</h4>
            <span className="inline-block bg-primary-subtle text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-border-green">
              {FOOTER.isrBadge}
            </span>
            <p className="text-text-secondary text-xs mt-4">
              {FOOTER.dataSourcedFrom}{" "}
              <a
                href={FOOTER.dataSourceUrl}
                target="_blank"
                rel={UI.externalLinkRel}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {FOOTER.dataSourceName}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-green flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            {FOOTER.copyright(new Date().getFullYear())}
          </p>
          <p className="text-text-secondary text-xs font-mono">
            {FOOTER.lastUpdated(timestamp)}
          </p>
        </div>
      </div>
    </footer>
  );
}
