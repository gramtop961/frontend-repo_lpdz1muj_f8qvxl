import { Sparkles, Brain, Mic, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Natural conversations',
    desc:
      'Talk like a human. Real-time voice + text understanding with context retention across turns.',
  },
  {
    icon: Brain,
    title: 'Smarter actions',
    desc:
      'Connect tools and APIs to let the assistant book, summarize, draft, and execute tasks.',
  },
  { icon: Mic, title: 'Voice-native', desc: 'Low-latency streaming speech with crystal-clear responses.' },
  {
    icon: Zap,
    title: 'Fast and secure',
    desc: 'Optimized for speed with privacy-first design and enterprise-grade security.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Built for real work</h2>
          <p className="mt-4 text-slate-300/90">
            An AI assistant that listens, understands, and takes action across your apps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-white/20 transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 bg-gradient-to-b from-purple-600/10 to-transparent blur-2xl" />
    </section>
  );
}
