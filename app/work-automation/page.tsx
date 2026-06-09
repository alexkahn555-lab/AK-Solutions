import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

const cardBase =
  "h-full rounded-[14px] border border-slate-100 bg-white shadow-card " +
  "p-7 sm:p-8 " +
  "transition-shadow duration-200 ease-out group-hover:shadow-card-hover";

const outcomes = [
  {
    title: "Your monthly close, drafted",
    body: "Transactions sorted, the numbers pulled together, this month lined up against last. Ready when you sit down.",
  },
  {
    title: "Invoices followed up for you",
    body: "Overdue accounts chased in your wording, lined up for you to approve and send. You stop rewriting the same email.",
  },
  {
    title: "Documents sorted and filed",
    body: "New files read, renamed to your system, and put where they belong. The pile that builds up all week, handled.",
  },
  {
    title: "Mistakes caught before they cost you",
    body: "Double payments, wrong categories, things that slipped through. Pulled out for review instead of buried in the file.",
  },
  {
    title: "Contracts and documents reviewed",
    body: "Agreements, leases, and engagement letters read for the terms that matter. A first pass, flagged for you, before you sign or send.",
  },
  {
    title: "New clients brought on without the chase",
    body: "A new client’s paperwork pulled together, sorted, and checked against what’s still missing. Less back-and-forth tracking down the documents you need.",
  },
];

const steps = [
  {
    label: "STEP 01",
    title: "We find what’s eating your time",
    body: "A short call. You tell us what you do over and over, and we pick the two or three tasks worth handing off.",
  },
  {
    label: "STEP 02",
    title: "We set it up around your firm",
    body: "Your files, your formats, your way of working, built in and tested on your real numbers. The output looks like your work, not a template.",
  },
  {
    label: "STEP 03",
    title: "You run it and approve it",
    body: "Nothing gets sent, posted, or paid without you. Claude does the work and flags what needs a look. You make the call.",
  },
];

export const metadata: Metadata = {
  title: "AI Workflow Automation for CPA & Accounting Firms | AK Solutions",
  description: "We set up and run AI workflows that automate bookkeeping tasks, invoice follow-ups, document filing, and monthly close for small professional services firms in South Florida.",
  openGraph: {
    title: "AI Workflow Automation for CPA & Accounting Firms | AK Solutions",
    description: "We set up and run AI workflows that automate bookkeeping tasks, invoice follow-ups, document filing, and monthly close.",
    url: "https://ak-solution.org/work-automation",
    siteName: "AK Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation for CPA & Accounting Firms | AK Solutions",
    description: "We set up and run AI workflows that automate bookkeeping tasks, invoice follow-ups, and monthly close for South Florida firms.",
  },
};

