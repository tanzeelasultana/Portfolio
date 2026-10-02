import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">Projects</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
