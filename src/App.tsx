import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Office from './pages/Office'
import Section from './pages/Section'
import { sections } from './sections'

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <Link to="/" className="logo" aria-label="sygma.studio, home">
          sygm<b>a</b>.studio
        </Link>
      </header>
      <main className="content">
        <div className="plus" aria-hidden="true">+</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/office" element={<Office />} />
          {sections
            .filter((s) => s.path !== '/office')
            .map((s) => (
              <Route key={s.path} path={s.path} element={<Section title={s.label} />} />
            ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
