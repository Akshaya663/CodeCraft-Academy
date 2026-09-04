import './CourseCard.css'

export default function CourseCard({ course }) {
  return (
    <article className="course-card reveal">
      <div className="course-card__top">
        <span className="course-card__icon" aria-hidden="true">
          {course.icon}
        </span>
        <span className="course-card__tag">{course.tag}</span>
      </div>

      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__summary">{course.summary}</p>

      <ul className="course-card__list">
        {course.highlights.map((h) => (
          <li key={h}>
            <span className="course-card__dot" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      <div className="course-card__foot">
        <span className="course-card__duration">⏱ {course.duration}</span>
        <span className="course-card__more">Learn more →</span>
      </div>
    </article>
  )
}
