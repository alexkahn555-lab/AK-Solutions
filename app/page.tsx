import Nav from "@/components/Nav";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

/* ─── shared card class strings ─────────────────────────────────── */
const cardBase =
  "h-full rounded-[14px] border border-slate-100 bg-white shadow-card " +
  "p-7 sm:p-8 " +
  "transition-shadow duration-200 ease-out group-hover:shadow-card-hover";

const cardPricingBase =
  "h-full rounded-[14px] border border-slate-100 bg-white shadow-card " +
  "p-8 sm:p-10 " +
  "transition-shadow duration-200 ease-out group-hover:shadow-card-hover";

/* ─── data ───────────────────────────────────────────────────────── */
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
    body: "Agreements, leases, and engagement letters read for the terms that matter and the things that don't belong. A first pass, flagged for you, before you sign or send.",
  },
  {
    title: "New clients brought on without the chase",
    body: "A new client's paperwork pulled together, sorted, and checked against what's still missing. Less back-and-forth tracking down the documents you need.",
  },
];

const trustCards = [
  {
    label: "// 01",
    title: "Not used to train AI",
    body: "We run this on Claude Team, where your files and conversations are never used to train any model. It's in the contract.",
  },
  {
    label: "// 02",
    title: "You approve everything",
    body: "Nothing gets sent, posted, paid, or filed on its own. A person signs off on anything that touches money or a client.",
  },
  {
    label: "// 03",
    title: "Clients kept separate",
    body: "Each client's files stay walled off from the rest. Set up that way from day one.",
  },
];

const steps = [
  {
    label: "STEP 01",
    title: "We find what's eating your time",
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

const serviceCards = [
  {
    title: "AI phone receptionist",
    body: "Calls that get missed or come in after hours get answered, not lost. It takes messages, answers common questions, and passes the urgent ones to you. Every missed call is a client you almost lost.",
    price: "$500 setup + $350/mo",
  },
  {
    title: "Website development",
    body: "A clean, fast site that brings in work. Take it and run it yourself, or keep us on to host it and handle updates so you never touch a dashboard.",
    price: "$300 one-time",
    priceAlt: "or $300 + $50/mo (hosting & updates)",
  },
];

/* ─── page ───────────────────────────────────────────────────────── */
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
                <p className="mb-8 max-w-[36ch] text-lg leading-[1.7] text-slate-500">
                  We take the repetitive work off your plate for good — every decision that matters stays with you.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mb-5 flex flex-wrap gap-3">
                  <Button href="#book" variant="primary">
                    Book a 20-minute call
                  </Button>
                  <Button href="#how" variant="secondary">
                    See how it works
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <p className="font-mono text-xs text-slate-400">
                  For firms that run on documents and deadlines. Accounting, bookkeeping, title,
                  legal, and advisory.
                </p>
              </Reveal>

            </div>
          </Container>
        </section>

        {/* ——— Why ——— */}
        <section id="why" className="bg-slate-900 py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                A fair question
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mb-10 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
                Why pay someone to set up AI?
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-10 min-[760px]:grid-cols-2 lg:gap-16">
              <Reveal delay={160}>
                <p className="text-lg leading-[1.75] text-slate-300">
                  AI tools are everywhere now, and most of them are generic. Pointed at your firm
                  with no setup, they give vague answers that don&rsquo;t fit how you work, so they
                  end up unused. The value isn&rsquo;t the tool. It&rsquo;s setting it up to do your
                  actual work, correctly.
                </p>
              </Reveal>

              <Reveal delay={230}>
                <p className="text-lg leading-[1.75] text-slate-300">
                  Setting it up around your firm is the part that takes real work. Your files, your
                  formats, your process, built in so the output is something you&rsquo;d actually
                  send. Plus locking it down so your client data stays private. That&rsquo;s the
                  whole job.
                </p>
              </Reveal>
            </div>
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
        <section id="outcomes" className="bg-surface-alt py-20 md:py-28">
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

        {/* ——— Approach ——— */}
        <section id="approach" className="bg-white py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-[680px] text-center">
              <Reveal>
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  How we work
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mb-8 font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl">
                  We care whether the output is actually good.
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <p className="mb-10 text-lg leading-[1.8] text-slate-500">
                  Most AI setups stop at &ldquo;it runs.&rdquo; We don&rsquo;t. The difference
                  between a tool that looks good in a demo and one you&rsquo;d actually rely on is
                  in the details: whether the numbers are right, whether the wording fits, whether
                  it caught the thing that matters. We set it up, test it on your real work, and
                  tune it until the output is something you&rsquo;d put your name on.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <p className="font-heading text-[22px] font-semibold leading-snug tracking-tight text-slate-900">
                  You stay in control of every decision. We just make sure the work it hands you is
                  worth using.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ——— Trust ——— */}
        <section id="trust" className="bg-surface-alt py-20 md:py-28">
          <Container>
            <div className="mb-10">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  Your data stays yours
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
                  Your clients&rsquo; data stays private.
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[760px]:grid-cols-3">
              {trustCards.map((card, i) => (
                <Reveal key={card.label} delay={i * 80} className="group">
                  <div className={cardBase}>
                    <p className="mb-3 font-mono text-[11px] tracking-[0.12em] text-brand">
                      {card.label}
                    </p>
                    <p className="mb-2 font-heading text-[15px] font-semibold tracking-tight text-slate-900">
                      {card.title}
                    </p>
                    <p className="text-[15px] leading-[1.7] text-slate-500">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ——— Services ——— */}
        <section id="services" className="bg-white py-10 md:py-14">
          <Container>
            <div className="mb-8">
              <Reveal>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                  More ways we help
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
                  Beyond workflows.
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[760px]:grid-cols-2">
              {serviceCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 80} className="group">
                  <div className={`${cardBase} flex flex-col`}>
                    <h3 className="mb-3 font-heading text-base font-semibold tracking-tight text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mb-6 flex-1 text-[15px] leading-[1.7] text-slate-500">{card.body}</p>
                    <div className="mt-auto">
                      <p className="font-mono text-sm text-brand">{card.price}</p>
                      {"priceAlt" in card && card.priceAlt && (
                        <p className="mt-1 font-mono text-sm text-brand">{card.priceAlt}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ——— Pricing ——— */}
        <section id="pricing" className="bg-surface-alt py-20 md:py-28">
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

              {/* Card 1 — Setup */}
              <Reveal className="group">
                <div className={cardPricingBase}>
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400">
                    Setup
                  </p>
                  <div className="mb-3 flex items-baseline gap-2.5">
                    <span className="font-heading text-[44px] font-semibold leading-none tracking-[-0.03em] text-slate-900">
                      $1,200
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

              {/* Card 2 — Setup + Support (featured) */}
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
                      $600
                    </span>
                    <span className="font-mono text-sm text-white/60">+ $350/mo</span>
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

        {/* ——— Book ——— */}
        <section id="book" className="bg-[#0B3B30] py-20 md:py-28">
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
                <Button href="#book" variant="inverted">
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

    </>
  );
}
