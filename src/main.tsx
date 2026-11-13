import { MotionConfig } from 'framer-motion'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './index.css'
import About from './pages/About'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Skills from './pages/Skills'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>,
)
