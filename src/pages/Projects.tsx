import { Link } from 'react-router-dom'
import { projects } from '../projects'

export default function Projects() {
  return (
    <>
      <h1 className="section-title">Projects</h1>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link to={`/projects/${p.slug}`} className="project-card">
              <span className="project-cover">
                <img src={p.images[0]} alt="" />
              </span>
              <span className="project-caption">
                {p.title}
                <br />
                {p.subtitle}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
