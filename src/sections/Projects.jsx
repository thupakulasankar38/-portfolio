import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const editorialProjects = projects.filter((p) => p.layout === 'editorial')
  const featuredProjects = projects.filter((p) => p.layout !== 'editorial')

  return (
    <section id="work" className="section-shell py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-6 sm:px-10">
        <SectionHeading
          label="Selected Work"
          heading="RECENT PROJECTS"
          description="A handful of projects that show different sides of how I work — from full builds to focused design collaborations."
        />

        <div className="flex flex-col gap-24 sm:gap-32">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {editorialProjects.length > 0 && (
          <div className="mt-32 sm:mt-48">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              More
            </p>
            <div className="border-t border-line">
              {editorialProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
