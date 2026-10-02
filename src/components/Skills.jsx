import Reveal from './Reveal'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">Skills</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="card">
                <h3 className="mb-4 font-display text-lg font-bold text-white">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => <li key={s} className="badge">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
