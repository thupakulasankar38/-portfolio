import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A subtle custom cursor for desktop/fine-pointer devices.
 * - Follows the mouse with a light spring lag.
 * - Scales up and shows a label when hovering elements marked
 *   data-cursor="hover" (generic) or data-cursor="view" (project cards).
 * - Fully disabled on touch devices — renders nothing.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState('default') // default | hover | view
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 28, stiffness: 350, mass: 0.4 })
  const springY = useSpring(cursorY, { damping: 28, stiffness: 350, mass: 0.4 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return undefined

    setEnabled(true)
    document.documentElement.classList.add('cursor-enabled')

    function handleMove(e) {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target.closest('[data-cursor]')
      setVariant(target ? target.getAttribute('data-cursor') : 'default')
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.classList.remove('cursor-enabled')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!enabled) return null

  const isView = variant === 'view'
  const isHover = variant === 'hover'

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full bg-foreground mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: isView ? 76 : isHover ? 40 : 14,
        height: isView ? 76 : isHover ? 40 : 14,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {isView && (
        <span className="font-mono text-[11px] uppercase tracking-wide text-background">
          View
        </span>
      )}
    </motion.div>
  )
}
