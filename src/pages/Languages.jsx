import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { languages } from '../data/courses'
import './Languages.css'

const detail = {
  C: 'The language behind operating systems and embedded software. A great way to understand how computers really work.',
  'C++': 'Powerful and fast, widely used in games, high-performance systems and competitive programming.',
  'C#': 'The heart of the .NET ecosystem — ideal for enterprise apps, desktop software and game development with Unity.',
  Python: 'Beginner-friendly yet powerful. The go-to language for automation, data, AI and rapid development.',
  Java: 'Reliable and scalable, powering countless enterprise systems and Android applications worldwide.',
}

export default function Languages() {
  useReveal()

  return (
    <div className="languages-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Languages</span>
          <h1>Languages we <span>teach</span></h1>
          <p>
            Strong fundamentals in the right languages open doors across every
            area of software. Here are the core languages woven through our courses.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lang-grid">
            {languages.map((l) => (
              <article key={l.name} className="lang-card reveal">
                <span
                  className="lang-card__badge"
                  style={{ background: l.color }}
                  aria-hidden="true"
                >
                  {l.icon}
                </span>
                <h3>{l.name}</h3>
                <p className="lang-card__note">{l.note}</p>
                <p className="lang-card__detail">{detail[l.name]}</p>
              </article>
            ))}
          </div>

          <div className="lang-cta reveal">
            <div>
              <h2>Not sure where to start?</h2>
              <p>We'll help you pick the right language and course for your goals.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">
              Get guidance
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
