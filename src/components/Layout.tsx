import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useOutlet } from 'react-router-dom'
import { profile } from '../data/profile'

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/resume', label: 'Resume' },
]

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`sticky top-0 z-50 print:hidden transition-colors duration-300 ${scrolled || open ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <nav className="page flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="flex items-baseline gap-2" aria-label="Yash Agarwal — home">
          <span className="font-serif text-2xl italic leading-none">Yash Agarwal</span>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted sm:inline">/ product</span>
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.slice(1).map((n) => (
            <li key={n.to}>
              <NavLink to={n.to} className={({ isActive }) => `rounded-full px-3 py-1.5 text-base transition-colors ${isActive ? 'bg-ink/[0.06] text-ink' : 'text-muted hover:text-ink'}`}>
                {n.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <Link to="/contact" className="rounded-full bg-ink px-4 py-2 text-base font-medium text-paper transition-colors hover:bg-accent">Let’s talk</Link>
          </li>
        </ul>
        <button className="-mr-2 rounded-full p-2 lg:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <ul className="page flex flex-col pb-6 pt-2">
              {[...navItems, { to: '/contact', label: 'Contact' }].map((n, i) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `flex items-baseline gap-4 border-b border-line py-3.5 font-serif text-2xl ${isActive ? 'text-accent' : ''}`}>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>{n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-line print:hidden">
      <div className="page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl italic">Let’s build something useful.</p>
          <p className="prose-body mt-3 max-w-sm">{profile.status}. Based in {profile.location}.</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {[...navItems, { to: '/contact', label: 'Contact' }].map((n) => (
              <li key={n.to}><Link to={n.to} className="text-ink-soft hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li><a className="text-ink-soft hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="text-ink-soft hover:text-accent" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="text-ink-soft hover:text-accent" href={profile.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a></li>
            <li><a className="text-ink-soft hover:text-accent" href={`mailto:${profile.email}`}>Email</a></li>
          </ul>
        </div>
      </div>
      <div className="page flex flex-col gap-2 border-t border-line py-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Yash Agarwal</span>
        <span>Case studies are independent explorations unless stated otherwise.</span>
      </div>
    </footer>
  )
}

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <ScrollManager />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main id="main" key={location.pathname}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