export default function WorkAutomation() {
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
                  Work Automation
                </p>
              </Reveal>
              <Reveal delay={160}>
                <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-5xl">
                  AI workflow automation for accounting and professional services firms.
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mb-4 max-w-[52ch] text-lg leading-[1.7] text-slate-500">
                  We configure and run AI workflows that automate bookkeeping tasks, invoice follow-ups, document filing, and monthly close &mdash; built around how your firm actually operates.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mb-8 text-[13px] leading-[1.6] text-slate-400">
                  Serving CPA firms, bookkeepers, title companies, law offices, and advisory firms in South Florida.
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

        {/* ——— Objection ——— */}
        <section className="bg-slate-900 py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                A fair question
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mb-10 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
                Why not just use ChatGPT or another AI tool?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-[680px] text-lg leading-[1.75] text-slate-300">
                AI tools are everywhere now, and most of them are generic. Pointed at your firm
                with no setup, they give vague answers that don&rsquo;t fit how you work &mdash; so
                they end up unused. The value isn&rsquo;t the tool. It&rsquo;s setting it up to do
                your actual work, correctly. Your files, your formats, your process, built in so
                the output is something you&rsquo;d actually send. Plus locking it down so your
                client data stays private. That&rsquo;s the whole job.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* ——— How it works ——— */}
        <section id="how" className="bg-white py-20 md:py-28">
          <Container>
            <div className="mb-10">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  How it works
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
                  Three steps. You&rsquo;re in control the whole time.
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 border-t-[1.5px] border-slate-900 min-[760px]:grid-cols-3">
              {steps.map((step, i) => (
                <Reveal
                  key={step.label}
                  delay={i * 80}
                  className={[
                    "pb-12 pt-10",
                    i === 0
                      ? "min-[760px]:pr-10"
                      : i === 1
                      ? "min-[760px]:px-10"
                      : "min-[760px]:pl-10",
                    i < 2
                      ? "border-b border-slate-100 min-[760px]:border-b-0 min-[760px]:border-r"
                      : "",
                  ].join(" ")}
                >
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-brand">
                    {step.label}
                  </p>
                  <h3 className="mb-3 font-heading text-xl font-semibold leading-snug tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="leading-[1.7] text-slate-500">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ——— Outcomes ——— */}
        <section className="bg-surface-alt py-20 md:py-28">
          <Container>
            <div className="mb-10">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  What it does
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
                  The repetitive work, done for you.
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[680px]:grid-cols-2">
              {outcomes.map((outcome, i) => (
                <Reveal key={outcome.title} delay={i * 80} className="group">
                  <div className={cardBase}>
                    <h3 className="mb-3 font-heading text-[15px] font-semibold leading-snug tracking-tight text-slate-900">
                      <span className="mr-2 text-brand" aria-hidden="true">→</span>
                      {outcome.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-slate-500">{outcome.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ——— Value ——— */}
        <section className="bg-slate-900 py-20 md:py-28">
          <Container>
            <div className="mb-10">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  What this is actually worth
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[760px]:grid-cols-3">
              {[
                {
                  stat: "5–10 hours",
                  body: "The average time a small firm spends per week on work that could be automated. That's 250–500 hours a year.",
                },
                {
                  stat: "One mistake",
                  body: "A single missed invoice, duplicate payment, or misfiled document can cost more than a month of our fee.",
                },
                {
                  stat: "Your time",
                  body: "You didn't build your firm to chase invoices and sort files. Every hour spent on repeat work is an hour not spent on clients.",
                },
              ].map((card, i) => (
                <Reveal key={card.stat} delay={i * 80}>
                  <div className="h-full rounded-[14px] border border-white/10 p-7 sm:p-8">
                    <p className="mb-3 font-heading text-2xl font-semibold tracking-tight text-white">
                      {card.stat}
                    </p>
                    <p className="text-[15px] leading-[1.7] text-slate-400">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <p className="mt-8 text-center font-mono text-xs text-slate-500">
                Most clients recover the setup cost within the first 60 days.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* ——— Pricing ——— */}
        <section className="bg-surface-alt py-20 md:py-28">
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
                    Setup
                  </p>
                  <div className="mb-3 flex items-baseline gap-2.5">
                    <span className="font-heading text-[44px] font-semibold leading-none tracking-[-0.03em] text-slate-900">
                      $2,000
                    </span>
                    <span className="font-mono text-sm text-slate-400">one-time</span>
                  </div>
                  <p className="mb-8 text-[15px] leading-[1.7] text-slate-500">
                    A full setup, configured and tested, handed over ready to use.
                  </p>
                  <ul className="divide-y divide-slate-50">
                    {[
                      "We find your best workflows",
                      "Full setup around your firm",
                      "Tested on your real files",
                      "Training and a simple guide",
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
                  <span className="absolute right-5 top-5 rounded-full bg-amber-100 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-amber-900">
                    Most firms pick this
                  </span>
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-100">
                    Setup + Support
                  </p>
                  <div className="mb-3 flex items-baseline gap-2.5">
                    <span className="font-heading text-[44px] font-semibold leading-none tracking-[-0.03em] text-white">
                      $1,500
                    </span>
                    <span className="font-mono text-sm text-white/60">+ $600/mo</span>
                  </div>
                  <p className="mb-8 text-[15px] leading-[1.7] text-white/75">
                    Everything in setup, plus we keep it tuned as your firm changes.
                  </p>
                  <ul className="divide-y divide-white/10">
                    {[
                      "Everything in Setup",
                      "Monthly tuning and check-ins",
                      "New workflows when you need them",
                      "Fixes when tools update",
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

            <Reveal delay={160}>
              <p className="mt-8 text-center font-mono text-xs text-slate-400">
                You keep your own Claude subscription (about $30 per user a month). No markup,
                no lock-in.
              </p>
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
                  Ready to hand off the repeat work?
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
