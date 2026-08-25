import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import CursorTrail from './components/CursorTrail'
import ThemeToggle from './components/ThemeToggle'
import Navbar from './components/Navbar'
import Feed from './pages/Feed'
import Tribes from './pages/Tribes'
import CreatePost from './pages/CreatePost'

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <CursorTrail />
          <Navbar />
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/tribes" element={<Tribes />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}
