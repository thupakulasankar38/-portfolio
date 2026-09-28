import { motion } from 'framer-motion'
import { revealOnScroll, fadeUp, scaleIn, slideInLeft, slideInRight } from '../animations/animations'
import Button from './Button'

function PlaceholderVisual({ gradient, image, alt, className = '' }) {
  if (image) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    )
  }
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  )
}

function Meta({ project, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wide text-muted ${className}`}>
      <span>{project.category}</span>
      <span className="h-1 w-1 rounded-full bg-line" />
      <span>{project.year}</span>
    </div>
  )
}

function TechRow({ tech }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default function ProjectCard({ project }) {
  const { id, title, description, layout } = project

  if (layout === 'overlap') {
    return (
      <motion.article {...revealOnScroll(fadeUp)} className="group relative">
        <PlaceholderVisual
          gradient={project.gradient}
          image={project.image}
          alt={title}
          className="aspect-[16/10] w-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="relative -mt-16 ml-4 sm:-mt-20 sm:ml-8">
          <div className="inline-block rounded-2xl bg-surface p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] sm:p-8">
            <Meta project={project} />
            <h3 className="mt-3 font-display text-2xl font-medium text-foreground sm:text-3xl">
              {title}
            </h3>
            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted">{description}</p>
            <Button
              as="a"
              href={project.href}
              data-cursor="view"
              variant="outline"
              className="mt-5 !px-5 !py-2.5 text-xs"
            >
              View Project
            </Button>
          </div>
        </div>
      </motion.article>
    )
  }

  if (layout === 'split') {
    return (
      <div className="grid items-start gap-8 sm:grid-cols-2 sm:gap-6">
        <motion.div {...revealOnScroll(slideInLeft)} className="sm:pt-14">
          <span className="font-mono text-xs text-muted">{id}</span>
          <h3 className="mt-3 font-display text-2xl font-medium text-foreground sm:text-3xl">
            {title}
          </h3>
          <Meta project={project} className="mt-3" />
          <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-muted">{description}</p>
          <TechRow tech={project.tech} />
          <Button
            as="a"
            href={project.href}
            data-cursor="view"
            variant="ghost"
            className="mt-6 !px-0 !py-0"
          >
            View Project
          </Button>
        </motion.div>
        <motion.div {...revealOnScroll(slideInRight)}>
          <a href={project.href} data-cursor="view" className="group block">
            <PlaceholderVisual
              gradient={project.gradient}
              image={project.image}
              alt={title}
              className="aspect-[4/5] w-[80%] ml-auto rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </a>
        </motion.div>
      </div>
    )
  }

  if (layout === 'fullwidth') {
    return (
      <motion.article {...revealOnScroll(scaleIn)} className="group">
        <a href={project.href} data-cursor="view" className="block">
          <PlaceholderVisual
            gradient={project.gradient}
            image={project.image}
            alt={title}
            className="aspect-[21/10] w-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </a>
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs text-muted">{id}</span>
            <h3 className="mt-2 font-display text-3xl font-medium text-foreground sm:text-4xl">
              {title}
            </h3>
          </div>
          <div className="sm:text-right">
            <Meta project={project} className="sm:justify-end" />
            <p className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-muted sm:ml-auto">
              {description}
            </p>
          </div>
        </div>
      </motion.article>
    )
  }

  if (layout === 'editorial') {
    return (
      <motion.a
        {...revealOnScroll(fadeUp)}
        href={project.href}
        data-cursor="view"
        className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line py-8 sm:grid-cols-[3rem_1fr_10rem_auto]"
      >
        <span className="font-mono text-sm text-muted">{id}</span>
        <div>
          <h3 className="font-display text-xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 hidden max-w-sm text-sm text-muted sm:block">{description}</p>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-wide text-muted sm:block">
          {project.category}
        </span>
        <span className="justify-self-end text-sm text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View →
        </span>
      </motion.a>
    )
  }

  // default: 'horizontal'
  return (
    <motion.article {...revealOnScroll(fadeUp)} className="group grid gap-8 sm:grid-cols-[0.85fr_1.15fr] sm:items-center sm:gap-12">
      <div className="order-2 sm:order-1">
        <span className="font-mono text-xs text-muted">{id}</span>
        <h3 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
          {title}
        </h3>
        <Meta project={project} className="mt-4" />
        <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-muted">{description}</p>
        <TechRow tech={project.tech} />
        <Button
          as="a"
          href={project.href}
          data-cursor="view"
          variant="primary"
          className="mt-6 !px-5 !py-2.5 text-xs"
        >
          View Project
        </Button>
      </div>
      <a
        href={project.href}
        data-cursor="view"
        className="order-1 block sm:order-2"
      >
        <PlaceholderVisual
          gradient={project.gradient}
          image={project.image}
          alt={title}
          className="aspect-[4/3] w-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </a>
    </motion.article>
  )
}
