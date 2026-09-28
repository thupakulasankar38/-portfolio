import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi'
import { identity, navLinks } from '../data/navigation'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line py-10 sm:py-12">
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[140%] -translate-x-1/2 rounded-[50%] opacity-[0.35]"
        style={{ background: 'radial-gradient(closest-side, var(--color-border), transparent)' }}
      />

      <div className="relative mx-auto max-w-shell px-6 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#home" data-cursor="hover" className="font-display text-lg font-semibold">
              {identity.logo}
            </a>
            <p className="mt-2 max-w-[220px] text-sm text-muted">{profile.role}</p>
          </div>



          <div className="flex gap-5">
            <a
              href={profile.linkedin}
              data-cursor="hover"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors duration-300 hover:text-foreground"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={profile.github}
              data-cursor="hover"
              aria-label="GitHub profile"
              className="text-muted transition-colors duration-300 hover:text-foreground"
            >
              <FiGithub size={18} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {identity.logo}. All rights reserved.
          </p>
          <a
            href="#home"
            data-cursor="hover"
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs text-muted transition-colors duration-300 hover:text-foreground"
          >
            Back to top <FiArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
