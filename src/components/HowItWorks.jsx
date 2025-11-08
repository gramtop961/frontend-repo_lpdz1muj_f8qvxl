import { MessageCircle, MousePointer2, Bot } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Start a conversation',
    desc: 'Type or speak your request. The assistant understands context and tone.',
  },
  {
    icon: MousePointer2,
    title: 'Connect tools',
    desc: 'Link calendars, docs, email, and business apps. No code required.',
  },
  { icon: Bot, title: 'Let it handle it', desc: 'It drafts, summarizes, books, and updates — then confirms before acting.' },
];

export default function HowItWorks() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How it works</h2>
          <p className="mt-4 text-slate-300/90">Three simple steps from idea to action.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <s.icon className="h-5 w-5 text-purple-300" />
              </div>
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
