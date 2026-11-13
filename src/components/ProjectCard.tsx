import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, Circle, Github } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../data/projects'
import ArchDiagram from './ArchDiagram'
import { Tag } from './ui'

export default function ProjectCard({ p, defaultOpen = false }: { p: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <article id={p.id} className="card scroll-mt-24 overflow-hidden">
      <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Tag tone="accent">Built project</Tag>
            <span className="eyebrow">{p.category}</span>
          </div>
          <h3 className="mt-4 font-serif text-4xl">{p.name}</h3>
          <p className="mt-1 text-[17px] text-ink-soft">{p.tagline}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-1.5">Problem</p>
              <p className="text-sm leading-relaxed text-ink-soft">{p.problem}</p>
            </div>
            <div>
              <p className="eyebrow mb-1.5">Product insight</p>
              <p className="text-sm leading-relaxed text-ink-soft">{p.insight}</p>
            </div>
          </div>
        </div>
        {p.github && (
          <div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-sm hover:border-ink/40"
            >
              <Github size={15} aria-hidden /> Code
            </a>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-3 md:px-8">
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`${p.id}-details`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          {open ? 'Hide breakdown' : 'Product breakdown'}
          <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${p.id}-details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 border-t border-line bg-paper/60 p-6 md:grid-cols-2 md:p-8">
              <div className="space-y-6">
                <div>
                  <p className="eyebrow mb-2">Who it is for</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {p.users.map((u) => (
                      <li key={u}>
                        <Tag>{u}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2">Solution</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{p.solution}</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-2 !text-gain">Built</p>
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      {p.built.map((b) => (
                        <li key={b} className="flex gap-2">
                          <Check size={14} className="mt-1 shrink-0 text-gain" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Planned</p>
                    <ul className="space-y-1.5 text-sm text-muted">
                      {p.planned.map((b) => (
                        <li key={b} className="flex gap-2">
                          <Circle size={11} className="mt-1 shrink-0" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="eyebrow mb-2">Architecture</p>
                  <ArchDiagram layers={p.architecture} />
                </div>
                <div>
                  <p className="eyebrow mb-2">Decisions and trade-offs</p>
                  <ul className="space-y-3">
                    {p.decisions.map((d) => (
                      <li key={d.title} className="text-sm">
                        <span className="font-medium">{d.title}. </span>
                        <span className="text-ink-soft">{d.body}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2">Success metrics and targets</p>
                  <table className="w-full overflow-hidden rounded-xl border border-line bg-card text-left text-sm">
                    <thead>
                      <tr className="border-b border-line bg-paper">
                        <th className="px-3 py-2 font-medium text-muted">Metric</th>
                        <th className="px-3 py-2 text-right font-medium text-muted">Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {p.metrics.map((m) => (
                        <tr key={m.name}>
                          <td className="px-3 py-2.5 text-ink-soft">{m.name}</td>
                          <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium text-gain">{m.target}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {p.statusNote && <p className="text-sm text-muted">Note: {p.statusNote}</p>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
