export type Project = {
  id: string
  name: string
  tagline: string
  category: string
  github?: string
  stack: string[]
  problem: string
  users: string[]
  insight: string
  solution: string
  built: string[]
  planned: string[]
  architecture: string[][]
  decisions: { title: string; body: string }[]
  /** Proposed metrics with target values (targets, not results). */
  metrics: { name: string; target: string }[]
  /** Short note on verification status, shown on the card. */
  statusNote: string
}

export const projects: Project[] = [
  {
    id: 'opssync',
    name: 'OpsSync',
    tagline: 'A sales & customer intelligence OS for omnichannel D2C brands',
    category: 'B2B SaaS · Personal project',
    github: 'https://github.com/Yashmusk/OpsSync',
    stack: ['React', 'Node.js', 'Express', 'Database-backed API'],
    problem:
      'D2C brands that sell across their website, marketplaces and offline have customer, sales and feedback data spread across different tools. Nobody — sales, ops or the founder — gets one clear picture of a customer or the pipeline.',
    users: ['Sales teams', 'Customer relationship managers', 'Business operations', 'Founders & management'],
    insight:
      'The real problem is not missing data — it is fragmented data. Each team owns a slice and the decisions that need the whole picture end up being made on gut feel.',
    solution:
      'One operating layer that brings customers, interactions, sales activity and follow-ups together, with role-based views for the people doing the work and the people making decisions.',
    built: [
      'Client and server application structure (React frontend, Node/Express backend)',
      'Product modules defined: customer profiles, activity tracking, KPI dashboards, drill-down analytics',
      'Core CRM foundation: customer records and activity tracking',
    ],
    planned: [
      'Follow-up management and reminders',
      'Multi-channel sales analytics',
      'Customer feedback management',
      'Management dashboards and reporting',
      'AI-assisted business insights',
    ],
    architecture: [
      ['Sales rep', 'Ops / CRM', 'Founder'],
      ['React client · role-based views'],
      ['Express API · auth · business logic'],
      ['Customers', 'Interactions', 'Activities', 'Sales'],
    ],
    decisions: [
      {
        title: 'Start with the activity log, not the dashboard',
        body: 'Dashboards are only as good as the data under them. Capturing interactions reliably comes first; analytics come after.',
      },
      {
        title: 'Roles before features',
        body: 'A rep needs “who do I call today”; a founder needs “where are we leaking revenue”. Defining roles early keeps each view focused.',
      },
    ],
    metrics: [
      { name: 'Customer interactions logged in the CRM', target: '90% within 2 months' },
      { name: 'Follow-ups completed on time', target: '85% or more' },
      { name: 'Team members active every week', target: '80% of each role' },
      { name: 'Time to check a customer’s status', target: 'Under 1 minute' },
    ],
    statusNote: '',
  },
  {
    id: 'notification-system',
    name: 'AI Job & Interview Tracker',
    tagline: 'Tracks every application and interview, sends reminders, and helps you prepare with AI',
    category: 'Consumer · AI · Personal project',
    github: 'https://github.com/Yashmusk/Notification-System',
    stack: ['React', 'Node.js', 'MongoDB', 'Redis', 'BullMQ', 'Gemini API'],
    problem:
      'Job seekers juggle dozens of applications, interview rounds and follow-ups across email, job portals and notes. Deadlines slip not because people don’t care, but because the information lives in too many places.',
    users: ['Students and early-career job seekers', 'Anyone running multiple interview processes in parallel'],
    insight:
      'The job here is reducing cognitive load. A tracker alone is a spreadsheet with a UI — the value comes from the system nudging you at the right moment.',
    solution:
      'A single pipeline for every application and interview round, with notes, reminders handled by a background job queue so they fire on time, and Gemini-powered interview preparation.',
    built: [
      'Authentication with JWT',
      'Interview pipeline management',
      'Application tracking with notes',
      'Reminder scheduling with Redis + BullMQ',
      'Personalised interview preparation with the Gemini API',
    ],
    planned: ['Email / push delivery channels', 'Calendar sync', 'Weekly summary digest'],
    architecture: [
      ['Job seeker'],
      ['React web app'],
      ['Node / Express API · JWT auth'],
      ['MongoDB', 'Redis + BullMQ → reminders', 'Gemini API → interview prep'],
    ],
    decisions: [
      {
        title: 'Queue, not cron',
        body: 'BullMQ on Redis gives per-reminder scheduling, retries and persistence — a missed reminder defeats the product’s whole purpose.',
      },
      {
        title: 'Pipeline over list',
        body: 'Modelling stages (applied → screening → rounds → offer) matches how people think about their search and makes “what’s next” obvious.',
      },
    ],
    metrics: [
      { name: 'Reminders delivered on time', target: '99% or more' },
      { name: 'Reminders that lead to an action', target: '60%' },
      { name: 'Applications tracked per active user', target: '10 or more' },
      { name: 'Users still active after 4 weeks', target: '40%' },
    ],
    statusNote: '',
  },
  {
    id: 'stockkhoj',
    name: 'StockKhoj',
    tagline: 'Making stock research less intimidating for retail investors',
    category: 'Fintech · Personal project',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js', 'LLM APIs'],
    problem:
      'Retail investors bounce between screeners, charts, news and filings to understand a single company. The information exists — it is just scattered and written for experts.',
    users: ['First-time and early retail investors', 'Self-directed investors who research before buying'],
    insight:
      'Beginners don’t need more data; they need context. “What does this number mean, and should I care?” is the real question.',
    solution:
      'A screening and research tool that pulls ticker data into a clean dashboard, visualises it, and explores AI-assisted explanations — positioned strictly as research help, not advice.',
    built: [
      'Ticker-based stock data retrieval via external APIs',
      'Ticker storage in PostgreSQL',
      'Dashboard visualisations with Chart.js',
      'Node/Express backend processing layer',
    ],
    planned: ['AI-assisted summaries with sources', 'Plain-language ratio explanations', 'Watchlists'],
    architecture: [
      ['Retail investor'],
      ['React dashboard · Chart.js'],
      ['Express API · data engine', 'AI processing layer'],
      ['PostgreSQL tickers', 'Market data APIs'],
    ],
    decisions: [
      {
        title: 'Designing around API rate limits',
        body: 'Alpha Vantage’s free-tier limits broke the experience quickly. I explored Yahoo Finance via an npm package as an alternative — a reminder that data access is a product constraint, not just an engineering one.',
      },
      {
        title: 'Research, not recommendations',
        body: 'The product explains and visualises; it never says buy or sell. That line matters for trust and for regulation.',
      },
    ],
    metrics: [
      { name: 'Time to first useful insight on a stock', target: 'Under 30 seconds' },
      { name: 'Stock searches per session', target: '3 or more' },
      { name: 'Users who return within a week', target: '30%' },
      { name: 'Data load time (with caching)', target: 'Under 2 seconds' },
    ],
    statusNote: 'Research tool only. It does not give investment advice.',
  },
  {
    id: 'collabify',
    name: 'Collabify',
    tagline: 'Real-time chat and collaboration',
    category: 'Collaboration · Personal project',
    stack: ['React', 'Node.js', 'Express', 'Socket.io'],
    problem:
      'Small teams need a lightweight place to talk and coordinate in real time without the weight of enterprise tools.',
    users: ['Small teams', 'Student project groups'],
    insight:
      'In collaboration products, perceived speed is the feature. A message that arrives a second late feels broken.',
    solution: 'A real-time chat application built on WebSockets, focused on fast, reliable message delivery.',
    built: ['Real-time messaging over Socket.io', 'React client and Express server'],
    planned: ['Presence and typing indicators', 'Threads', 'File sharing'],
    architecture: [['Team members'], ['React client'], ['Express + Socket.io server'], ['Message store']],
    decisions: [
      {
        title: 'WebSockets over polling',
        body: 'Persistent connections keep latency low and server load predictable — the right trade-off for chat.',
      },
    ],
    metrics: [
      { name: 'Message delivery time', target: 'Under 200 ms' },
      { name: 'Messages delivered successfully', target: '99.9%' },
      { name: 'Messages per active user per day', target: '20 or more' },
      { name: 'Teams still active after 7 days', target: '30%' },
    ],
    statusNote: '',
  },
]
