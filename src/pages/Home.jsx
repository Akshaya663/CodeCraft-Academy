import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import CourseCard from '../components/CourseCard'
import { courses, languages } from '../data/courses'
import './Home.css'

const stats = [
  { value: '10+', label: 'Years of experience' },
  { value: '11', label: 'Industry courses' },
  { value: '5', label: 'Core languages' },
  { value: '100%', label: 'Hands-on learning' },
]

const steps = [
  {
    n: '01',
    title: 'Foundations first',
    text: 'Master the core concepts with clear, structured lessons that build real understanding.',
  },
  {
    n: '02',
    title: 'Build real projects',
    text: 'Apply what you learn immediately through hands-on, portfolio-ready builds.',
  },
  {
    n: '03',
    title: 'Get feedback like a pro',
    text: "Receive the kind of code review and mentorship you'd get on a real engineering team.",
  },
  {
    n: '04',
    title: 'Get job-ready',
    text: 'Finish with a portfolio, practical skills and the confidence to interview and perform on the job.',
  },
]

const perks = [
  {
    icon: '🛠️',
    title: 'Project-driven curriculum',
    text: "Every module is built around real, portfolio-worthy projects — not toy examples. You'll leave with something tangible to show employers, not just a certificate.",
  },
  {
    icon: '👩‍💻',
    title: 'Industry-tested instructors',
    text: 'Our trainers have spent years inside corporate environments solving real business problems. You learn the tools, workflows and habits professional teams actually use.',
  },
  {
    icon: '📈',
    title: 'Fundamentals to job-ready',
    text: 'Starting from zero or levelling up, our learning paths take you step-by-step from core concepts to the proficiency employers look for.',
  },
  {
    icon: '🎯',
    title: 'Practical over theoretical',
    text: 'Less time on abstract theory, more time writing code, debugging real issues and building the muscle memory that makes you effective from day one.',
  },
  {
    icon: '🤝',
    title: 'Corporate training pedigree',
    text: "We've designed and delivered technical training for corporate teams — so our courses carry the same rigor and outcomes-focus companies demand.",
  },
]

const whoFor = [
  { icon: '🌱', title: 'Beginners', text: 'Who want a structured, no-fluff path into tech.' },
  { icon: '🔄', title: 'Career switchers', text: 'Looking to break into software development.' },
  { icon: '📊', title: 'Working professionals', text: 'Upskilling for a promotion or a new role.' },
  { icon: '🏢', title: 'Teams & organizations', text: 'Seeking corporate training with real outcomes.' },
]

const aboutHighlights = [
  {
    icon: '🎓',
    title: 'Learn from real experience',
    text: 'Our curriculum is shaped by a decade of hands-on engineering and corporate training, not just textbooks.',
  },
  {
    icon: '💼',
    title: 'Built for the workplace',
    text: 'You practise the exact tools, workflows and standards that companies expect from day one.',
  },
  {
    icon: '🌟',
    title: 'Guidance that stays personal',
    text: 'Small, focused mentorship means your questions get answered and no learner is left behind.',
  },
]

