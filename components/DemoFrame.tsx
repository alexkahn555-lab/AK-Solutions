export default function DemoFrame() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-slate-200 bg-surface-alt shadow-card aspect-[16/10]">
      {/* Top-left tag */}
      <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-slate-400">
        Demo
      </span>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
        <button
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          aria-label="Play demo video"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 translate-x-0.5"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <p className="font-heading text-base font-semibold text-slate-800 max-w-[22ch]">
          Watch a month-end close in 3 minutes
        </p>

        <p className="font-mono text-xs text-slate-400">[ demo video goes here ]</p>
      </div>
    </div>
  );
}
