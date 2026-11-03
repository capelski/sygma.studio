import { Link } from 'react-router-dom'
import { sections } from '../sections'

export default function Home() {
  return (
    <nav>
      <ul className="menu">
        {sections.map((s) => (
          <li key={s.path}>
            <Link to={s.path}>{s.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
