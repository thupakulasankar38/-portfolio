import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import { revealOnScroll, fadeUp, scaleIn } from '../animations/animations'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden py-10 sm:py-12">
      <div className="mx-auto max-w-shell px-6 sm:px-10">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">About</p>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <h2 className="font-display text-display-2 font-medium text-foreground">
              {profile.aboutHeading.map((line, i) => (
                <AnimatedText key={line} as="span" text={line} className="block" delay={i * 0.06} />
              ))}
            </h2>

            <div className="mt-10 max-w-lg space-y-4">
              {profile.aboutBody.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  {...revealOnScroll(fadeUp)}
                  className="text-[15.5px] leading-relaxed text-muted"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            {...revealOnScroll(scaleIn)}
            className="relative aspect-[3/4] w-full max-w-sm justify-self-center overflow-hidden rounded-2xl lg:justify-self-end bg-muted"
          >
            <img 
              src="https://images.unsplash.com/photo-1732449102690-5d48670c62dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHlkZXJhYmFkJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D" 
              alt="Hyderabad" 
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-background p-4">
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Based in</p>
              <p className="mt-1 font-display text-lg text-foreground">{profile.location}</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-12 sm:mt-28 sm:grid-cols-3">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...revealOnScroll(fadeUp)}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-display text-5xl font-medium text-foreground sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
