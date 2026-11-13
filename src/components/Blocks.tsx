import { AlertTriangle, Frown, Lightbulb, Meh, Smile } from 'lucide-react'
import type { Block } from '../data/caseStudies'
import Wireframe from './wireframes/Wireframes'

const bucketTone = { Now: 'bg-accent text-white', Next: 'bg-accent-soft text-accent-deep', Later: 'bg-ink/[0.06] text-ink-soft' }

function Priority({ items, note }: Extract<Block, { type: 'priority' }>) {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
      {/* Impact / effort matrix */}
      <figure aria-label="Impact versus effort matrix" className="relative aspect-square w-full max-w-sm rounded-xl border border-line bg-card p-3">
        <div className="absolute inset-3 grid grid-cols-2 grid-rows-2 overflow-hidden rounded-lg border border-line">
          <div className="border-b border-r border-line bg-gain-soft/60 p-2 font-mono text-xs text-gain">Quick wins</div>
          <div className="border-b border-line p-2 text-right font-mono text-xs text-muted">Big bets</div>
          <div className="border-r border-line p-2 font-mono text-xs text-muted">Fill-ins</div>
          <div className="p-2 text-right font-mono text-xs text-muted">Avoid</div>
        </div>
        {items.map((it, i) => (
          <div
            key={it.feature}
            className="group absolute -translate-x-1/2 translate-y-1/2"
            style={{ left: `calc(12px + ${((it.effort - 0.5) / 5) * 100}% - ${((it.effort - 0.5) / 5) * 24}px)`, bottom: `calc(12px + ${((it.impact - 0.5) / 5) * 100}% - ${((it.impact - 0.5) / 5) * 24}px)` }}
          >
            <span className={`flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs shadow-sm ${bucketTone[it.bucket]}`} tabIndex={0} aria-label={`${it.feature}: impact ${it.impact}, effort ${it.effort}`}>{i + 1}</span>
          </div>
        ))}
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-muted">Effort →</span>
        <span className="absolute -left-2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 font-mono text-xs text-muted">Impact →</span>
      </figure>
      <div>
        <ol className="divide-y divide-line rounded-xl border border-line bg-card">
          {items.map((it, i) => (
            <li key={it.feature} className="flex items-center gap-3 px-4 py-2.5 text-sm">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs ${bucketTone[it.bucket]}`}>{i + 1}</span>
              <span className="flex-1">{it.feature}</span>
              <span className="font-mono text-xs text-muted">I{it.impact} · E{it.effort}</span>
              <span className="w-12 text-right font-mono text-xs uppercase">{it.bucket}</span>
            </li>
          ))}
        </ol>
        {note && <p className="mt-3 text-sm text-muted">{note}</p>}
      </div>
    </div>
  )
}

const feel = { good: Smile, neutral: Meh, bad: Frown }
const feelTone = { good: 'text-gain', neutral: 'text-muted', bad: 'text-warn' }

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i} className="prose-body max-w-2xl text-[16px]">{b.text}</p>
          case 'list': {
            const L = b.ordered ? 'ol' : 'ul'
            return (
              <L key={i} className="max-w-2xl space-y-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-ink-soft">
                    <span className="mt-[3px] shrink-0 font-mono text-xs text-accent">{b.ordered ? String(j + 1).padStart(2, '0') : '—'}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </L>
            )
          }
          case 'callout':
            return (
              <div key={i} className={`max-w-2xl rounded-xl border p-5 ${b.tone === 'warn' ? 'border-warn/25 bg-warn-soft/60' : 'border-accent/20 bg-accent-soft/50'}`}>
                <p className={`mb-1.5 flex items-center gap-2 text-sm font-medium ${b.tone === 'warn' ? 'text-warn' : 'text-accent-deep'}`}>
                  {b.tone === 'warn' ? <AlertTriangle size={15} aria-hidden /> : <Lightbulb size={15} aria-hidden />}
                  {b.title}
                </p>
                <p className="text-base leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            )
          case 'personas':
            return (
              <div key={i} className="grid gap-4 sm:grid-cols-2">
                {b.items.map((p) => (
                  <div key={p.name} className="card p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-serif text-lg italic text-paper">{p.name.replace(/^The /, '')[0].toUpperCase()}</div>
                      <div><p className="font-medium">{p.name}</p><p className="text-sm text-muted">{p.who}</p></div>
                    </div>
                    <p className="text-sm"><span className="eyebrow mr-2">Goal</span>{p.goal}</p>
                    <p className="mt-1.5 text-sm"><span className="eyebrow mr-2 !text-warn">Pain</span>{p.pain}</p>
                  </div>
                ))}
              </div>
            )
          case 'journey':
            return (
              <div key={i} className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                <ol className="grid min-w-[640px] gap-0 rounded-xl border border-line bg-card" style={{ gridTemplateColumns: `repeat(${b.stages.length}, minmax(0,1fr))` }}>
                  {b.stages.map((s, j) => {
                    const Icon = feel[s.feeling]
                    return (
                      <li key={s.stage} className={`flex flex-col p-4 ${j ? 'border-l border-line' : ''}`}>
                        <span className="font-mono text-xs text-muted">{String(j + 1).padStart(2, '0')}</span>
                        <p className="mt-1 font-medium">{s.stage}</p>
                        <p className="mt-1 text-sm text-ink-soft">{s.doing}</p>
                        <Icon size={18} className={`my-3 ${feelTone[s.feeling]}`} aria-label={`Feeling: ${s.feeling}`} />
                        {s.opportunity && <p className="mt-auto rounded-md bg-accent-soft px-2 py-1.5 text-[12px] leading-snug text-accent-deep">{s.opportunity}</p>}
                      </li>
                    )
                  })}
                </ol>
              </div>
            )
          case 'table':
            return (
              <div key={i}>
                <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                  <table className="w-full min-w-[560px] overflow-hidden rounded-xl border border-line bg-card text-left text-sm">
                    <thead><tr className="border-b border-line bg-paper">{b.head.map((h) => <th key={h} className="px-4 py-3 font-mono text-xs font-normal uppercase tracking-wider text-muted">{h}</th>)}</tr></thead>
                    <tbody className="divide-y divide-line">
                      {b.rows.map((r, j) => (
                        <tr key={j}>{r.map((c, k) => <td key={k} className={`px-4 py-3 align-top ${k === 0 ? 'font-medium' : 'text-ink-soft'} ${k === r.length - 1 && b.head.length === 4 ? 'bg-accent-soft/40 text-accent-deep' : ''}`}>{c}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note && <p className="mt-3 text-sm text-muted">{b.note}</p>}
              </div>
            )
          case 'priority':
            return <Priority key={i} {...b} />
          case 'stories':
            return (
              <div key={i} className="space-y-4">
                {b.items.map((s, j) => (
                  <div key={j} className="card overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-line bg-paper px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-muted">
                      <span className="text-accent">US-{String(j + 1).padStart(2, '0')}</span> User story
                    </div>
                    <div className="p-5">
                      <p className="text-base leading-relaxed">{s.story}</p>
                      <p className="eyebrow mb-2 mt-4">Acceptance criteria</p>
                      <ul className="space-y-1.5">
                        {s.criteria.map((c) => (
                          <li key={c} className="flex gap-2.5 text-sm text-ink-soft"><span className="mt-0.5 inline-block h-3.5 w-3.5 shrink-0 rounded border border-ink/25" aria-hidden />{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )
          case 'metrics':
            return (
              <div key={i} className="space-y-3">
                <div className="rounded-xl bg-ink p-6 text-paper">
                  <p className="font-mono text-xs uppercase tracking-wider text-paper/60">North Star metric · proposed</p>
                  <p className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">{b.northStar.name}</p>
                  <p className="mt-2 text-sm text-paper/70">{b.northStar.why}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="card p-5">
                    <p className="eyebrow mb-3 !text-accent">Input metrics</p>
                    <ul className="space-y-2 text-sm text-ink-soft">{b.inputs.map((m) => <li key={m} className="flex gap-2"><span className="text-accent">↗</span>{m}</li>)}</ul>
                  </div>
                  <div className="card p-5">
                    <p className="eyebrow mb-3 !text-warn">Guardrails</p>
                    <ul className="space-y-2 text-sm text-ink-soft">{b.guardrails.map((m) => <li key={m} className="flex gap-2"><span className="text-warn">⊘</span>{m}</li>)}</ul>
                  </div>
                </div>
              </div>
            )
          case 'wireframe':
            return (
              <figure key={i} className="rounded-2xl border border-line bg-grid px-4 py-8 sm:px-8">
                <Wireframe id={b.id} />
                <figcaption className="mt-6 text-center text-sm text-muted">{b.caption}</figcaption>
              </figure>
            )
        }
      })}
    </div>
  )
}
