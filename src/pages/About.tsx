import { Button, Arrow, PageHeader, Reveal, SectionHeader } from '../components/ui'
import { useTitle } from '../lib/useTitle'

const chapters = [
  {
    tag: 'Smartverge',
    title: 'Learned how requirements become features',
    body: 'As a Software Engineer Intern at Smartverge Technologies, I turned business requirements into technical specs and built 10+ REST APIs. I also worked on AI/LLM and RAG-based features, which got me interested in building AI products.',
  },
  {
    tag: 'SuperProcure',
    title: 'Built an internal CRM as a product',
    body: 'At SuperProcure, the sales and marketing team handled a lot of their work manually. I saw this as a product problem. I studied how the team worked, found the repetitive steps, and planned a CRM to automate them. I then built it from scratch. It reduced manual effort across team operations by 40%.',
  },
  {
    tag: 'Securelytix',
    title: "Founder's Office (Product)",
    body: "At Securelytix, I worked with the founders on product. I researched competitors in data privacy and DPDP compliance, found gaps in the market, and shared ideas that helped shape the product. I also explained India's DPDP Act in simple language for business customers.",
  },
]

const principles = [
  ['Understand the problem first', 'I talk to users and study the workflow before deciding what to build.'],
  ['Measure the result', 'I decide how success will be measured before building, and check it after.'],
  ['Respect engineering effort', 'I have written code myself, so I plan work with the real effort in mind.'],
  ['Write things down', 'I write clear PRDs and notes so everyone on the team is on the same page.'],
]

export default function About() {
  useTitle('About', 'The story behind Yash Agarwal — from software engineering to product.')
  return (
    <>
      <PageHeader eyebrow="About" title={<>From software engineering <em className="text-accent">to product.</em></>} intro="My background, my work so far, and how I like to work." />

      <section className="page py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <figure className="max-w-xs overflow-hidden rounded-2xl border border-line bg-card">
                <img src="/yash.jpg" alt="Yash Agarwal" width={413} height={531} className="aspect-[4/5] w-full object-cover object-top" />
                <figcaption className="border-t border-line px-5 py-3">
                  <p className="font-medium">Yash Agarwal</p>
                  <p className="text-sm text-muted">Bengaluru, India</p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <ol className="relative space-y-14 border-l border-line pl-8">
            {chapters.map((c, i) => (
              <Reveal key={c.tag} delay={i * 0.04}>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent ring-1 ring-accent" aria-hidden />
                  <p className="eyebrow">{String(i + 1).padStart(2, '0')} · {c.tag}</p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight">{c.title}</h2>
                  <p className="prose-body mt-4 max-w-xl text-[16px]">{c.body}</p>
                </li>
              </Reveal>
            ))}
            <Reveal>
              <li className="relative">
                <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-gain ring-4 ring-gain-soft" aria-hidden />
                <p className="eyebrow !text-gain">Now</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight">Looking for a product role</h2>
                <p className="prose-body mt-4 max-w-xl text-[16px]">I am looking for an APM or Product Manager role. I want to talk to users, write specs, work closely with engineers and take ownership of results.</p>
              </li>
            </Reveal>
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-card/50">
        <div className="page py-20">
          <SectionHeader eyebrow="Principles" title="How I like to work" />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {principles.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} className="h-full">
                <div className="h-full bg-card p-7">
                  <p className="font-serif text-2xl">{t}</p>
                  <p className="mt-2 text-base text-ink-soft">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/experience">See my experience <Arrow /></Button>
            <Button to="/case-studies" variant="outline">Read case studies</Button>
          </div>
        </div>
      </section>
    </>
  )
}
