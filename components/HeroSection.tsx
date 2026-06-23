import Link from "next/link";
import { HERO, ROUTES } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative bg-dark-bg py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-dark rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {HERO.titlePrefix}{" "}
          <span className="text-gradient">{HERO.titleHighlight}</span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {HERO.subtitle}
        </p>
        <Link
          href={ROUTES.blog}
          className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {HERO.cta}
        </Link>
      </div>
    </section>
  );
}
