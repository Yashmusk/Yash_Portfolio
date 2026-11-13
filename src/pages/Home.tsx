import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Arrow, ArrowOut, Button, Reveal, SectionHeader, Tag } from '../components/ui'
import { caseStudies } from '../data/caseStudies'
import { experiences } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { useTitle } from '../lib/useTitle'

const whatIDo = [
  {
    title: 'Understand the problem',
    body: 'I study users and their workflows first, and find where they lose time or get stuck.',
  },
  {
    title: 'Define the product',
    body: 'I write clear problem statements, user stories and success metrics, so the team knows what to build and why.',
  },
  {
    title: 'Work with engineering',
    body: 'I have built and shipped software myself, so I understand the effort and trade-offs involved.',
  },
]

const glance = [
  ['Looking for', 'APM / Product Manager roles'],
  ['Now', "Founder's Office (Product), Securelytix"],
  ['Before', 'SDE at SuperProcure · SWE Intern at Smartverge'],
  ['Trading', '2+ years in the Indian stock market'],
  ['Based in', profile.location],
]

export default function Home() {
  useTitle(undefined, "Yash Agarwal — Founder's Office (Product) and software engineer. Product case study, experience and projects.")
  const sahi = caseStudies[0]

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <div className="page grid gap-12 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 rounded-full border border-gain/30 bg-gain-soft px-3.5 py-1.5 text-sm text-gain">
              <span className="h-2 w-2 rounded-full bg-gain" aria-hidden />
              {profile.status}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="h-display mt-7 max-w-3xl">
              I build products where <em className="text-accent">technology, business and users</em> meet.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              {profile.intro}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }} className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/case-studies/sahi-trade-plan">Read my case study <Arrow /></Button>
              <Button to="/contact" variant="outline">Contact me</Button>
              <Button href={profile.resumePath} download variant="ghost">Download resume <Arrow /></Button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="card overflow-hidden">
            <div className="flex items-center gap-4 border-b border-line px-6 py-5">
              <img src="/yash.jpg" alt="Yash Agarwal" width={64} height={64} className="h-16 w-16 rounded-full border border-line object-cover object-top" />
              <div>
                <p className="text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted">Technical product builder</p>
              </div>
            </div>
            <dl className="divide-y divide-line">
              {glance.map(([k, v]) => (
                <div key={k} className="px-6 py-3.5">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="mt-0.5 text-base font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="page py-20 md:py-24">
        <SectionHeader eyebrow="What I do" title="How I work on a product problem" />
        <div className="grid gap-5 md:grid-cols-3">
          {whatIDo.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="h-full">
              <div className="card h-full p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-medium text-accent-deep">{i + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-y border-line bg-card/60">
        <div className="page py-20 md:py-24">
          <SectionHeader eyebrow="Experience" title="Product work in every role" action={<Button to="/experience" variant="outline">Full experience <Arrow /></Button>} />
          <div className="grid gap-5 lg:grid-cols-3">
            {experiences.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06} className="h-full">
                <Link to={`/experience#${e.id}`} className="card group flex h-full flex-col p-7 transition-colors hover:border-ink/30">
                  <p className="text-sm text-muted">{e.company}</p>
                  <h3 className="mt-1 text-2xl font-semibold">{e.role}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">{e.oneLiner}</p>
                  {e.metric && <p className="mt-4 inline-flex w-fit items-baseline gap-2 rounded-lg bg-gain-soft px-3 py-1.5 text-gain"><span className="text-xl font-semibold">{e.metric.value}</span><span className="text-sm">{e.metric.label}</span></p>}
                  <ul className="mt-5 space-y-2.5">
                    {e.productWork.slice(0, 3).map((w) => (
                      <li key={w.title} className="flex gap-3 text-base">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {w.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-medium text-accent">Read more <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRADING */}
      <section className="page pt-20 md:pt-24">
        <Reveal>
          <div className="card grid gap-8 p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-10">
            <div className="text-center md:text-left">
              <p className="font-serif text-7xl leading-none text-gain">2+</p>
              <p className="mt-2 text-base font-medium">years of trading</p>
              <p className="text-sm text-muted">Indian stock market</p>
            </div>
            <div>
              <p className="eyebrow">Passion for the stock market</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">Hands-on trading experience, from the user’s side</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                I am passionate about the stock market and have been actively trading and investing in Indian equities for over two years. I know how traders place orders, read charts and manage risk, which helps me understand the users of trading and investing products.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Intraday and delivery', 'Market, limit and stop-loss orders', 'Technical analysis', 'Risk/reward', 'Nifty 50 and Bank Nifty', 'Zerodha, Groww, Dhan, Upstox, Sahi'].map((t) => (
                  <Tag key={t} tone="gain">{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CASE STUDY */}
      <section className="page py-20 md:py-24">
        <SectionHeader eyebrow="Case study" title="How I think through a product" />
        <Reveal>
          <Link to={`/case-studies/${sahi.id}`} className="card group grid overflow-hidden transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(23,24,27,.35)] lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col justify-between bg-ink p-8 text-paper md:p-10">
              <div>
                <p className="text-sm text-paper/70">{sahi.industry} · Independent exploration</p>
                <p className="mt-4 font-serif text-6xl">{sahi.company}</p>
              </div>
              <p className="mt-10 text-lg leading-relaxed text-paper/85">{sahi.summary}</p>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold leading-snug">{sahi.title}</h3>
              <dl className="mt-6 space-y-5">
                {sahi.tldr.map((t) => (
                  <div key={t.label}>
                    <dt className="text-sm text-muted">{t.label}</dt>
                    <dd className="mt-0.5 text-base font-medium">{t.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-1.5">{sahi.deliverables.map((d) => <Tag key={d}>{d}</Tag>)}</div>
              <span className="mt-8 inline-flex items-center gap-2 text-base font-medium text-accent">Read the case study <Arrow /></span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-line bg-card/60">
        <div className="page py-20 md:py-24">
          <SectionHeader eyebrow="Projects" title="Things I’ve built" action={<Button to="/projects" variant="outline">All projects <Arrow /></Button>} />
          <div className="divide-y divide-line border-y border-line">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04}>
                <Link to={`/projects#${p.id}`} className="group grid gap-2 py-6 md:grid-cols-[14rem_1fr_auto] md:items-center md:gap-8">
                  <p className="text-xl font-semibold group-hover:text-accent">{p.name}</p>
                  <div>
                    <p className="text-base text-ink-soft">{p.tagline}</p>
                    <p className="mt-1 text-sm text-muted">{p.stack.join(' · ')}</p>
                  </div>
                  <span className="hidden text-muted group-hover:text-accent md:block"><ArrowOut /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="page py-20">
        <Reveal>
          <h2 className="mb-6 text-xl font-semibold">Achievements</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {profile.achievements.map((a) => (
              <div key={a.label} className="card p-6">
                <p className="font-serif text-4xl">{a.value}</p>
                <p className="mt-2 font-medium">{a.label}</p>
                <p className="mt-0.5 text-sm text-muted">{a.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section className="page">
        <Reveal className="card px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight md:text-5xl">Hiring for product? Let’s talk.</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-lg sm:flex-row sm:gap-8">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-accent"><Mail size={18} className="text-accent" aria-hidden />{profile.email}</a>
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-accent"><Phone size={18} className="text-accent" aria-hidden />{profile.phone}</a>
            )}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact">Contact me <Arrow /></Button>
            <Button to="/resume" variant="outline">Resume</Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
