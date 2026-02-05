export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-cloud bg-white shadow-sm">
      <div className="container-base flex h-20 items-center gap-6">
        <div className="flex min-w-[160px] items-center gap-3">
          <img src="/logo.svg" alt="Zenflow" className="h-9 w-9" />
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-wide text-ink">ZENFLOW</p>
            <p className="text-xs text-slate">Invest with clarity</p>
          </div>
        </div>

        <div className="hidden flex-1 items-center md:flex">
          <div className="flex w-full max-w-3xl items-center gap-3 rounded-2xl border border-cloud bg-white px-4 py-2 text-sm text-slate shadow-sm">
            <input
              type="text"
              placeholder="Search for stocks or mutual funds.."
              className="w-full bg-transparent text-sm text-ink placeholder:text-slate/70 focus:outline-none"
            />
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-coral text-coral">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
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
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="rounded-xl border border-coral px-5 py-2 text-sm font-semibold text-coral transition hover:bg-coral/10">
            Login
          </button>
          <button className="rounded-xl bg-coral px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
            Open Demat Account
          </button>
        </div>
      </div>
    </header>
  );
}
