import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { revealOnScroll, fadeUp } from '../animations/animations'
import { marqueeSkills, skillCategories } from '../data/skills'

export default function Skills() {
  const track = [...marqueeSkills, ...marqueeSkills]

  return (
    <section id="skills" className="section-shell overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-6 sm:px-10">
        <SectionHeading label="Skills" heading="TOOLS & CAPABILITIES" />
      </div>

      <div className="relative mb-16 border-y border-line py-6">
        <div className="flex w-max whitespace-nowrap marquee-track">
          {track.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="mx-6 font-display text-4xl font-medium text-foreground/90 sm:text-6xl"
            >
              {skill}
              <span className="ml-6 inline-block align-middle text-base text-muted sm:ml-10">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-shell px-6 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div key={category.title} {...revealOnScroll(fadeUp)}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {category.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-surface/30 backdrop-blur-sm px-4 py-2 text-sm text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 hover:text-accent shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
