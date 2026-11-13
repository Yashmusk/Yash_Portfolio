import { Download, Printer } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Reveal } from '../components/ui'
import { caseStudies } from '../data/caseStudies'
import { experiences } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { techFoundation } from '../data/skills'
import { useTitle } from '../lib/useTitle'

function usePdfAvailable(path: string) {
  const [ok, setOk] = useState<boolean | null>(null)
  useEffect(() => {
    fetch(path, { method: 'HEAD' })
      .then((r) => setOk(r.ok && (r.headers.get('content-type') ?? '').includes('pdf')))
      .catch(() => setOk(false))
  }, [path])
  return ok
}

const H = ({ children }: { children: string }) => <h2 className="mb-4 border-b border-ink pb-1.5 font-mono text-xs uppercase tracking-[0.14em]">{children}</h2>

export default function Resume() {
  useTitle('Resume', 'Resume of Yash Agarwal — Founder’s Office (Product), software engineering and AI product experience.')
  const pdf = usePdfAvailable(profile.resumePath)

  return (
    <>
      <div className="print:hidden">
        <PageHeader eyebrow="Resume" title={<>The one-page <em className="text-accent">version.</em></>} intro="A web version of my resume below. Download the PDF, or print this page straight to PDF.">
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={pdf ? profile.resumePath : undefined} download={pdf ? 'Yash_Agarwal_Resume.pdf' : undefined} aria-disabled={!pdf}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${pdf ? 'bg-ink text-paper hover:bg-accent' : 'cursor-not-allowed bg-ink/10 text-muted'}`}>
              <Download size={15} aria-hidden /> Download PDF
            </a>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-5 py-2.5 text-sm font-medium hover:border-ink/40">
              <Printer size={15} aria-hidden /> Print / save this page
            </button>
          </div>
          {pdf === false && (
            <p className="mt-4 max-w-xl rounded-lg border border-warn/25 bg-warn-soft/60 px-4 py-2.5 text-sm text-warn">
              Placeholder: resume PDF not uploaded yet. Add it as <code className="font-mono">public{profile.resumePath}</code> and the download button activates automatically.
            </p>
          )}
        </PageHeader>
      </div>

      <section className="page py-16 print:p-0">
        <Reveal>
          <div className="card mx-auto max-w-4xl p-7 text-base leading-relaxed sm:p-12 print:border-0 print:p-0">
            <header className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end">
              <div>
                <h1 className="font-serif text-5xl">{profile.name}</h1>
                <p className="mt-1 text-ink-soft">AI Product Management · Product Strategy & Execution</p>
              </div>
              <ul className="text-sm text-ink-soft sm:text-right">
                <li>{profile.location}</li>
                <li><a className="link-u" href={`mailto:${profile.email}`}>{profile.email}</a></li>
                {profile.phone && <li><a className="link-u" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>}
                <li><a className="link-u" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a className="link-u" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </header>

            <p className="mt-6 text-ink-soft">Technical product builder with experience in software engineering, B2B workflows and AI-enabled applications. Combines hands-on engineering with founder-led business exposure and customer-focused product thinking. Built an internal CRM at SuperProcure that reduced manual effort by 40%. 2+ years of hands-on experience in the Indian stock market.</p>

            <div className="mt-8 space-y-8">
              <section>
                <H>Experience</H>
                <div className="space-y-6">
                  {experiences.map((e) => (
                    <div key={e.id}>
                      <div className="flex flex-wrap justify-between gap-2"><p><span className="font-medium">{e.role}</span> · {e.company}</p><span className="font-mono text-[11.5px] text-muted">{e.period}</span></div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
                        {e.productWork.slice(0, 4).map((w) => <li key={w.title}><span className="text-ink">{w.title}:</span> {w.body}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <H>Product case studies (independent)</H>
                <ul className="space-y-1.5 text-ink-soft">
                  {caseStudies.map((c) => <li key={c.id}><Link to={`/case-studies/${c.id}`} className="font-medium text-ink hover:text-accent">{c.company}</Link> — {c.title}. <span className="text-muted">{c.deliverables.slice(0, 4).join(', ')}.</span></li>)}
                </ul>
              </section>

              <section>
                <H>Projects</H>
                <ul className="space-y-1.5 text-ink-soft">
                  {projects.map((p) => <li key={p.id}><span className="font-medium text-ink">{p.name}</span> — {p.tagline}. <span className="font-mono text-[11.5px] text-muted">{p.stack.join(', ')}</span></li>)}
                </ul>
              </section>

              <div className="grid gap-8 sm:grid-cols-2">
                <section>
                  <H>Education</H>
                  {profile.education.map((e) => (
                    <div key={e.degree} className="mb-3">
                      <p className="font-medium">{e.degree}</p>
                      <p className="text-ink-soft">{e.school} · {e.period} · {e.detail}</p>
                    </div>
                  ))}
                </section>
                <section>
                  <H>Achievements</H>
                  <ul className="space-y-1 text-ink-soft">{profile.achievements.map((a) => <li key={a.label}><span className="text-ink">{a.label}:</span> {a.note}</li>)}</ul>
                </section>
              </div>

              <section>
                <H>Skills</H>
                <p className="text-ink-soft"><span className="text-ink">Product:</span> Problem discovery, workflow mapping, PRDs & user stories, prioritisation, metric design, wireframing, stakeholder communication.</p>
                {techFoundation.map((g) => <p key={g.group} className="mt-1 text-ink-soft"><span className="text-ink">{g.group}:</span> {g.items.join(', ')}.</p>)}
              </section>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
