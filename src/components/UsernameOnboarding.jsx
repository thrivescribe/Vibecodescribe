import { useState } from 'react'
import { signInWithGoogle, initUser } from '../lib/firebase'
import { useNavigate } from 'react-router-dom'

export default function UsernameOnboarding({ user }) {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate username
    if (username.length < 3 || username.length > 20) {
      setError('Username must be 3-20 characters')
      return
    }
    
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setError('Username can only contain letters, numbers, and underscores')
      return
    }

    try {
      setError('')
      await initUser(user, username)
      navigate('/')
    } catch (err) {
      setError('Failed to create account. Please try again.')
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-primary-cream flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-coral rounded-2xl mb-4">
            <span className="text-3xl font-black text-white">V</span>
          </div>
          <h1 className="text-3xl font-black text-primary-navy">Welcome to VibeCode!</h1>
          <p className="text-gray-600 mt-2">Choose your username to get started</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-primary-navy mb-2">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">@</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="coding_vibes"
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral focus:ring-0 outline-none transition-colors font-medium"
                  maxLength={20}
                  required
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-primary-coral font-medium">{error}</p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                {username.length}/20 characters • Letters, numbers, and underscores only
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary-coral hover:bg-red-500 text-white rounded-xl font-black text-lg transition-all hover:scale-[1.02] shadow-lg"
            >
              Join the Community
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-500 font-medium">or</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Already signed in message */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Signed in as <span className="font-bold text-primary-navy">{user.displayName || user.email}</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By joining, you agree to our Terms of Service
        </p>
      </div>
    </div>
  )
}
