import Reveal from './Reveal'
import { achievements } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">Achievements</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((a) => (
              <article key={a.title} className="card">
                <h3 className="font-display text-lg font-bold text-white">{a.title}</h3>
                <p className="mt-1 text-accent">{a.subtitle}</p>
                <p className="mt-3 text-soft">{a.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
