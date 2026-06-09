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
    title: "Conversational, not scripted",
    body: "Powered by an LLM so it understands intent and responds naturally. Handles questions you didn't anticipate.",
  },
  {
    title: "Neural voice synthesis",
    body: "Advanced TTS produces a voice indistinguishable from a human receptionist. No robotic cadence, no canned phrases.",
  },
  {
    title: "Custom-trained on your business",
    body: "Learns your services, FAQs, staff names, and how you handle calls. Sounds like it's been there for years.",
  },
  {
    title: "24/7 with smart escalation",
    body: "Available around the clock. Knows when to take a message and when to patch someone through immediately.",
  },
];

export const metadata: Metadata = {
  title: "AI Phone Receptionist for Small Business | AK Solutions",
  description: "Never miss a call. Our AI receptionist answers 24/7, sounds like a real person, and routes urgent calls instantly. Built for law offices, CPA firms, and advisory firms.",
  openGraph: {
    title: "AI Phone Receptionist for Small Business | AK Solutions",
    description: "Never miss a call. Our AI receptionist answers 24/7, sounds like a real person, and routes urgent calls instantly.",
    url: "https://ak-solution.org/ai-receptionist",
    siteName: "AK Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Phone Receptionist for Small Business | AK Solutions",
    description: "Never miss a call. Our AI receptionist answers 24/7, sounds like a real person, and routes urgent calls instantly.",
  },
};

export default function AiReceptionist() {
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
                  AI Receptionist
                </p>
              </Reveal>
              <Reveal delay={160}>
                <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-5xl">
                  AI phone receptionist for small business &mdash; answers every call, sounds like a person.
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mb-4 max-w-[52ch] text-lg leading-[1.7] text-slate-500">
                  An AI answering service built on large language models and neural voice synthesis. Not a phone tree &mdash; a 24/7 virtual receptionist that handles calls the way a real person would, configured for your business.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mb-8 text-[13px] leading-[1.6] text-slate-400">
                  Built for law offices, CPA firms, title companies, and small professional services businesses across South Florida.
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

        {/* ——— Technology ——— */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="mb-10">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  The technology
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
                  Sounds human because it uses the same technology behind the best AI assistants.
                </h2>
              </Reveal>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-10 min-[760px]:grid-cols-2 lg:gap-16">
              <Reveal delay={160}>
                <p className="text-lg leading-[1.75] text-slate-500">
                  Most automated phone systems are phone trees with a voice skin. Ours is
                  different. The receptionist is powered by a large language model that
                  understands caller intent and responds conversationally &mdash; so it handles
                  the unexpected, not just the scripted.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <p className="text-lg leading-[1.75] text-slate-500">
                  The voice is generated by neural text-to-speech synthesis &mdash; advanced
                  models trained on natural human speech. No robotic cadence, no awkward pauses.
                  Callers routinely don&rsquo;t realize they&rsquo;re not speaking to a person.
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
                $800 setup + $350/mo
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

            <Reveal className="group">
              <div className="mx-auto max-w-[480px] rounded-[14px] border border-slate-100 bg-white shadow-card p-8 sm:p-10 transition-shadow duration-200 ease-out group-hover:shadow-card-hover">
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400">
                  Setup + Monthly
                </p>
                <div className="mb-3 flex items-baseline gap-2.5">
                  <span className="font-heading text-[44px] font-semibold leading-none tracking-[-0.03em] text-slate-900">
                    $1,200
                  </span>
                  <span className="font-mono text-sm text-slate-400">setup + $300/mo</span>
                </div>
                <p className="mb-8 text-[15px] leading-[1.7] text-slate-500">
                  Everything needed to answer every call, around the clock.
                </p>
                <ul className="divide-y divide-slate-50">
                  {[
                    "Custom-trained on your business",
                    "Neural voice synthesis",
                    "24/7 availability",
                    "Smart call escalation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 py-3 text-[15px] text-slate-600">
                      <span className="flex-shrink-0 font-semibold text-brand">&ndash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
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
                  Want to stop missing calls?
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
