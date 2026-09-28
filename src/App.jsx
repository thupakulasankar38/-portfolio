import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { pageTransition } from './animations/animations'

const Projects = React.lazy(() => import('./sections/Projects'))
const About = React.lazy(() => import('./sections/About'))
const Experience = React.lazy(() => import('./sections/Experience'))
const Skills = React.lazy(() => import('./sections/Skills'))
const Contact = React.lazy(() => import('./sections/Contact'))
const Footer = React.lazy(() => import('./sections/Footer'))

export default function App() {
  return (
    <>
      <CustomCursor />
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageTransition}
        className="min-h-screen bg-background"
      >
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-[100vh]" />}>
            <Projects />
            <About />
            <Experience />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </motion.div>
    </>
  )
}
