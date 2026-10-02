import { links } from '../data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-soft sm:flex-row">
        <p>© {new Date().getFullYear()} Tanzeela Sultana</p>
        <div className="flex gap-4">
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent"><GithubIcon /></a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent"><LinkedinIcon /></a>
        </div>
      </div>
    </footer>
  )
}
