import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './pages/Feed'
import Tribes from './pages/Tribes'
import CreatePost from './pages/CreatePost'
import Members from './pages/Members'
import Leaderboards from './pages/Leaderboards'
import Login from './pages/Login'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/tribes" element={<Tribes />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/members" element={<Members />} />
                <Route path="/leaderboards" element={<Leaderboards />} />
              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}
