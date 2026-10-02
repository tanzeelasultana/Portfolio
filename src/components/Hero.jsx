import { links, interests } from '../data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pb-16 pt-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="rise font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm Tanzeela Sultana
          </h1>
          <p className="rise mt-4 text-lg font-medium text-accent sm:text-xl" style={{ animationDelay: '.1s' }}>
            Computer Science Engineering Student &amp; Aspiring Software Developer
          </p>
          <p className="rise mt-4 max-w-xl text-lg text-soft" style={{ animationDelay: '.2s' }}>
            Passionate about building practical web applications and continuously improving my software development skills.
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.3s' }}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
            {/* Place your resume.pdf inside the /public folder */}
            <a href={links.resume} download className="btn-ghost">Download Resume</a>
          </div>

          <div className="rise mt-6 flex gap-4 text-soft" style={{ animationDelay: '.4s' }}>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition hover:text-accent"><GithubIcon className="h-6 w-6" /></a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition hover:text-accent"><LinkedinIcon className="h-6 w-6" /></a>
          </div>
        </div>

        {/* Profile card styled like a Java class, using only details I provided */}
        <div className="rise rounded-xl border border-edge bg-panel p-5 font-code text-sm leading-7 shadow-xl shadow-black/20" style={{ animationDelay: '.35s' }} aria-label="Profile summary">
          <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-edge" /><span className="h-3 w-3 rounded-full bg-edge" /><span className="h-3 w-3 rounded-full bg-edge" />
            <span className="ml-3 text-xs text-soft">Tanzeela.java</span>
          </div>
          <p><span className="text-accent">class</span> Tanzeela {'{'}</p>
          <p className="pl-4 text-slate-300">degree = <span className="text-slate-100">"B.Tech CSE"</span>;</p>
          <p className="pl-4 text-slate-300">years = <span className="text-slate-100">"2024–2028"</span>;</p>
          <p className="pl-4 text-slate-300">cgpa = <span className="text-slate-100">8.51</span>;</p>
          <p className="pl-4 text-slate-300">languages = [<span className="text-slate-100">"Java"</span>, <span className="text-slate-100">"Python"</span>];</p>
          <p className="pl-4 text-slate-300">interests = [</p>
          {interests.slice(0, 4).map((i) => (
            <p key={i} className="pl-8 text-slate-100">"{i}",</p>
          ))}
          <p className="pl-4 text-slate-300">];</p>
          <p>{'}'}</p>
        </div>
      </div>
    </section>
  )
}
