import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { pageTransition } from './animations/animations'

import Projects from './sections/Projects'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

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
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
