import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Blocks from '../components/Blocks'
import { Arrow, Reveal, Tag } from '../components/ui'
import { caseStudies } from '../data/caseStudies'
import { useTitle } from '../lib/useTitle'
import NotFound from './NotFound'

export default function CaseStudyDetail() {
  const { id } = useParams()
  const idx = caseStudies.findIndex((c) => c.id === id)
  const cs = caseStudies[idx]
  useTitle(cs ? `${cs.company} case study` : 'Not found', cs?.summary)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    if (!cs) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    cs.sections.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [cs])

  if (!cs) return <NotFound />
  const next = caseStudies[(idx + 1) % caseStudies.length]

  return (
    <article>
      <motion.div className="fixed left-0 right-0 top-16 z-40 h-0.5 origin-left bg-accent" style={{ scaleX: progress }} aria-hidden />

      <header className="border-b border-line bg-grid">
        <div className="page pb-14 pt-10 md:pb-20">
          <Link to="/case-studies" className="group inline-flex items-center gap-2 text-sm text-muted hover:text-ink"><ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" aria-hidden /> All case studies</Link>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-2"><Tag tone="warn">{cs.kind}</Tag><Tag>{cs.industry}</Tag><Tag>{cs.year}</Tag></div>
            <p className="mt-6 font-serif text-2xl italic text-muted">{cs.company}</p>
            <h1 className="h-display mt-2 max-w-4xl !text-5xl md:!text-6xl">{cs.title}</h1>
            <p className="prose-body mt-6 max-w-2xl text-[17px]">{cs.summary}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {cs.tldr.map((t) => (
                <div key={t.label} className="bg-card p-5">
                  <dt className="eyebrow">{t.label}</dt>
                  <dd className="mt-2 font-medium leading-snug">{t.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="page grid gap-12 py-16 lg:grid-cols-[13rem_1fr]">
        <nav aria-label="Case study sections" className="hidden lg:block">
          <ol className="sticky top-28 space-y-1 border-l border-line">
            {cs.sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }) }}
                  className={`-ml-px flex gap-3 border-l py-1.5 pl-4 text-base transition-colors ${active === s.id ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'}`}>
                  <span className="font-mono text-xs leading-5">{String(i + 1).padStart(2, '0')}</span>{s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="min-w-0 space-y-20">
          {cs.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <Reveal>
                <p className="eyebrow mb-3"><span className="text-accent">{String(i + 1).padStart(2, '0')}</span> — {cs.company}</p>
                <h2 className="mb-7 font-serif text-4xl">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.05}><Blocks blocks={s.blocks} /></Reveal>
            </section>
          ))}

          <Link to={`/case-studies/${next.id}`} className="card group block p-8 transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(23,24,27,.35)]">
            <p className="eyebrow">Next case study</p>
            <p className="mt-3 font-serif text-4xl">{next.company}</p>
            <p className="mt-1 text-ink-soft">{next.title}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">Read next <Arrow /></span>
          </Link>
        </div>
      </div>
    </article>
  )
}
