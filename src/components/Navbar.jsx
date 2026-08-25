import { useState, useEffect } from 'react'
import { Home, Users, Trophy, Plus, Search, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check auth state (in real app, this would come from context)
  useEffect(() => {
    const user = localStorage.getItem('vibecode_user')
    setIsLoggedIn(!!user)
  }, [])

  if (!isLoggedIn) {
    return (
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary-coral rounded-lg flex items-center justify-center font-black text-white text-lg transform group-hover:rotate-12 transition-transform">
                V
              </div>
              <span className="text-xl font-black tracking-tight text-primary-navy">VibeCode</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium hover:text-primary-coral transition-colors ${location.pathname === '/' ? 'text-primary-coral' : 'text-gray-600'}`}
              >
                Feed
              </Link>
              <button className="px-6 py-2 bg-primary-coral hover:bg-red-500 text-white rounded-full font-bold text-sm transition-all hover:scale-105">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block py-2 font-medium text-gray-600 hover:text-primary-coral"
                onClick={() => setIsOpen(false)}
              >
                Feed
              </Link>
              <button className="w-full py-3 bg-primary-coral text-white rounded-full font-bold">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    )
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary-coral rounded-lg flex items-center justify-center font-black text-white text-lg transform group-hover:rotate-12 transition-transform">
              V
            </div>
            <span className="text-xl font-black tracking-tight text-primary-navy">VibeCode</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                location.pathname === '/' 
                  ? 'bg-primary-navy text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home className="w-4 h-4" />
              Community
            </Link>
            <Link 
              to="/members" 
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                location.pathname === '/members' 
                  ? 'bg-primary-navy text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-4 h-4" />
              Members
            </Link>
            <Link 
              to="/leaderboards" 
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                location.pathname === '/leaderboards' 
                  ? 'bg-primary-navy text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Leaderboards
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-400 w-40"
              />
            </div>
            
            <Link 
              to="/create"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary-coral hover:bg-red-500 text-white rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md"
            >
              <Plus className="w-4 h-4" />
              Start Here
            </Link>

            {/* User avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-coral to-primary-yellow flex items-center justify-center text-white font-bold cursor-pointer">
              A
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className={`flex items-center gap-3 py-3 px-4 rounded-xl font-bold transition-all ${
                location.pathname === '/' ? 'bg-primary-navy text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-5 h-5" />
              Community
            </Link>
            <Link 
              to="/members" 
              className={`flex items-center gap-3 py-3 px-4 rounded-xl font-bold transition-all ${
                location.pathname === '/members' ? 'bg-primary-navy text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-5 h-5" />
              Members
            </Link>
            <Link 
              to="/leaderboards" 
              className={`flex items-center gap-3 py-3 px-4 rounded-xl font-bold transition-all ${
                location.pathname === '/leaderboards' ? 'bg-primary-navy text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Trophy className="w-5 h-5" />
              Leaderboards
            </Link>
            <Link 
              to="/create"
              className="flex items-center gap-3 py-3 px-4 rounded-xl font-bold bg-primary-coral text-white"
              onClick={() => setIsOpen(false)}
            >
              <Plus className="w-5 h-5" />
              Start Here
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
