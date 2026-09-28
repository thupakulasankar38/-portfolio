import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { identity, navLinks, ctaLabel, ctaHref } from '../data/navigation'
import { easeOut } from '../animations/animations'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-5 sm:px-10">
        <a href="#home" data-cursor="hover" className="font-display text-base font-semibold tracking-tight">
          {identity.logo}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          data-cursor="hover"
          className="hidden rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-foreground md:inline-flex"
        >
          {ctaLabel}
        </a>

        <button
          type="button"
          data-cursor="hover"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="overflow-hidden border-t border-line bg-background md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: easeOut }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-display text-2xl text-foreground"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.06, ease: easeOut }}
                className="pt-4"
              >
                <a
                  href={ctaHref}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-secondary"
                >
                  {ctaLabel}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, children }) {
  return (
    <a href={href} data-cursor="hover" className="group relative text-sm text-muted transition-colors duration-300 hover:text-foreground">
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
    </a>
  )
}
