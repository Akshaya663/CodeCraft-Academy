import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import './About.css'

const values = [
  { icon: '🎯', title: 'Practical first', text: 'We teach what the industry actually uses, not just theory.' },
  { icon: '💬', title: 'Personal mentorship', text: 'Small, focused guidance so no learner is left behind.' },
  { icon: '🌱', title: 'Growth mindset', text: 'We meet you where you are and help you level up steadily.' },
  { icon: '🏆', title: 'Real outcomes', text: 'Projects, portfolios and interview readiness that lead to jobs.' },
]

export default function About() {
  useReveal()

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>Training built on real <span>industry experience</span></h1>
          <p>
            CodeCraft Academy was founded to close the gap between classroom
            learning and what companies expect from day one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div className="about-story__text reveal">
            <h2>Our story</h2>
            <p>
              After 10+ years working across a wide range of technologies and
              delivering corporate trainings, we saw the same pattern again and
              again — talented learners struggling to turn knowledge into
              job-ready skills.
            </p>
            <p>
              CodeCraft Academy is our answer. Every course is designed around
              real projects, current industry standards, and the practical habits
              that make great engineers. We keep things clear, approachable and
              focused on outcomes.
            </p>
            <Link to="/courses" className="btn btn--primary">
              See our courses
            </Link>
          </div>

          <div className="about-story__card reveal">
            <div className="about-mentor">
              <span className="about-mentor__avatar" aria-hidden="true">👨‍💻</span>
              <div>
                <strong>Your mentor</strong>
                <span>10+ years industry & corporate training</span>
              </div>
            </div>
            <ul className="about-facts">
              <li><span>✔</span> Hands-on across multiple technologies</li>
              <li><span>✔</span> Experienced corporate trainer</li>
              <li><span>✔</span> Industry-standard curriculum</li>
              <li><span>✔</span> Focused on real career outcomes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we value</span>
            <h2>The principles behind every course</h2>
          </div>
          <div className="about-values">
            {values.map((v) => (
              <div key={v.title} className="about-value reveal">
                <span className="about-value__icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
