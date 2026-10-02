import Reveal from './Reveal'
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">Experience</h2>
          <ol className="relative space-y-6 border-l border-edge pl-6">
            {experiences.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[30px] top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-ink" aria-hidden="true" />
                <div className="card">
                  <p className="text-sm text-accent">{e.date}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{e.title}</h3>
                  <p className="font-semibold text-slate-200">{e.org}</p>
                  <p className="mt-2 text-soft">{e.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
