export default function CTA() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-rose-500/10 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Ready to try your AI assistant?
          </h3>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">
            Experience voice + text, connect tools, and automate tasks in minutes.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
            >
              Launch demo
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition"
            >
              Book a live walkthrough
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-16 mx-auto h-48 w-2/3 bg-gradient-to-t from-blue-600/10 to-transparent blur-2xl" />
    </section>
  );
}
