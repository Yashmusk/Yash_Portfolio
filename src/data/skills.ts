export type Evidence = { label: string; to: string }

export type SkillArea = {
  area: string
  summary: string
  practiced: { skill: string; evidence: Evidence[] }[]
  developing: string[]
}

export const pmSkills: SkillArea[] = [
  {
    area: 'Discovery',
    summary: 'Finding the problem worth solving before committing to a solution.',
    practiced: [
      { skill: 'Problem identification', evidence: [{ label: 'SuperProcure CRM', to: '/experience#superprocure' }, { label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Workflow & journey mapping', evidence: [{ label: 'SuperProcure CRM', to: '/experience#superprocure' }, { label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Personas & JTBD', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Hypothesis-driven research', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
    ],
    developing: ['Running user interviews at scale', 'Surveys', 'Usability testing'],
  },
  {
    area: 'Strategy',
    summary: 'Deciding where to play and why it matters to the business.',
    practiced: [
      { skill: 'Opportunity framing', evidence: [{ label: 'OpsSync', to: '/projects#opssync' }, { label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Positioning & value proposition', evidence: [{ label: 'Securelytix', to: '/experience#securelytix' }] },
      { skill: 'Competitor research', evidence: [{ label: 'Securelytix', to: '/experience#securelytix' }] },
      { skill: 'Go-to-market support', evidence: [{ label: 'Securelytix', to: '/experience#securelytix' }] },
      { skill: 'Business model reasoning', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
    ],
    developing: ['Roadmapping across quarters', 'Product-market fit measurement'],
  },
  {
    area: 'Execution',
    summary: 'Turning a decision into something a team can build.',
    practiced: [
      { skill: 'PRDs, user stories & acceptance criteria', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Prioritisation (impact vs effort)', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Technical feasibility & trade-offs', evidence: [{ label: 'StockKhoj', to: '/projects#stockkhoj' }, { label: 'Job & Interview Tracker', to: '/projects#notification-system' }] },
      { skill: 'Requirements to technical specs', evidence: [{ label: 'Smartverge', to: '/experience#smartverge' }, { label: 'SuperProcure', to: '/experience#superprocure' }] },
      { skill: 'Stakeholder collaboration', evidence: [{ label: 'SuperProcure', to: '/experience#superprocure' }, { label: 'Securelytix', to: '/experience#securelytix' }] },
    ],
    developing: ['Sprint planning as a PM', 'Leading cross-functional launches'],
  },
  {
    area: 'Analytics',
    summary: 'Knowing what success looks like and how to tell if we got there.',
    practiced: [
      { skill: 'North Star & metric trees', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Guardrail metrics', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Experiment design', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'SQL & PostgreSQL', evidence: [{ label: 'SuperProcure', to: '/experience#superprocure' }, { label: 'Smartverge', to: '/experience#smartverge' }] },
    ],
    developing: ['Cohort & funnel analysis on live data', 'Product analytics tools (Mixpanel / Amplitude)'],
  },
  {
    area: 'Business & growth',
    summary: 'Understanding how products make and keep money.',
    practiced: [
      { skill: 'Retention-led thinking', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'Business incentives & trade-offs', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
    ],
    developing: ['CAC / LTV & unit economics', 'Pricing experiments in production'],
  },
  {
    area: 'Design',
    summary: 'Communicating ideas visually enough to test them.',
    practiced: [
      { skill: 'Low-fidelity wireframes', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
      { skill: 'User flows', evidence: [{ label: 'Sahi case study', to: '/case-studies/sahi-trade-plan' }] },
    ],
    developing: ['Figma prototyping', 'Information architecture'],
  },
]

export const techFoundation = [
  {
    group: 'Building products',
    items: ['JavaScript', 'React', 'Node.js', 'Express', 'HTML / CSS', 'Java', 'Python', 'C++'],
    why: 'I can read a codebase, prototype an idea myself, and understand what a “small change” really costs.',
  },
  {
    group: 'Data & systems',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BullMQ', 'REST APIs', 'JWT', 'Socket.io', 'Docker'],
    why: 'I can talk data models, queues, latency and auth with engineers — and spot feasibility issues early.',
  },
  {
    group: 'AI products & analytics',
    items: ['Generative AI', 'LLMs', 'RAG', 'Prompt engineering', 'Gemini API', 'SQL', 'KPI dashboards', 'Excel'],
    why: 'I have built AI/LLM and RAG features, so I know what AI can and cannot do well. I can also pull my own numbers with SQL.',
  },
]
