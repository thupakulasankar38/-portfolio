import { motion } from 'framer-motion'
import { revealOnScroll, fadeUp } from '../animations/animations'
import AnimatedText from './AnimatedText'

export default function SectionHeading({ label, heading, description, align = 'left' }) {
  return (
    <div className={`mb-14 sm:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-xl' : 'max-w-2xl'}`}>
      {label && (
        <motion.p
          {...revealOnScroll(fadeUp)}
          className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          {label}
        </motion.p>
      )}
      <AnimatedText
        as="h2"
        text={heading}
        className="font-display text-display-2 font-bold uppercase tracking-tight text-foreground"
      />
      {description && (
        <motion.p
          {...revealOnScroll(fadeUp)}
          className="mt-5 text-[15.5px] leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
