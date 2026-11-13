import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/caseStudies'
import { Arrow, Tag } from './ui'

export default function CaseCard({ cs, index, large = false }: { cs: CaseStudy; index: number; large?: boolean }) {
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="h-full">
      <Link
        to={`/case-studies/${cs.id}`}
        className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(23,24,27,.35)]"
      >
        <div className="relative border-b border-line bg-grid px-6 pb-6 pt-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-muted">CS-0{index + 1}</span>
            <Tag tone="warn">Exploration</Tag>
          </div>
          <p className={`mt-8 font-serif leading-none ${large ? 'text-6xl' : 'text-5xl'}`}>{cs.company}</p>
          <p className="eyebrow mt-3">{cs.industry}</p>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-medium leading-snug">{cs.title}</h3>
          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="eyebrow mb-1">Problem</dt>
              <dd className="text-ink-soft">{cs.problem}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Approach</dt>
              <dd className="text-ink-soft">{cs.approach}</dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {cs.deliverables.slice(0, large ? 6 : 4).map((d) => (
              <Tag key={d}>{d}</Tag>
            ))}
          </div>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-accent">
            Read case study <Arrow />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
