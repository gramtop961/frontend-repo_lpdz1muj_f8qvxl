import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-rose-500/20 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-inset ring-purple-500/30">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              AI Voice Agent
            </span>
            <h1 className="mt-5 font-semibold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl">
              Your always‑on AI assistant for every conversation
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-xl mx-auto lg:mx-0">
              Speak, type, or upload. Get answers, take actions, and automate workflows with a
              futuristic, minimal assistant that feels natural and fast.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition"
              >
                Try the demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:opacity-90 transition"
              >
                See features
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] w-full rounded-2xl ring-1 ring-white/10 bg-black/20 overflow-hidden">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />
            <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(closest-side,rgba(168,85,247,0.25),transparent)]" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 blur-3xl">
        <div className="h-64 w-[40rem] bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-rose-500/30" />
      </div>
    </section>
  );
}
