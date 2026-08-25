import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './pages/Feed'
import Tribes from './pages/Tribes'
import CreatePost from './pages/CreatePost'
import Members from './pages/Members'
import Leaderboards from './pages/Leaderboards'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/tribes" element={<Tribes />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/members" element={<Members />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </div>
    </Router>
  )
}
