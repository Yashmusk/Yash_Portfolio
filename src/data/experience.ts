export type Experience = {
  id: string
  company: string
  role: string
  period: string
  type: string
  oneLiner: string
  context: string
  productWork: { title: string; body: string }[]
  responsibilities: string[]
  pmMuscles: string[]
  lesson: string
  metric?: { value: string; label: string }
  highlight?: { title: string; steps: { label: string; body: string }[] }
}

export const experiences: Experience[] = [
  {
    id: 'securelytix',
    company: 'Securelytix',
    role: "Founder's Office (Product)",
    period: 'Sep 2026 – Present',
    type: 'Full-time',
    oneLiner:
      'Working with the founders on product and go-to-market. I connect what the technology can do with the problems customers actually have.',
    context:
      'Securelytix builds data-security and privacy products for businesses, including tokenization, key management and DPDP compliance. I work directly with the founders on product and business priorities.',
    productWork: [
      {
        title: 'Turned technical features into customer value',
        body: 'Translated data security, tokenization, key management and DPDP-related capabilities into clear value propositions that a business buyer can understand.',
      },
      {
        title: 'Researched competitors',
        body: 'Studied other data-privacy and DPDP compliance products: their features, target customers, messaging and pricing. Compared them to find gaps where Securelytix could stand out.',
      },
      {
        title: 'Helped shape the product',
        body: 'Shared research findings and feature ideas with the founders. These were used in discussions on what to build, what to prioritise and how to position the product.',
      },
      {
        title: 'Positioning and go-to-market',
        body: 'Supported product positioning and go-to-market work through technical research, website initiatives and customer-focused communication.',
      },
      {
        title: 'Explained the DPDP Act simply',
        body: "Broke down India's DPDP Act and DPDP Rules into simple points: what changes for a business, and how the product helps.",
      },
      {
        title: 'Product communication',
        body: 'Wrote educational and marketing content on data privacy and cybersecurity for business readers.',
      },
    ],
    responsibilities: [
      'Founder-led product and business initiatives',
      'Competitor and market research',
      'Value propositions for security and DPDP capabilities',
      'Product positioning, website and go-to-market support',
    ],
    pmMuscles: ['Competitor research', 'Value proposition', 'Positioning', 'Go-to-market', 'Customer understanding', 'Prioritisation'],
    lesson: 'Customers do not buy features like tokenization. They buy the problem it solves for them.',
    highlight: {
      title: 'Competitor research that fed into the product',
      steps: [
        { label: 'Identify', body: 'Listed the main products in data privacy and DPDP compliance.' },
        { label: 'Study', body: 'Looked at their features, target customers, messaging and pricing.' },
        { label: 'Compare', body: 'Put them side by side to see strengths and weak spots.' },
        { label: 'Find gaps', body: 'Found needs that were not well served.' },
        { label: 'Recommend', body: 'Shared feature and positioning ideas with the founders.' },
      ],
    },
  },
  {
    id: 'superprocure',
    company: 'SuperProcure',
    role: 'Software Development Engineer',
    period: 'Jul 2026 – Sep 2026',
    type: 'Full-time',
    oneLiner:
      'Built an internal CRM product from scratch. Automated repetitive work and cut manual effort across team operations by 40%.',
    context:
      'SuperProcure builds logistics procurement software for enterprises. The sales and marketing team did a lot of work by hand, so I took it up as a product problem and owned it end to end.',
    metric: { value: '40%', label: 'less manual effort across team operations' },
    productWork: [
      {
        title: 'Found the problem',
        body: 'The team tracked customers, leads, contacts and activities by hand, across sheets and messages. It was slow and things got missed.',
      },
      {
        title: 'Turned pain points into features',
        body: 'Studied how the team worked and turned their pain points into features for customer, lead, contact and activity management.',
      },
      {
        title: 'Automated repetitive work',
        body: 'Identified the steps people repeated every day and built features to automate them. This reduced manual effort by 40%.',
      },
      {
        title: 'Owned it end to end',
        body: 'From requirements and workflow design to building 20+ REST APIs with Node.js, Express and PostgreSQL, balancing user needs with technical feasibility.',
      },
    ],
    responsibilities: [
      'Requirements and workflow design for the CRM',
      'Feature prioritisation based on team pain points',
      '20+ REST APIs with Node.js, Express and PostgreSQL',
      'Working with the sales team and stakeholders on feedback',
    ],
    pmMuscles: ['Problem discovery', 'Requirements', 'Workflow design', 'Prioritisation', 'End-to-end ownership'],
    lesson: 'The most useful internal tool removes the work people repeat every day.',
    highlight: {
      title: 'Internal CRM: built from scratch as a product',
      steps: [
        { label: 'Observe', body: 'Watched how the team tracked leads and follow-ups by hand.' },
        { label: 'Find gaps', body: 'Listed repeated, slow and error-prone steps.' },
        { label: 'Plan', body: 'Defined users, features and what to build first.' },
        { label: 'Build', body: 'Built it end to end with 20+ REST APIs.' },
        { label: 'Result', body: '40% less manual effort.' },
      ],
    },
  },
  {
    id: 'smartverge',
    company: 'Smartverge Technologies',
    role: 'Software Engineer Intern',
    period: 'Dec 2025 – Jul 2026',
    type: 'Internship',
    oneLiner:
      'Turned business requirements into technical specs and backend features, and worked on AI/LLM and RAG-based features.',
    context:
      'At Smartverge Technologies LLP I worked on internal products and business workflows. This is where I learned how a requirement becomes a shipped feature.',
    metric: { value: '10+', label: 'REST APIs built for internal products and workflows' },
    productWork: [
      {
        title: 'Requirements to specs',
        body: 'Took business requirements and broke them into technical specifications and implementation tasks the team could build.',
      },
      {
        title: 'Built backend features',
        body: 'Developed 10+ REST APIs with Node.js, Express and PostgreSQL for internal products and business workflows.',
      },
      {
        title: 'AI and RAG features',
        body: 'Contributed to AI/LLM and RAG-based features, bringing generative AI into product experiences.',
      },
    ],
    responsibilities: [
      'Breaking requirements into specs and tasks',
      'Backend development with Node.js, Express and PostgreSQL',
      'AI/LLM and RAG feature development',
    ],
    pmMuscles: ['Requirement breakdown', 'Technical specs', 'AI product features'],
    lesson: 'A clear spec saves more time than fast code.',
  },
]
