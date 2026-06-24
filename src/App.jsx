function Logo({ size = "md" }) {
  const lobsterClass =
    size === "sm" ? "h-10 w-auto" : "h-20 w-auto sm:h-24"

  return (
    <div
      className={`flex flex-col items-center ${size === "sm" ? "flex-row gap-3" : "gap-3"}`}
    >
      <img
        src="/transparentrect.png"
        alt=""
        aria-hidden="true"
        className={lobsterClass}
      />
      <div className={size === "sm" ? "text-left" : "text-center"}>
        <p
          className={`font-bold uppercase tracking-tight text-neutral-900 ${
            size === "sm" ? "text-base leading-none" : "text-3xl sm:text-4xl"
          }`}
        >
          NovaShell
        </p>
        <p
          className={`font-light uppercase tracking-[0.3em] text-neutral-900 ${
            size === "sm" ? "mt-1 text-[10px]" : "mt-2 text-xs sm:text-sm"
          }`}
        >
          Live Lobster
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" aria-label="NovaShell Live Lobster">
            <Logo size="sm" />
          </a>
          <div className="flex gap-6 text-sm font-medium tracking-wide text-neutral-600">
            <a href="#wholesale" className="transition hover:text-red-600">
              Wholesale
            </a>
            <a href="#events" className="transition hover:text-red-600">
              Markets
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/80 via-white to-white" />
        <div className="relative max-w-3xl">
          <div className="mb-8">
            <Logo size="lg" />
          </div>
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-red-600">
            Calgary &amp; Surrounding Areas
          </p>
          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            Fresh Live Lobster in{" "}
            <span className="text-red-600">Calgary</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-neutral-600">
            NovaShell brings premium live Atlantic lobster to Calgary and the
            surrounding area. Pick up at our location — we&apos;ll announce
            details on Friday, June 26th.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-lg border border-red-200 bg-red-50 px-6 py-4">
            <p className="text-sm font-medium text-red-700">
              Location announcement coming Friday, June 26th
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#wholesale"
              className="rounded-lg bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Wholesale Inquiries
            </a>
            <a
              href="#events"
              className="rounded-lg border-2 border-red-600 px-8 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              Book Us at Your Market
            </a>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="border-t border-red-100 bg-red-50/50 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-red-600">
            Our Source
          </p>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-neutral-900 sm:text-3xl">
            Straight from Nova Scotia
          </h2>
          <p className="text-base leading-relaxed text-neutral-600">
            NovaShell sources live Atlantic lobster directly from Nova Scotia —
            home to some of the finest lobster fisheries in the world. From the
            coast to Calgary, we keep it fresh so you get the real thing.
          </p>
        </div>
      </section>

      {/* Wholesale */}
      <section id="wholesale" className="border-t border-red-100 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-red-200 bg-white p-10 shadow-sm sm:p-14">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-red-600">
              Wholesale
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl">
              Supply for Restaurants &amp; Retailers
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
              Looking for a consistent, high-quality live lobster supplier? NovaShell
              works with restaurants, seafood markets, and food service businesses
              across Calgary and the surrounding area. Pick up at our location —
              get in touch to discuss pricing and volume.
            </p>
            <a
              href="mailto:sales@novashell.ca"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              sales@novashell.ca
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Markets & Events */}
      <section id="events" className="border-t border-red-100 bg-red-50/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-red-200 bg-white p-10 shadow-sm sm:p-14">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-red-600">
              Markets &amp; Events
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl">
              Book NovaShell at Your Market
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
              Running a farmers market, community market, or local event?
              NovaShell can set up and sell live lobster at your venue. Reach out
              to discuss dates, booth space, and what we need to make it work.
            </p>
            <a
              href="mailto:contact@novashell.ca"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-red-600 px-8 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              contact@novashell.ca
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-200 bg-red-600 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold uppercase tracking-tight text-white">
              NovaShell
            </p>
            <p className="text-xs font-light uppercase tracking-[0.3em] text-red-100">
              Live Lobster
            </p>
          </div>
          <p className="text-sm text-red-100">
            &copy; {new Date().getFullYear()} NovaShell. Calgary, Alberta.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
