import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import cross from '../assets/nav-cross.png'
import { projects } from '../projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [index, setIndex] = useState(0)

  useEffect(() => setIndex(0), [slug])

  const count = project?.images.length ?? 0
  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + count) % count),
    [count],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  // Preload the neighbouring images so paging feels instant.
  useEffect(() => {
    if (!project) return
    for (const step of [1, -1]) {
      new Image().src = project.images[(index + step + count) % count]
    }
  }, [project, index, count])

  if (!project) return <Navigate to="/projects" replace />

  return (
    <>
      <h1 className="section-title">
        <Link to="/projects">Projects</Link>
      </h1>
      <div className="viewer">
        <button type="button" className="viewer-nav" onClick={() => go(-1)} aria-label="Previous image">
          <img src={cross} alt="" />
        </button>
        <div className="viewer-stage">
          <img
            key={project.images[index]}
            src={project.images[index]}
            alt={`${project.title}, image ${index + 1} of ${count}`}
          />
        </div>
        <button type="button" className="viewer-nav" onClick={() => go(1)} aria-label="Next image">
          <img src={cross} alt="" />
        </button>
      </div>
      <div className="viewer-caption">
        <p>{project.title}</p>
        <p>
          {project.details.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      </div>
    </>
  )
}
