"use client";

import { ERROR } from "@/lib/constants";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogDetailError({ error, reset }: ErrorProps) {
  return (
    <div className="bg-dark-bg min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-subtle border border-border-green flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">{ERROR.title}</h2>
        <p className="text-text-secondary mb-6">
          {error.message || ERROR.fallbackMessage}
        </p>

        <button
          type="button"
          onClick={reset}
          className="bg-primary text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {ERROR.retry}
        </button>
      </div>
    </div>
  );
}
