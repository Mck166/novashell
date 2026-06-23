function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            Nova<span className="text-red-500">Shell</span>
          </a>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#wholesale" className="transition hover:text-white">
              Wholesale
            </a>
            <a href="#events" className="transition hover:text-white">
              Markets
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-slate-950 to-slate-950" />
        <div className="relative max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-400">
            Calgary &amp; Surrounding Areas
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Fresh Live Lobster in{" "}
            <span className="text-red-500">Calgary</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-400">
            NovaShell brings premium live Atlantic lobster to Calgary and the
            surrounding area. Pick up at our location — we&apos;ll announce
            details on Friday, June 26th.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-lg border border-red-500/30 bg-red-950/40 px-6 py-4">
            <p className="text-sm font-medium text-red-300">
              Location announcement coming Friday, June 26th
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#wholesale"
              className="rounded-lg bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Wholesale Inquiries
            </a>
            <a
              href="#events"
              className="rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Book Us at Your Market
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">🦞</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Live &amp; Fresh
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Premium live Atlantic lobster, handled with care from source to
                your pickup.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">📍</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Pick Up at Our Location
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Come to us — location details announced Friday, June 26th.
                Serving Calgary and surrounding communities.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🤝</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Trusted Partner
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Reliable supply for restaurants, retailers, and community markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale */}
      <section id="wholesale" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 sm:p-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-400">
              Wholesale
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Supply for Restaurants &amp; Retailers
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-400">
              Looking for a consistent, high-quality live lobster supplier? NovaShell
              works with restaurants, seafood markets, and food service businesses
              across Calgary and the surrounding area. Pick up at our location —
              get in touch to discuss pricing and volume.
            </p>
            <a
              href="mailto:sales@novashell.ca"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              sales@novashell.ca
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Markets & Events */}
      <section id="events" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 sm:p-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-400">
              Markets &amp; Events
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Book NovaShell at Your Market
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-400">
              Running a farmers market, community market, or local event?
              NovaShell can set up and sell live lobster at your venue. Reach out
              to discuss dates, booth space, and what we need to make it work.
            </p>
            <a
              href="mailto:gavin@novashell.ca"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              gavin@novashell.ca
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-bold text-white">
            Nova<span className="text-red-500">Shell</span>
          </p>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} NovaShell. Calgary, Alberta.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
