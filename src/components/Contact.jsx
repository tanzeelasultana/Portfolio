import { useState } from 'react'
import Reveal from './Reveal'
import { links } from '../data'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const field = 'mt-1 w-full rounded-lg border border-edge bg-ink px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
      // Sends submission directly to tanzeelasultana43@gmail.com via FormSubmit service
      const response = await fetch(`https://formsubmit.co/ajax/${links.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error(err)
      setStatus({ loading: false, success: false, error: err.message || 'Failed to send. Please try emailing directly.' })
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2">Contact</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-display text-xl font-bold text-white">Tanzeela Sultana</p>
              <p className="mt-2 text-soft">
                Open to internship and project opportunities. Feel free to send me a message using the form or reach out directly!
              </p>
              <div className="mt-6 flex flex-col items-start gap-3">
                {links.email && (
                  <a href={`mailto:${links.email}`} className="btn-ghost">
                    <MailIcon /> {links.email}
                  </a>
                )}
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <GithubIcon /> GitHub
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card space-y-4 hover:!translate-y-0">
              <div>
                <label htmlFor="name" className="text-sm text-slate-300">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={field}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={field}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={field}
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.success && (
                <p className="text-sm text-emerald-400" role="status">
                  ✓ Your message has been sent successfully! I'll get back to you soon.
                </p>
              )}

              {status.error && (
                <p className="text-sm text-rose-400" role="status">
                  ✕ {status.error}
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
