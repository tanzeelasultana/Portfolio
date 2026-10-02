import Reveal from './Reveal'
import { interests } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">About Me</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-lg text-soft">
              <p>
                I'm a third-year B.Tech Computer Science and Engineering student and an aspiring software developer. I enjoy building practical web applications and am interested in full-stack and backend development.
              </p>
              <p>
                I'm continuously improving my programming and development skills, and I'm looking for internship and project opportunities. I also enjoy problem solving and practice coding problems regularly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="font-display text-lg font-bold text-white">Education</h3>
                <ul className="mt-3 space-y-3 text-soft">
                  <li>
                    <p className="font-semibold text-slate-100">B.Tech Computer Science and Engineering</p>
                    <p>Sri Venkateshwaraa College of Engineering and Technology, Puducherry</p>
                    <p>2024–2028 · CGPA: 8.51</p>
                  </li>
                  <li>
                    <p className="font-semibold text-slate-100">ARLM Vidyalayam</p>
                    <p>HSC: 79.5% (2024) · SSLC: 80% (2022)</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-display text-lg font-bold text-white">Interests</h3>
                <ul className="flex flex-wrap gap-2">
                  {interests.map((i) => <li key={i} className="badge">{i}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
