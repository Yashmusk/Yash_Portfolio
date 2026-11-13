import { Check, Code2, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { ArrowOut, PageHeader, Reveal } from '../components/ui'
import { profile } from '../data/profile'
import { useTitle } from '../lib/useTitle'

export default function Contact() {
  useTitle('Contact', 'Get in touch with Yash Agarwal about Product, APM or Product Engineer roles.')
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* clipboard blocked */ }
  }

  const links = [
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/Yashmusk', href: profile.github },
    { icon: Code2, label: 'LeetCode', value: 'leetcode.com/u/Yashcoder24', href: profile.leetcode },
  ]

  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Let’s talk <em className="text-accent">product.</em></>} intro="Hiring for an APM or Product Manager role? I would love to hear from you." />
      <section className="page grid gap-6 py-16 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="card flex h-full flex-col justify-between p-8 md:p-10">
            <div>
              <Mail size={22} className="text-accent" aria-hidden />
              <p className="eyebrow mt-6">Email — fastest way to reach me</p>
              <a href={`mailto:${profile.email}`} className="mt-3 block break-all font-serif text-3xl hover:text-accent md:text-4xl">{profile.email}</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Yash — product role')}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent">Write an email</a>
              <button onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium hover:border-ink/40" aria-live="polite">
                {copied ? <><Check size={15} className="text-gain" /> Copied</> : <><Copy size={15} /> Copy address</>}
              </button>
            </div>
          </div>
        </Reveal>
        <div className="space-y-3">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={0.05 * i}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="card group flex items-center gap-4 p-5 transition-colors hover:border-ink/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper"><l.icon size={17} /></span>
                <span className="flex-1"><span className="block font-medium">{l.label}</span><span className="text-sm text-muted">{l.value}</span></span>
                <ArrowOut />
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.15}>
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="card mb-3 flex items-center gap-4 p-5 transition-colors hover:border-ink/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper"><Phone size={17} /></span>
                <span><span className="block font-medium">Phone</span><span className="text-sm text-muted">{profile.phone}</span></span>
              </a>
            )}
            <div className="card flex items-center gap-4 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper"><MapPin size={17} /></span>
              <span><span className="block font-medium">{profile.location}</span><span className="text-sm text-muted">Current location</span></span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
