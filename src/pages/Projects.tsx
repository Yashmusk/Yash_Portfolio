import ProjectCard from '../components/ProjectCard'
import { Arrow, Button, PageHeader, Reveal } from '../components/ui'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { useTitle } from '../lib/useTitle'

export default function Projects() {
  useTitle('Projects', 'Products Yash Agarwal has built — framed by problem, users, decisions and metrics.')
  return (
    <>
      <PageHeader eyebrow="Projects" title={<>Things I’ve built, <em className="text-accent">framed as products.</em></>} intro="Each project started with a problem I wanted to understand. Open the product breakdown to see who it’s for, what’s built versus planned, the architecture and the trade-offs." />
      <section className="page space-y-6 py-16">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={0.03 * i}>
            <ProjectCard p={p} defaultOpen={i === 0} />
          </Reveal>
        ))}
        <Reveal className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="text-ink-soft">More experiments and code on GitHub.</p>
          <Button href={profile.github} external variant="outline">github.com/Yashmusk <Arrow /></Button>
        </Reveal>
      </section>
    </>
  )
}
