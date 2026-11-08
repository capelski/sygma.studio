import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Office from './pages/Office'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'

function Layout() {
  return (
    <div className="page">
      <header className="header">
        <Link to="/" className="logo" aria-label="sygma.studio, home">
          sygm<b>a</b>.studio
        </Link>
      </header>
      <main className="content">
        <Link to="/home" className="logo" aria-label="sygma.studio, home">
          <div className="plus" aria-hidden="true">+</div>
        </Link>
        <Outlet />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/office" element={<Office />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Intro />} />
    </Routes>
  )
}
