import CaseCard from '../components/CaseCard'
import { PageHeader, Reveal } from '../components/ui'
import { caseStudies } from '../data/caseStudies'
import { useTitle } from '../lib/useTitle'

const legend = [
  ['Problem framing', 'A sharp problem statement and the hypotheses behind it'],
  ['Users & journeys', 'Personas, jobs-to-be-done and where the journey breaks'],
  ['Prioritisation', 'Impact vs effort, and why the first release is the first release'],
  ['Spec & metrics', 'PRD excerpts, a North Star and the guardrails around it'],
]

export default function CaseStudies() {
  useTitle('Case Studies', 'Independent product case studies by Yash Agarwal — problem framing, PRDs, wireframes and metrics.')
  return (
    <>
      <PageHeader eyebrow="Case studies" title={<>How I think, <em className="text-accent">not just what I build.</em></>} intro="A self-initiated, end-to-end product exploration — from finding the problem to writing the spec and defining success.">
        <p className="mt-6 inline-flex rounded-lg border border-warn/25 bg-warn-soft/60 px-4 py-2.5 text-base text-warn">
          This is an independent exploration — no affiliation with Sahi, nothing shipped, and every metric is a proposed target.
        </p>
      </PageHeader>

      <section className="page py-16">
        <Reveal className="mb-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {legend.map(([t, d], i) => (
            <div key={t} className="bg-card p-5">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <p className="mt-1 font-medium">{t}</p>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </Reveal>
        <div className="mx-auto max-w-2xl">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={(i % 2) * 0.06}>
              <CaseCard cs={cs} index={i} large />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
