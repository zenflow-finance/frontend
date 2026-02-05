export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-cloud bg-white/90 backdrop-blur">
      <div className="container-base flex h-20 items-center gap-6">
        <div className="flex min-w-[160px] items-center gap-3">
          <img src="/logo.svg" alt="Zenflow" className="h-9 w-9" />
          <div className="leading-tight">
            <p className="text-lg font-semibold text-ink">Zenflow</p>
            <p className="text-xs text-slate">Invest with clarity</p>
          </div>
        </div>

        <div className="hidden flex-1 items-center md:flex">
          <label className="flex w-full items-center gap-3 rounded-full border border-cloud bg-white px-4 py-2 text-sm text-slate shadow-soft">
            <span className="text-slate/70">Search for stocks or mutual funds…</span>
            <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-cloud">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-slate"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </span>
          </label>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="rounded-full border border-coral px-5 py-2 text-sm font-semibold text-coral transition hover:bg-coral/10">
            Login
          </button>
          <button className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
            Open Demat Account
          </button>
        </div>
      </div>
    </header>
  );
}
