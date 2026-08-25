import { useState } from 'react'
import { Home, Users, Heart, Plus, Search, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-primary-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary-coral rounded-lg flex items-center justify-center font-black text-lg transform group-hover:rotate-12 transition-transform">
              V
            </div>
            <span className="text-xl font-black tracking-tight">VibeCode</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-primary-yellow transition-colors ${location.pathname === '/' ? 'text-primary-yellow' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/tribes" 
              className={`font-medium hover:text-primary-yellow transition-colors ${location.pathname === '/tribes' ? 'text-primary-yellow' : ''}`}
            >
              Tribes
            </Link>
            <Link 
              to="/create" 
              className={`font-medium hover:text-primary-yellow transition-colors ${location.pathname === '/create' ? 'text-primary-yellow' : ''}`}
            >
              Create
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 w-64">
            <Search className="w-4 h-4 text-white/60 mr-2" />
            <input
              type="text"
              placeholder="Search tribes..."
              className="bg-transparent border-none outline-none text-white placeholder-white/60 text-sm w-full"
            />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-primary-coral hover:bg-red-500 rounded-full font-bold text-sm transition-all hover:scale-105">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 font-medium ${location.pathname === '/' ? 'text-primary-yellow' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/tribes" 
              className={`block py-2 font-medium ${location.pathname === '/tribes' ? 'text-primary-yellow' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Tribes
            </Link>
            <Link 
              to="/create" 
              className={`block py-2 font-medium ${location.pathname === '/create' ? 'text-primary-yellow' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Create
            </Link>
            <button className="w-full py-3 bg-primary-coral rounded-full font-bold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
