/**
 * Single source of truth for personal details.
 * Anything marked TODO is a placeholder — replace it before publishing.
 */
export const profile = {
  name: 'Yash Agarwal',
  firstName: 'Yash',
  location: 'Bengaluru, India',
  status: 'Open to APM / Product Manager roles',
  headline: 'I build at the intersection of technology, business and user behaviour.',
  intro:
    "I'm Yash, a technical product builder. I work in the Founder's Office (Product) at Securelytix, and before that I was a software engineer at SuperProcure, where I built an internal CRM that cut manual work by 40%. I like turning user problems into clear requirements and products that deliver real business value.",

  email: 'agarwalyash541@gmail.com',
  phone: '+91 93304 05473' as string,
  linkedin: 'https://www.linkedin.com/in/yash-agarwal-44108020b/',
  github: 'https://github.com/Yashmusk',
  leetcode: 'https://leetcode.com/u/Yashcoder24/',

  // Drop your resume into /public with exactly this file name.
  resumePath: '/Yash_Agarwal_Resume.pdf',

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'VIT Bhopal University',
      period: '2024 – 2026',
      detail: 'CGPA 8.0 / 10',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Techno India University',
      period: '2021 – 2024',
      detail: 'CGPA 7.78 / 10',
    },
  ],

  achievements: [
    { label: 'CodeChef', value: '3★', note: 'Max rating 1632' },
    { label: 'LeetCode', value: '1530', note: 'Max rating · 200+ problems solved' },
    { label: 'Codeforces', value: '900', note: 'Max rating' },
  ],
} as const
