import { Link, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Office from './pages/Office'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/office" element={<Office />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
