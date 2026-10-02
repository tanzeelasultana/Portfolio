import { GithubIcon } from './Icons'

export default function ProjectCard({ project }) {
  const { title, tag, description, tech, features, github } = project

  return (
    <article className="card flex h-full flex-col">
      <p className="text-sm text-accent">{tag}</p>
      <h3 className="mt-1 font-display text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-soft">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {tech.map((t) => <li key={t} className="badge">{t}</li>)}
      </ul>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300 marker:text-accent">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-auto self-start !py-2 text-sm" style={{ marginTop: '1.25rem' }}>
          <GithubIcon className="h-4 w-4" /> View on GitHub
        </a>
      )}
    </article>
  )
}
