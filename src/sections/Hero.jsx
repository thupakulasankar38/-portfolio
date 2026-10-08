import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import AnimatedText from '../components/AnimatedText'
import Button from '../components/Button'
import { profile } from '../data/profile'
import { fadeUp, fadeIn, easeOut } from '../animations/animations'
import shankarImg from '../data/assets/image_a9aa9945.jpg'

export default function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center pt-28">
      {/* Background grid + floating shapes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />
      {/* Background Gradient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 md:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-[120px]" />

      {/* Hero Image */}
      <motion.div
        className="pointer-events-none absolute right-[5%] lg:right-[10%] bottom-16 hidden md:block z-10"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: easeOut }}
      >
        <div className="relative w-[220px] lg:w-[320px]">
          {/* Image inner glow/backdrop */}
          <div className="absolute inset-0 rounded-[3rem] bg-accent/20 blur-3xl -z-10 opacity-40 animate-pulse" />
          <motion.img
            src={shankarImg}
            alt={profile.nameLine1}
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-shell px-6 sm:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/50 backdrop-blur-sm px-3 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
          <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.2em] text-foreground/80">Available for work</span>
        </motion.div>
        
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          {profile.label}
        </motion.p>

        <h1 className="font-display text-display-1 font-bold uppercase tracking-tight text-foreground">
          <AnimatedText as="span" text={profile.nameLine1} className="block" />
          <AnimatedText as="span" text={profile.nameLine2} className="block" delay={0.08} />
        </h1>

        <div className="mt-8 flex flex-col gap-4 sm:gap-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="w-fit font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/50"
          >
            {profile.role}
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            className="max-w-md text-[15px] leading-relaxed text-muted"
          >
            {profile.heroDescription}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.75 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Button as="a" href="#work" variant="primary">
            View Work
          </Button>
          <Button as="a" href="/Shankar_Frontend_Developer_Resume (2) (1).docx" download variant="outline" showArrow={false}>
            Download Resume
          </Button>
          <Button as="a" href="#contact" variant="outline" showArrow={false}>
            Contact
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        aria-label="Scroll to work section"
        data-cursor="hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors duration-300 hover:text-foreground"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <FiArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
