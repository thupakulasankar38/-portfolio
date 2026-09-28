import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'
import AnimatedText from '../components/AnimatedText'
import { revealOnScroll, fadeUp } from '../animations/animations'
import { profile } from '../data/profile'

const ctaLines = ["LET'S", 'CREATE', 'SOMETHING.']

export default function Contact() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden py-10 sm:py-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-shell px-6 sm:px-10">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">Contact</p>

        <a
          href={`mailto:${profile.email}`}
          data-cursor="hover"
          className="group block font-display text-display-1 font-medium leading-[0.92] text-foreground"
        >
          {ctaLines.map((line, i) => (
            <AnimatedText key={line} as="span" text={line} className="block" delay={i * 0.08} />
          ))}
        </a>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <motion.a
            {...revealOnScroll(fadeUp)}
            href={`mailto:${profile.email}`}
            data-cursor="hover"
            className="group flex items-center justify-between gap-4 sm:col-span-2"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">Email</p>
              <p className="mt-1.5 font-display text-lg text-foreground">{profile.email}</p>
            </div>
            <FiArrowUpRight
              size={20}
              className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
            />
          </motion.a>

          <motion.div {...revealOnScroll(fadeUp)} transition={{ delay: 0.1 }}>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">Phone</p>
            <p className="mt-1.5 flex items-center gap-2 font-display text-lg text-foreground">
              <FiPhone size={15} className="text-muted" />
              {profile.phone}
            </p>
          </motion.div>

          <motion.div {...revealOnScroll(fadeUp)} transition={{ delay: 0.15 }} className="flex gap-6">
            <a
              href={profile.linkedin}
              data-cursor="hover"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.github}
              data-cursor="hover"
              aria-label="GitHub profile"
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              <FiGithub size={16} /> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
