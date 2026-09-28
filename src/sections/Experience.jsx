import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { revealOnScroll, fadeUp } from '../animations/animations'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-10 sm:py-12">
      <div className="mx-auto max-w-shell px-6 sm:px-10">
        <SectionHeading label="Experience" heading="WHERE I'VE WORKED" />

        <div className="flex flex-col">
          {experience.map((role) => (
            <motion.div
              key={`${role.role}-${role.year}`}
              {...revealOnScroll(fadeUp)}
              className="group grid gap-4 border-t border-line py-10 last:border-b sm:grid-cols-[1fr_1.4fr_1fr] sm:gap-10 sm:py-12"
            >
              <span className="font-mono text-sm text-muted">{role.year}</span>

              <div>
                <h3 className="font-display text-2xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {role.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{role.company}</p>
                <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted">
                  {role.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2 sm:justify-end">
                {role.tech.map((item) => (
                  <span
                    key={item}
                    className="h-fit rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {item}
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
