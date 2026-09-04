import { useMemo, useState } from 'react'
import useReveal from '../hooks/useReveal'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import './Courses.css'

const tags = ['All', ...Array.from(new Set(courses.map((c) => c.tag)))]

export default function Courses() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesTag = active === 'All' || c.tag === active
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q)
      return matchesTag && matchesQuery
    })
  }, [query, active])

  useReveal([filtered.length, active])

  return (
    <div className="courses-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Courses</span>
          <h1>Explore our <span>courses</span></h1>
          <p>
            Practical, industry-aligned programs designed to take you from
            fundamentals to job-ready. Filter by category or search to find your fit.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="courses-toolbar">
            <div className="courses-search">
              <span aria-hidden="true">🔍</span>
              <input
                type="text"
                placeholder="Search courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search courses"
              />
            </div>

            <div className="courses-filters" role="tablist" aria-label="Filter by category">
              {tags.map((t) => (
                <button
                  key={t}
                  className={`filter-chip ${active === t ? 'is-active' : ''}`}
                  onClick={() => setActive(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="course-grid">
              {filtered.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          ) : (
            <p className="courses-empty">
              No courses match your search. Try a different keyword or category.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
