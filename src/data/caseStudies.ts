export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; tone?: 'info' | 'warn'; title: string; text: string }
  | { type: 'personas'; items: { name: string; who: string; goal: string; pain: string }[] }
  | { type: 'journey'; stages: { stage: string; doing: string; feeling: 'good' | 'neutral' | 'bad'; opportunity?: string }[] }
  | { type: 'table'; head: string[]; rows: string[][]; note?: string }
  | { type: 'priority'; items: { feature: string; impact: number; effort: number; bucket: 'Now' | 'Next' | 'Later' }[]; note?: string }
  | { type: 'stories'; items: { story: string; criteria: string[] }[] }
  | { type: 'metrics'; northStar: { name: string; why: string }; inputs: string[]; guardrails: string[] }
  | { type: 'wireframe'; id: 'sahi'; caption: string }

export type Section = { id: string; title: string; blocks: Block[] }

export type CaseStudy = {
  id: string
  company: string
  title: string
  industry: string
  kind: string
  year: string
  summary: string
  problem: string
  approach: string
  deliverables: string[]
  tldr: { label: string; value: string }[]
  sections: Section[]
}

const disclaimer = (company: string): Block => ({
  type: 'callout',
  tone: 'warn',
  title: 'Independent exploration',
  text: `This is a self-initiated case study. I have no affiliation with ${company}. Nothing here is a shipped feature, and every metric is a proposed target, not a result. Assumptions are labelled and would need validation through real user research.`,
})

