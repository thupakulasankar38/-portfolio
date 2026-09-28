import { motion } from 'framer-motion'
import { easeOut } from '../animations/animations'

/**
 * Splits `text` into words and reveals them with a staggered slide-up.
 * Use for hero/section headings. `as` controls the wrapping tag.
 */
export default function AnimatedText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  once = true,
}) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: delay },
    },
  }

  const word = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.7, ease: easeOut } },
  }

  return (
    <Tag className={className}>
      <motion.span
        className="inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        variants={container}
      >
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 align-top">
            <motion.span className="inline-block" variants={word}>
              {w}
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
