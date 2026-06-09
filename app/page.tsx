import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

const services = [
  {
    name: "Work Automation",
    desc: "AI workflow automation for accounting, bookkeeping, and advisory firms.",
    href: "/work-automation",
  },
  {
    name: "Website Design",
    desc: "SEO website design for professional services firms.",
    href: "/website-design",
  },
  {
    name: "AI Receptionist",
    desc: "AI phone answering service for small business — 24/7, sounds human.",
    href: "/ai-receptionist",
  },
];

export const metadata: Metadata = {
  title: "AK Solutions | AI Automation & Workflow Setup for South Florida Firms",
  description: "AK Solutions configures and runs AI workflows for accounting, bookkeeping, title, and advisory firms in South Florida. Automate the repeat work. Stay in control.",
  openGraph: {
    title: "AK Solutions | AI Automation for South Florida Firms",
    description: "We configure and run AI workflows for accounting, bookkeeping, title, and advisory firms. Automate the repeat work. Stay in control.",
    url: "https://ak-solution.org",
    siteName: "AK Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Solutions | AI Automation for South Florida Firms",
    description: "We configure and run AI workflows for accounting, bookkeeping, title, and advisory firms in South Florida.",
  },
};

export default function Home() {
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
                <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-5xl">
                  Your firm runs on the same tasks every week. We automate the ones that don&rsquo;t need you.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mb-8 max-w-[44ch] text-lg leading-[1.7] text-slate-500">
                  We take the repetitive work off your plate for good — AI workflow automation for professional services firms in South Florida. Every decision that matters stays with you.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mb-5 flex flex-wrap gap-3">
                  <Button href="#booking" variant="primary">
                    Book a 20-minute call
                  </Button>
                </div>
              </Reveal>

            </div>
          </Container>
        </section>

        {/* ——— Services ——— */}
        <section className="bg-slate-50 py-10 md:py-12">
          <Container>
            <div className="grid grid-cols-1 gap-4 min-[760px]:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.name} delay={i * 80}>
                  <a
                    href={service.href}
                    className="group flex flex-col gap-2 rounded-[14px] border border-slate-100 bg-white p-7 shadow-card transition-shadow duration-200 ease-out hover:shadow-card-hover"
                  >
                    <p className="font-heading text-[15px] font-semibold tracking-tight text-slate-900">
                      {service.name}
                    </p>
                    <p className="flex-1 text-[14px] leading-[1.6] text-slate-500">{service.desc}</p>
                    <span className="mt-1 text-[13px] font-medium text-brand">
                      Learn more →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ——— Geo ——— */}
        <div className="bg-slate-50 py-6">
          <Container>
            <p className="text-center text-[13px] leading-[1.7] text-slate-400">
              Serving accounting firms, CPA practices, bookkeepers, title companies, law offices, and advisory firms across Miami, Fort Lauderdale, Boca Raton, and South Florida.
            </p>
          </Container>
        </div>

        {/* ——— Book ——— */}
        <section id="booking" className="bg-[#0B3B30] py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-[680px] text-center">
              <Reveal>
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-100">
                  Next step
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mx-auto mb-7 max-w-[16ch] font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl">
                  See if it fits your firm.
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <p className="mx-auto mb-10 max-w-[44ch] text-lg leading-[1.75] text-brand-100/80">
                  A 20-minute call. You tell us where your time goes, and we tell you straight
                  whether this helps. If it does, we&rsquo;ll scope it. If it doesn&rsquo;t,
                  we&rsquo;ll say so.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <Button href="#booking" variant="inverted">
                  Book a 20-minute call
                </Button>
              </Reveal>

              <div className="mx-auto mt-14 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
                <CalendlyEmbed />
              </div>

              <div className="mt-10 text-left">
                <p className="mb-4 text-sm text-brand-100/60">
                  For urgent inquiries, reach us directly.
                </p>
                <a
                  href="mailto:alex.kahn@ak-solution.org"
                  className="inline-flex items-center justify-center rounded-lg border border-brand px-6 py-3 text-[15px] font-medium leading-none tracking-[-0.01em] text-brand transition-all duration-[180ms] ease-out hover:bg-brand/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Email alex.kahn@ak-solution.org
                </a>
              </div>
            </div>
          </Container>
        </section>

      </main>

      {/* ——— Footer ——— */}
      <footer className="border-t border-slate-100 py-8">
        <Container>
          <div className="flex flex-col gap-1.5 font-mono text-xs text-slate-400 min-[600px]:flex-row min-[600px]:justify-between">
            <span>© 2026 AK Solutions · Miami, FL</span>
          </div>
        </Container>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "AK Solutions",
            "alternateName": "Kahn & Alvarez LLC",
            "url": "https://ak-solution.org",
            "email": "alex.kahn@ak-solution.org",
            "description": "AK Solutions configures and runs AI workflows, AI phone receptionists, and SEO websites for professional services firms in South Florida.",
            "areaServed": {
              "@type": "State",
              "name": "Florida",
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 25.7617,
                "longitude": -80.1918,
              },
              "geoRadius": "100000",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Workflow Automation",
                    "description": "AI workflow setup and management for accounting, bookkeeping, title, and advisory firms",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Phone Receptionist",
                    "description": "24/7 AI phone receptionist with neural voice synthesis for small professional services firms",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Design",
                    "description": "SEO-optimized website design for law firms, CPA firms, and advisory businesses",
                  },
                },
              ],
            },
          }),
        }}
      />

    </>
  );
}
