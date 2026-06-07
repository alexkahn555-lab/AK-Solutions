import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Wordmark */}
          <a href="#top" className="flex items-center gap-2.5 no-underline">
            <span className="h-4 w-4 flex-shrink-0 rounded bg-brand" />
            <span className="font-heading text-[15px] font-semibold tracking-tight text-slate-900">
              BRAND
            </span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-7">
            <a
              href="#how"
              className="hidden text-[14px] text-slate-500 transition-colors duration-150 hover:text-slate-900 md:block"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="hidden text-[14px] text-slate-500 transition-colors duration-150 hover:text-slate-900 md:block"
            >
              Pricing
            </a>
            <Button href="#book" variant="primary">
              Book a call
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
