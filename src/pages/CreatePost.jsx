import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tribe, setTribe] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add actual submission logic
    console.log('Post created:', { title, content, tribe })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <button onClick={() => navigate('/')} className="text-violet-600 hover:text-violet-700 mb-6 flex items-center gap-2">
          ← Back to Feed
        </button>
        
        <h1 className="text-3xl font-bold mb-8">Share Your Vibe</h1>
        
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What are you building?"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tell us about your project, what tools you used, and any lessons learned..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Tribe</label>
              <select
                value={tribe}
                onChange={(e) => setTribe(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              >
                <option value="">Select a tribe...</option>
                <option value="web">Web Dev Vibes</option>
                <option value="ai">AI Art Lab</option>
                <option value="games">Retro Gaming</option>
                <option value="prompt">Prompt Engineering</option>
                <option value="mobile">Mobile Apps</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
              <input
                type="text"
                placeholder="react, threejs, creative"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white rounded-xl font-semibold text-lg transition-all"
            >
              Publish Your Vibe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
