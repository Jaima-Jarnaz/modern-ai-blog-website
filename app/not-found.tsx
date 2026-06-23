import Link from "next/link";
import { NOT_FOUND, ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="bg-dark-bg min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">{NOT_FOUND.code}</h1>
        <h2 className="text-2xl font-bold text-white mb-3">{NOT_FOUND.title}</h2>
        <p className="text-text-secondary mb-8">{NOT_FOUND.description}</p>
        <Link
          href={ROUTES.home}
          className="inline-block bg-primary text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {NOT_FOUND.cta}
        </Link>
      </div>
    </div>
  );
}
