import Footer from "@/components/Footer";
import { ABOUT } from "@/lib/constants";

export default function AboutPage() {
  const lastUpdated = new Date().toISOString();

  return (
    <>
      <section className="bg-dark-bg py-16 border-b border-border-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {ABOUT.titlePrefix}{" "}
            <span className="text-primary">{ABOUT.titleAccent}</span>
          </h1>
          <p className="text-text-secondary text-lg">{ABOUT.subtitle}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="bg-card-bg border border-border-green rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {ABOUT.mission.title}
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {ABOUT.mission.body}
          </p>
        </div>

        <div className="bg-card-bg border border-border-green rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {ABOUT.builtWith.title}
          </h2>
          <ul className="space-y-3 text-text-secondary">
            {ABOUT.builtWith.items.map((item) => (
              <li key={item.name} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">{item.name}</strong> —{" "}
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card-bg border border-border-green rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {ABOUT.isr.title}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {ABOUT.isr.routes.map((item) => (
              <div
                key={item.route}
                className="bg-primary-subtle border border-border-green rounded-lg p-4 text-center"
              >
                <p className="text-white font-semibold">{item.route}</p>
                <p className="text-primary text-2xl font-bold mt-1">
                  {item.time}
                </p>
                <p className="text-text-secondary text-xs mt-1">
                  {ABOUT.isr.revalidateLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lastUpdated={lastUpdated} />
    </>
  );
}

/*
 * STATIC PAGE — About (/about)
 *
 * This page is fully static with no external data fetching. It documents
 * the project's ISR strategy and technology stack. The footer timestamp
 * reflects the build/render time.
 */
