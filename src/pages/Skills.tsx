import { Link } from 'react-router-dom'
import { PageHeader, Reveal, SectionHeader, Tag } from '../components/ui'
import { pmSkills, techFoundation } from '../data/skills'
import { profile } from '../data/profile'
import { useTitle } from '../lib/useTitle'

export default function Skills() {
  useTitle('Skills', 'Product skills backed by evidence, and the technical foundation behind them.')
  return (
    <>
      <PageHeader eyebrow="Skills" title={<>Skills, <em className="text-accent">with receipts.</em></>} intro="No percentage bars. Each skill links to where I’ve actually used it — and I’m upfront about what I’m still developing." />

      <section className="page py-16">
        <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted">
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-accent" />Practiced — evidence linked</span>
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full border border-muted" />Developing</span>
        </div>
        <div className="space-y-4">
          {pmSkills.map((a, i) => (
            <Reveal key={a.area} delay={0.03 * i}>
              <div className="card grid gap-6 p-6 md:grid-cols-[13rem_1fr] md:p-8">
                <div>
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h2 className="mt-1 font-serif text-3xl">{a.area}</h2>
                  <p className="mt-2 text-base text-muted">{a.summary}</p>
                </div>
                <div>
                  <ul className="divide-y divide-line">
                    {a.practiced.map((s) => (
                      <li key={s.skill} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="flex items-center gap-2.5 text-base"><span className="h-2 w-2 shrink-0 rounded-full bg-accent" />{s.skill}</span>
                        <span className="flex flex-wrap gap-1.5 pl-4 sm:pl-0">
                          {s.evidence.map((e) => (
                            <Link key={e.label} to={e.to} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent">{e.label} →</Link>
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-dashed border-line pt-4">
                    <span className="eyebrow mr-1">Developing</span>
                    {a.developing.map((d) => <span key={d} className="rounded-full border border-dashed border-ink/20 px-2.5 py-0.5 text-sm text-muted">{d}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-card/50">
        <div className="page py-20">
          <SectionHeader eyebrow="Technical foundation" title={<>Why an engineering background <em>makes me a better PM.</em></>} intro="I don’t want to write the code on a product team — but I can understand it, estimate it, and have a real conversation about trade-offs." />
          <div className="grid gap-5 lg:grid-cols-3">
            {techFoundation.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.06} className="h-full">
                <div className="card flex h-full flex-col p-6">
                  <p className="font-serif text-2xl">{g.group}</p>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">{g.why}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-6">{g.items.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <p className="eyebrow mb-4">Problem-solving</p>
            <div className="flex flex-wrap gap-3">
              {profile.achievements.map((a) => (
                <span key={a.label} className="rounded-full border border-line bg-card px-4 py-2 text-sm"><span className="font-medium">{a.label}</span> <span className="text-muted">· {a.note}</span></span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
