import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { courses } from '../data/courses'
import './Contact.css'

const initial = { name: '', email: '', course: '', message: '' }

export default function Contact() {
  useReveal()
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email.'
    if (!form.message.trim()) e.message = 'Tell us a little about your goals.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    // In production this would POST to a backend / email service.
    setSent(true)
    setForm(initial)
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let's talk about your <span>goals</span></h1>
          <p>
            Have a question or ready to enroll? Send us a message and we'll get
            back to you shortly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <h2>Get in touch</h2>
            <p className="contact-info__lead">
              We're happy to help you choose the right course and answer any
              questions about learning with us.
            </p>

            <ul className="contact-info__list">
              <li>
                <span className="contact-info__icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:rachabattulaakshaya@gmail.com">rachabattulaakshaya@gmail.com</a>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+918008552718">+91 80085 52718</a>
                  <a href="tel:+919949114207">+91 99491 14207</a>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">🕘</span>
                <div>
                  <strong>Hours</strong>
                  <span>Mon–Sat, 9am–7pm</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrap reveal">
            {sent ? (
              <div className="contact-success" role="status">
                <span className="contact-success__icon">✅</span>
                <h3>Thank you!</h3>
                <p>
                  Your message has been received. We'll get back to you soon.
                </p>
                <button className="btn btn--ghost" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? 'has-error' : ''}
                    placeholder="Your name"
                  />
                  {errors.name && <small className="field__error">{errors.name}</small>}
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'has-error' : ''}
                    placeholder="you@example.com"
                  />
                  {errors.email && <small className="field__error">{errors.email}</small>}
                </div>

                <div className="field">
                  <label htmlFor="course">Interested course</label>
                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                  >
                    <option value="">Select a course (optional)</option>
                    {courses.map((c) => (
                      <option key={c.slug} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'has-error' : ''}
                    placeholder="Tell us about your goals..."
                  />
                  {errors.message && (
                    <small className="field__error">{errors.message}</small>
                  )}
                </div>

                <button type="submit" className="btn btn--primary contact-form__submit">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
