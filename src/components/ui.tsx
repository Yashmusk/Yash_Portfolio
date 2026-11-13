import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

type BtnProps = { to?: string; href?: string; children: ReactNode; variant?: 'primary' | 'ghost' | 'outline'; download?: boolean; external?: boolean; disabled?: boolean; className?: string }

export function Button({ to, href, children, variant = 'primary', download, external, disabled, className = '' }: BtnProps) {
  const base = 'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200'
  const styles = {
    primary: 'bg-ink text-paper hover:bg-accent',
    outline: 'border border-ink/15 bg-card text-ink hover:border-ink/40',
    ghost: 'text-ink hover:text-accent px-2',
  }[variant]
  const cls = `${base} ${styles} ${disabled ? 'pointer-events-none opacity-40' : ''} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  return (
    <a href={href} className={cls} download={download || undefined} aria-disabled={disabled || undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

export const Arrow = () => <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
export const ArrowOut = () => <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />

const tagTones = {
  default: 'bg-ink/[0.05] text-ink-soft',
  accent: 'bg-accent-soft text-accent-deep',
  gain: 'bg-gain-soft text-gain',
  warn: 'bg-warn-soft text-warn',
}
export function Tag({ children, tone = 'default' }: { children: ReactNode; tone?: keyof typeof tagTones }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-xs uppercase tracking-wider ${tagTones[tone]}`}>{children}</span>
}

export function SectionHeader({ index, eyebrow, title, intro, action }: { index?: string; eyebrow: string; title: ReactNode; intro?: ReactNode; action?: ReactNode }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4 flex items-center gap-3">
          {index && <span className="text-accent">{index}</span>}
          <span className="h-px w-8 bg-line" aria-hidden />
          {eyebrow}
        </p>
        <h2 className="h-section">{title}</h2>
        {intro && <p className="prose-body mt-4 max-w-xl">{intro}</p>}
      </div>
      {action}
    </Reveal>
  )
}

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <header className="border-b border-line">
      <div className="page pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="h-display max-w-4xl">{title}</h1>
          {intro && <p className="prose-body mt-6 max-w-2xl text-[17px]">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </header>
  )
}
