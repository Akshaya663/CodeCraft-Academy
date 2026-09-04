import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>{'</>'}</span> CodeCraft <em>Academy</em>
          </div>
          <p>
            Industry-standard tech training built by a mentor with 10+ years of
            real-world and corporate teaching experience.
          </p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/courses">Courses</Link>
          <Link to="/languages">Languages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Popular Courses</h4>
          <Link to="/courses">FullStack Development</Link>
          <Link to="/courses">Data Structures & Algorithms</Link>
          <Link to="/courses">Cloud Computing</Link>
          <Link to="/courses">Salesforce</Link>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <a href="mailto:rachabattulaakshaya@gmail.com">rachabattulaakshaya@gmail.com</a>
          <a href="tel:+918008552718">+91 80085 52718</a>
          <a href="tel:+919949114207">+91 99491 14207</a>
          <p className="footer__muted">Mon–Sat, 9am–7pm</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottominner">
          <span>© {year} CodeCraft Academy. All rights reserved.</span>
          <span>Learn. Build. Get hired.</span>
        </div>
      </div>
    </footer>
  )
}
