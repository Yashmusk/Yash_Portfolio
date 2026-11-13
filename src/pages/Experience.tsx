import { ArrowRight } from 'lucide-react'
import { Arrow, Button, PageHeader, Reveal, Tag } from '../components/ui'
import { experiences } from '../data/experience'
import { useTitle } from '../lib/useTitle'

export default function Experience() {
  useTitle('Experience', 'Product work as Founder’s Office (Product) at Securelytix, SDE at SuperProcure and SWE Intern at Smartverge.')
  return (
    <>
      <PageHeader eyebrow="Experience" title={<>Product work <em className="text-accent">in every role.</em></>} intro="In both roles, I started by understanding a user or business problem, and then solved it with technology or clear communication." />

      <div className="page space-y-24 py-20">
        {experiences.map((e) => (
          <section key={e.id} id={e.id} className="scroll-mt-24">
            <Reveal className="grid gap-6 border-b border-line pb-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="mb-4 flex flex-wrap gap-2"><Tag tone="accent">{e.type}</Tag><Tag>{e.period}</Tag></div>
                <h2 className="font-serif text-5xl md:text-6xl">{e.company}</h2>
                <p className="mt-2 text-lg text-ink-soft">{e.role}</p>
              </div>
              <p className="max-w-sm text-base text-ink-soft">{e.context}</p>
            </Reveal>

            {e.metric && (
              <Reveal className="mt-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-2xl border border-gain/25 bg-gain-soft px-6 py-5">
                  <span className="font-serif text-5xl text-gain">{e.metric.value}</span>
                  <span className="text-lg text-ink">{e.metric.label}</span>
                </div>
              </Reveal>
            )}

            {e.highlight && (
              <Reveal className="mt-10">
                <div className="card overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-paper px-6 py-3">
                    <p className="text-sm font-medium">{e.highlight.title}</p>
                    <span className="eyebrow">Key initiative</span>
                  </div>
                  <ol className="grid gap-px bg-line sm:grid-cols-5">
                    {e.highlight.steps.map((s, i) => (
                      <li key={s.label} className="relative bg-card p-5">
                        <span className="font-mono text-xs text-accent">0{i + 1}</span>
                        <p className="mt-1 font-medium">{s.label}</p>
                        <p className="mt-1.5 text-sm leading-snug text-ink-soft">{s.body}</p>
                        {i < e.highlight!.steps.length - 1 && <ArrowRight size={14} className="absolute right-2 top-5 hidden text-muted sm:block" aria-hidden />}
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            )}

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <p className="eyebrow mb-5">The product work</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {e.productWork.map((w, i) => (
                    <Reveal key={w.title} delay={i * 0.05} className="h-full">
                      <div className="card h-full p-5">
                        <p className="font-medium">{w.title}</p>
                        <p className="mt-2 text-base leading-relaxed text-ink-soft">{w.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <Reveal className="space-y-8">
                <div>
                  <p className="eyebrow mb-3">Responsibilities</p>
                  <ul className="space-y-2 text-base text-ink-soft">
                    {e.responsibilities.map((r) => <li key={r} className="flex gap-2.5"><span className="text-accent">—</span>{r}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">PM skills exercised</p>
                  <div className="flex flex-wrap gap-1.5">{e.pmMuscles.map((m) => <Tag key={m} tone="accent">{m}</Tag>)}</div>
                </div>
                <blockquote className="rounded-xl border-l-2 border-accent bg-card p-5">
                  <p className="eyebrow mb-2">Product lesson</p>
                  <p className="font-serif text-xl leading-snug">“{e.lesson}”</p>
                </blockquote>
              </Reveal>
            </div>
          </section>
        ))}

        <Reveal className="flex flex-wrap gap-3 border-t border-line pt-10">
          <Button to="/case-studies">Read my case studies <Arrow /></Button>
          <Button to="/resume" variant="outline">Resume</Button>
        </Reveal>
      </div>
    </>
  )
}