export const caseStudies: CaseStudy[] = [
  // ───────────────────────────────── SAHI
  {
    id: 'sahi-trade-plan',
    company: 'Sahi',
    title: 'Trade Plan: helping new traders decide before they click',
    industry: 'Fintech · Trading',
    kind: 'Independent product exploration',
    year: '2025',
    summary:
      'A user-controlled weekly plan and a pre-trade risk check, designed to reduce impulsive trades without blocking anyone.',
    problem: 'New traders often place orders without a defined risk limit, and only see the risk after the trade goes wrong.',
    approach: 'User journey → JTBD → prioritisation → PRD excerpt → low-fi wireframes → metric tree with guardrails.',
    deliverables: ['Personas', 'Journey map', 'Prioritisation', 'PRD excerpt', 'Wireframes', 'Metrics'],
    tldr: [
      { label: 'Problem', value: 'Risk is invisible at the moment of decision' },
      { label: 'Bet', value: 'Show risk before the order, against a plan the user set' },
      { label: 'North Star', value: 'Weekly traders who stay within their own plan' },
    ],
    sections: [
      {
        id: 'context',
        title: 'Context',
        blocks: [
          disclaimer('Sahi'),
          {
            type: 'p',
            text: 'I have been investing and trading in Indian equities as a retail participant for over two years and have used several broker apps. A pattern I kept noticing — in my own behaviour first — was that order screens are optimised to make placing a trade fast, but rarely help you pause and ask “how much can I lose here, and is that OK?”.',
          },
          {
            type: 'p',
            text: 'I picked Sahi as the canvas because it positions itself around a modern trading experience, which makes it a natural place to ask: what would responsible speed look like?',
          },
        ],
      },
      {
        id: 'problem',
        title: 'Problem',
        blocks: [
          {
            type: 'callout',
            title: 'Problem statement',
            text: 'Beginner and intermediate traders place orders without a pre-defined risk limit. Because potential loss is not visible at the moment of decision, they overtrade and take outsized losses relative to their capital.',
          },
          {
            type: 'list',
            items: [
              'Hypothesis 1 — Most new traders don’t set a weekly or daily loss limit.',
              'Hypothesis 2 — Users who do set limits find them hard to track across many trades.',
              'Hypothesis 3 — Seeing the rupee loss at stop-loss before confirming changes position size.',
            ],
          },
          {
            type: 'p',
            text: 'These are hypotheses from personal experience and observation — the first step would be validating them with ~10 user interviews and a look at trade-frequency data.',
          },
        ],
      },
      {
        id: 'users',
        title: 'Target users',
        blocks: [
          {
            type: 'personas',
            items: [
              {
                name: 'The new intraday trader',
                who: '22–28, started trading in the last year, small capital',
                goal: 'Learn to trade profitably without blowing up the account',
                pain: 'Takes too many trades after a loss trying to “win it back”',
              },
              {
                name: 'The part-time swing trader',
                who: 'Salaried, trades a few times a week around work',
                goal: 'Grow capital steadily with limited time',
                pain: 'Sizes positions by feel; doesn’t know total exposure',
              },
            ],
          },
          {
            type: 'p',
            text: 'Job to be done: “When I’m about to place a trade, help me know if it fits the risk I said I was OK with — so I don’t regret it later.”',
          },
        ],
      },
      {
        id: 'journey',
        title: 'Current journey',
        blocks: [
          {
            type: 'journey',
            stages: [
              { stage: 'Spot setup', doing: 'Sees a chart move or a tip', feeling: 'good' },
              { stage: 'Open order', doing: 'Enters quantity, often by habit', feeling: 'neutral', opportunity: 'No link between quantity and risk' },
              { stage: 'Confirm', doing: 'Swipes / taps to place', feeling: 'neutral', opportunity: 'Loss at stop-loss is never shown' },
              { stage: 'Loss', doing: 'Trade hits stop or worse', feeling: 'bad' },
              { stage: 'Revenge', doing: 'Takes another, bigger trade', feeling: 'bad', opportunity: 'No pause, no plan to check against' },
            ],
          },
        ],
      },
      {
        id: 'landscape',
        title: 'Landscape',
        blocks: [
          {
            type: 'table',
            head: ['', 'Typical broker order flow', 'Separate journaling tools', 'Trade Plan (proposed)'],
            rows: [
              ['When risk is shown', 'After the trade, in P&L', 'After the trade, manually', 'Before confirming'],
              ['Who sets the limits', 'Broker / margin rules', 'User, outside the app', 'User, inside the app'],
              ['Effort to use', 'None', 'High — manual entry', 'Low — one-time weekly setup'],
              ['Friction on order', 'Minimal', 'n/a', 'Only near user’s own limits'],
            ],
            note: 'A generalised comparison based on my own use of several platforms — not a feature audit of any specific broker.',
          },
        ],
      },
      {
        id: 'solution',
        title: 'Proposed solution',
        blocks: [
          {
            type: 'p',
            text: 'Trade Plan has two parts that work together. The user stays in control at every step — nothing is enforced that they didn’t set themselves.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Weekly plan — a 30-second setup: capital for the week, max loss, max trades per day. A small progress bar shows P&L, remaining risk budget and trades left.',
              'Pre-trade risk snapshot — on the order screen: rupee loss if stop-loss hits, that loss as % of capital, risk/reward, and what remains of the weekly budget after this trade.',
              'Soft pause — if the user reaches their own weekly loss limit, the next order shows a pause screen requiring explicit acknowledgement. They can continue; it is a speed bump, not a wall.',
            ],
          },
          { type: 'wireframe', id: 'sahi', caption: 'Low-fi: weekly plan card and pre-trade risk snapshot on the order screen' },
        ],
      },
      {
        id: 'prioritisation',
        title: 'Prioritisation',
        blocks: [
          {
            type: 'priority',
            items: [
              { feature: 'Pre-trade risk snapshot', impact: 5, effort: 2, bucket: 'Now' },
              { feature: 'Weekly plan setup', impact: 4, effort: 2, bucket: 'Now' },
              { feature: 'Soft pause at user limit', impact: 4, effort: 3, bucket: 'Next' },
              { feature: 'Indicator explainers on charts', impact: 3, effort: 3, bucket: 'Next' },
              { feature: 'Weekly reflection summary', impact: 3, effort: 2, bucket: 'Later' },
              { feature: 'Personalised limit suggestions', impact: 3, effort: 5, bucket: 'Later' },
            ],
            note: 'Impact and effort are my estimates on a 1–5 scale, to be revisited with engineering and data.',
          },
          {
            type: 'p',
            text: 'The snapshot ships first because it is useful even for users who never set a plan — it only needs the stop-loss they already enter. That makes it the lowest-risk way to test the core hypothesis.',
          },
        ],
      },
      {
        id: 'prd',
        title: 'PRD excerpt',
        blocks: [
          {
            type: 'stories',
            items: [
              {
                story: 'As a trader, I want to see how much I lose if my stop-loss hits, before I place the order, so I can size the trade sensibly.',
                criteria: [
                  'Shown when a stop-loss price is entered on the order screen',
                  'Displays ₹ loss, % of capital and risk/reward if target is set',
                  'Updates within 100 ms as quantity or price changes',
                  'Collapsible; collapsed state is remembered',
                ],
              },
              {
                story: 'As a trader, I want to set a weekly loss limit, so I can stop before a bad week becomes a bad month.',
                criteria: [
                  'Optional setup, editable any time; edits apply from next trade',
                  'Shows remaining risk budget and trades left today',
                  'At 100% of limit, next order shows a pause screen with explicit continue',
                ],
              },
            ],
          },
          {
            type: 'table',
            head: ['Non-functional requirement', 'Why'],
            rows: [
              ['No added latency to order placement', 'Speed is core to trading — the snapshot must never slow the order path'],
              ['Calculations transparent and explainable', 'Users must trust the number they see'],
              ['Compliance & legal review before launch', 'Any friction in the order flow needs regulatory sign-off'],
            ],
          },
        ],
      },
      {
        id: 'metrics',
        title: 'Success metrics',
        blocks: [
          {
            type: 'metrics',
            northStar: {
              name: 'Weekly active traders who stay within their own plan',
              why: 'Captures both adoption (they set a plan) and the behaviour change we want (they respect it).',
            },
            inputs: ['% of active traders who set a weekly plan', 'Snapshot views per order', '% of orders where quantity changes after seeing the snapshot', 'Self-reported confidence (in-app survey)'],
            guardrails: ['Order completion rate', 'Order placement latency', 'Week-4 retention of plan users vs. non-users'],
          },
          {
            type: 'table',
            head: ['Metric', 'Type', 'Target (first 3 months)'],
            rows: [
              ['Traders who stay within their own weekly plan', 'North Star', '70% of plan users'],
              ['Active traders who set a weekly plan', 'Input', '20%'],
              ['Orders where the risk snapshot is seen', 'Input', '60%'],
              ['Orders where quantity is lowered after the snapshot', 'Input', '10%'],
              ['Trades placed beyond the user’s own daily limit', 'Outcome', '30% fewer'],
              ['Users who say they understand their risk better', 'Input', '60% in survey'],
              ['Order completion rate', 'Guardrail', 'No drop of more than 2%'],
              ['Extra time added to placing an order', 'Guardrail', 'Under 100 ms'],
              ['Week-4 retention of plan users', 'Guardrail', 'Equal to or higher than non-users'],
            ],
            note: 'These are targets I would set for an A/B test, not results.',
          },
        ],
      },
      {
        id: 'rollout',
        title: 'Rollout & risks',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Internal + beta cohort: snapshot only, measure engagement and quantity changes',
              'A/B test on new traders (<6 months): snapshot vs. control, watch guardrails',
              'Add weekly plan and soft pause to the treatment group',
            ],
          },
          {
            type: 'table',
            head: ['Risk', 'Mitigation'],
            rows: [
              ['Fewer trades could hurt brokerage revenue', 'Frame as retention play; measure long-term LTV, not week-1 volume'],
              ['Users find it patronising', 'Fully opt-in limits, collapsible snapshot, neutral language'],
              ['Wrong number = lost trust', 'Show formula on tap; test edge cases (F&O lot sizes, gaps)'],
              ['Regulatory implications of order friction', 'Legal review; never block, only inform'],
            ],
          },
        ],
      },
      {
        id: 'learnings',
        title: 'What I learned',
        blocks: [
          {
            type: 'p',
            text: 'The hard part wasn’t the feature — it was the incentive question. A broker earns on activity, so a “trade less” feature has to be argued as retention and trust. Writing the guardrail metrics forced me to make that case honestly instead of assuming it.',
          },
        ],
      },
    ],
  },

]