export default function Home() {
  useReveal()

  const featured = courses.slice(0, 6)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge">🎓 Industry-standard tech training</span>
            <h1 className="hero__title">
              Learn to code the way the <span>industry</span> actually works.
            </h1>
            <p className="hero__subtitle">
              CodeCraft Academy delivers practical, project-driven courses shaped
              by over a decade of hands-on engineering and corporate training
              experience. We don't just teach syntax — we build job-ready
              developers, one real-world project at a time.
            </p>
            <div className="hero__actions">
              <Link to="/courses" className="btn btn--primary">
                Explore Courses
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Book a Free Consultation
              </Link>
            </div>

            <div className="hero__stats">
              {stats.map((s) => (
                <div key={s.label} className="hero__stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__card hero__card--code">
              <div className="hero__dots">
                <span></span><span></span><span></span>
              </div>
              <pre>
{`function learn(skill) {
  practice(skill);
  build(project);
  return "job-ready";
}`}
              </pre>
            </div>
            <div className="hero__chip hero__chip--1">🚀 FullStack</div>
            <div className="hero__chip hero__chip--2">☁️ Cloud</div>
            <div className="hero__chip hero__chip--3">🧠 DSA</div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="section about-home">
        <div className="container about-home__inner">
          <div className="about-home__visual reveal" aria-hidden="true">
            <div className="about-home__panel">
              <span className="about-home__avatar">👨‍💻</span>
              <div className="about-home__paneltext">
                <strong>10+ years</strong>
                <span>of industry & training expertise</span>
              </div>
            </div>
            <div className="about-home__float about-home__float--1">🏆 Job-ready skills</div>
            <div className="about-home__float about-home__float--2">🚀 Real projects</div>
            <div className="about-home__ring" />
          </div>

          <div className="about-home__content reveal">
            <span className="eyebrow">Who we are</span>
            <h2>
              Coding is best learned by <span>doing</span>, not memorizing slides.
            </h2>
            <p className="about-home__lead">
              CodeCraft Academy was built on a simple belief. With 10+ years of
              combined experience across enterprise software development and
              corporate technical training, our instructors bring real production
              challenges — the kind you'll actually face on the job — straight
              into the classroom.
            </p>
            <p className="about-home__body">
              We've trained engineers inside large organizations and mentored
              beginners taking their very first steps into tech. That dual
              perspective shapes everything we teach: practical skills, industry
              best practices, and the confidence to walk into a job and contribute
              from day one.
            </p>

            <div className="about-home__highlights">
              {aboutHighlights.map((h) => (
                <div key={h.title} className="about-home__highlight">
                  <span className="about-home__hicon">{h.icon}</span>
                  <div>
                    <strong>{h.title}</strong>
                    <p>{h.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-home__actions">
              <Link to="/about" className="btn btn--primary">
                More about us
              </Link>
              <Link to="/courses" className="btn btn--ghost">
                Explore courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why choose us</span>
            <h2>What makes us different</h2>
            <p>
              Everything we do is built to turn learning into real, job-ready
              capability.
            </p>
          </div>

          <div className="perks perks--five">
            {perks.map((p) => (
              <div key={p.title} className="perk reveal">
                <span className="perk__icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Courses</span>
            <h2>Courses built to make you job-ready</h2>
            <p>
              From your first line of code to advanced specialisations — pick the
              path that fits your goals.
            </p>
          </div>

          <div className="course-grid">
            {featured.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>

          <div className="course-grid__cta">
            <Link to="/courses" className="btn btn--primary">
              View all courses
            </Link>
          </div>
        </div>
      </section>

      {/* LANGUAGES STRIP */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Languages</span>
            <h2>Master the languages that power the industry</h2>
            <p>Build strong foundations across the most in-demand programming languages.</p>
          </div>

          <div className="lang-strip">
            {languages.map((l) => (
              <div key={l.name} className="lang-pill reveal">
                <span className="lang-pill__badge" style={{ background: l.color }}>
                  {l.icon}
                </span>
                <div>
                  <strong>{l.name}</strong>
                  <span>{l.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE TEACH */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we teach</span>
            <h2>A proven path from fundamentals to job-ready</h2>
            <p>
              A clear, four-step method that mirrors how real engineering teams
              grow talent.
            </p>
          </div>

          <div className="steps steps--four">
            {steps.map((s) => (
              <div key={s.n} className="step reveal">
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Who this is for</span>
            <h2>Built for anyone serious about growing in tech</h2>
            <p>
              Whether you're just starting out or levelling up, there's a path
              here for you.
            </p>
          </div>

          <div className="whofor">
            {whoFor.map((w) => (
              <div key={w.title} className="whofor__card reveal">
                <span className="whofor__icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta reveal">
            <h2>Ready to start building?</h2>
            <p>
              Stop learning in theory. Start building in practice. Join CodeCraft
              Academy and go from fundamentals to job-ready — guided by
              instructors who've done it in the real world.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--light">
                Book a Free Consultation
              </Link>
              <Link to="/courses" className="btn btn--ghost cta__ghost">
                Browse courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
