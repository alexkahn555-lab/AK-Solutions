import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

const cardBase =
  "h-full rounded-[14px] border border-slate-100 bg-white shadow-card " +
  "p-7 sm:p-8 " +
  "transition-shadow duration-200 ease-out group-hover:shadow-card-hover";

const features = [
  {
    title: "On-page SEO architecture",
    body: "Keyword-mapped page hierarchy, title tags, meta descriptions, and structured data (JSON-LD) set up correctly from the start.",
  },
  {
    title: "Core Web Vitals optimized",
    body: "LCP, CLS, and INP tuned so Google scores the site as Good across all metrics — a direct ranking signal.",
  },
  {
    title: "Mobile-first, fully responsive",
    body: "Built to Google's mobile-first indexing standard. Works flawlessly on any screen size.",
  },
  {
    title: "Ongoing SEO & updates",
    body: "Monthly hosting plan includes content refreshes, link health checks, and performance monitoring.",
  },
];

export const metadata: Metadata = {
  title: "SEO Website Design for Professional Services Firms | AK Solutions",
  description: "We build fast, SEO-optimized websites for law firms, CPA firms, and advisory businesses in South Florida. Core Web Vitals optimized and built to rank from day one.",
  openGraph: {
    title: "SEO Website Design for Professional Services Firms | AK Solutions",
    description: "Fast, SEO-optimized websites for law firms, CPA firms, and advisory businesses in South Florida.",
    url: "https://ak-solution.org/website-design",
    siteName: "AK Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Website Design for Professional Services Firms | AK Solutions",
    description: "Fast, SEO-optimized websites for law firms, CPA firms, and advisory businesses in South Florida.",
  },
};

export default function WebsiteDesign() {
  return (
    <>
      <Nav />

      <main>

        {/* ——— Hero ——— */}
        <section
          id="top"
          className="relative bg-dot-grid pb-16 pt-14 md:pb-24 md:pt-24"
        >
          <Container>
            <div className="max-w-[640px]">
              <Reveal delay={80}>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  Website Design
                </p>
              </Reveal>
              <Reveal delay={160}>
                <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-5xl">
                  Most small business websites sit on the internet and do nothing. We build sites that rank on Google, load fast, and turn visitors into booked calls &mdash; built the right way from the ground up.
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mb-4 max-w-[52ch] text-lg leading-[1.7] text-slate-500">
                  We build fast, SEO-optimized websites for professional services firms in South Florida &mdash; built on a technical SEO foundation that earns traffic from day one.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mb-8 text-[13px] leading-[1.6] text-slate-400">
                  Built for any business that runs on documents, deadlines, and repeat work.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <Button href="/#booking" variant="primary">
                  Book a 20-minute call
                </Button>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ——— SEO ——— */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="mb-10">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  How we build
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
                  Built to rank on Google from day one.
                </h2>
              </Reveal>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-10 min-[760px]:grid-cols-2 lg:gap-16">
              <Reveal delay={160}>
                <p className="text-lg leading-[1.75] text-slate-500">
                  Every site is built on a technical SEO foundation &mdash; semantic HTML
                  structure, schema markup, XML sitemaps, and Core Web Vitals optimization
                  (LCP, CLS, INP) &mdash; giving it a structural ranking advantage before a
                  single piece of content is written.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <p className="text-lg leading-[1.75] text-slate-500">
                  Performance is built in, not bolted on. Next-gen image formats, CDN edge
                  delivery, lazy loading, and minimal JavaScript payloads mean fast load times
                  that Google rewards with higher rankings and visitors actually stay for.
                </p>
              </Reveal>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-4 min-[680px]:grid-cols-2">
              {features.map((card, i) => (
                <Reveal key={card.title} delay={i * 80} className="group">
                  <div className={cardBase}>
                    <h3 className="mb-3 font-heading text-[15px] font-semibold leading-snug tracking-tight text-slate-900">
                      <span className="mr-2 text-brand" aria-hidden="true">→</span>
                      {card.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-slate-500">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <p className="font-mono text-sm text-brand">
                $1,000 one-time &mdash; or $1,000 + $150/mo (hosting &amp; SEO updates)
              </p>
            </Reveal>
          </Container>
        </section>

        {/* ——— Pricing ——— */}
        <section className="bg-slate-50 py-20 md:py-28">
          <Container>
            <div className="mb-10">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  Pricing
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
                  Clear pricing. No &ldquo;request a quote.&rdquo;
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[760px]:grid-cols-2">

              <Reveal className="group">
                <div className="h-full rounded-[14px] border border-slate-100 bg-white shadow-card p-8 sm:p-10 transition-shadow duration-200 ease-out group-hover:shadow-card-hover">
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400">
                    One-time
                  </p>
                  <div className="mb-3 flex items-baseline gap-2.5">
                    <span className="font-heading text-[44px] font-semibold leading-none tracking-[-0.03em] text-slate-900">
                      $1,000
                    </span>
                  </div>
                  <p className="mb-8 text-[15px] leading-[1.7] text-slate-500">
                    A complete site, built and handed over ready to launch.
                  </p>
                  <ul className="divide-y divide-slate-50">
                    {[
                      "Full site design and build",
                      "SEO architecture included",
                      "Core Web Vitals optimized",
                      "Handed over ready to launch",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 py-3 text-[15px] text-slate-600">
                        <span className="flex-shrink-0 font-semibold text-brand">&ndash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={80} className="group">
                <div className="relative h-full rounded-[14px] bg-brand p-8 sm:p-10 transition-shadow duration-200 ease-out group-hover:shadow-card-teal">
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-100">
                    Hosted &amp; Maintained
                  </p>
                  <div className="mb-3 flex items-baseline gap-2.5">
                    <span className="font-heading text-[44px] font-semibold leading-none tracking-[-0.03em] text-white">
                      $1,000
                    </span>
                    <span className="font-mono text-sm text-white/60">+ $150/mo</span>
                  </div>
                  <p className="mb-8 text-[15px] leading-[1.7] text-white/75">
                    Everything in One-time, plus hosting, updates, and ongoing SEO.
                  </p>
                  <ul className="divide-y divide-white/10">
                    {[
                      "Everything in One-time",
                      "Hosting included",
                      "Monthly SEO updates",
                      "Performance monitoring",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 py-3 text-[15px] text-white/85">
                        <span className="flex-shrink-0 font-semibold text-white/50">&ndash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

            </div>
          </Container>
        </section>

        {/* ——— CTA ——— */}
        <section className="bg-[#0B3B30] py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-[560px] text-center">
              <Reveal>
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-100">
                  Next step
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mb-8 font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl">
                  Want a site that actually brings in work?
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <Button href="/#booking" variant="inverted">
                  Book a 20-minute call
                </Button>
              </Reveal>
            </div>
          </Container>
        </section>

      </main>

      {/* ——— Footer ——— */}
      <footer className="border-t border-slate-100 py-8">
        <Container>
          <div className="flex flex-col gap-1.5 font-mono text-xs text-slate-400 min-[600px]:flex-row min-[600px]:justify-between">
            <span>&copy; 2026 AK Solutions &middot; Miami, FL</span>
          </div>
        </Container>
      </footer>
    </>
  );
}
