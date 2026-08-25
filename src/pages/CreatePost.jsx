import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tribe, setTribe] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Post created:', { title, content, tribe })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-primary-cream py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate('/')} className="text-primary-coral hover:text-red-500 mb-6 flex items-center gap-2 font-bold">
          ← Back to Feed
        </button>
        
        <h1 className="text-4xl font-black mb-8 text-primary-navy">Share Your Vibe</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-100">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-primary-navy">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What are you building?"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral focus:ring-0 outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2 text-primary-navy">Description</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tell us about your project, what tools you used, and any lessons learned..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral focus:ring-0 outline-none transition-colors resize-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2 text-primary-navy">Tribe</label>
              <select
                value={tribe}
                onChange={(e) => setTribe(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral focus:ring-0 outline-none transition-colors"
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
              <label className="block text-sm font-bold mb-2 text-primary-navy">Tags (comma separated)</label>
              <input
                type="text"
                placeholder="react, threejs, creative"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral focus:ring-0 outline-none transition-colors"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-primary-coral hover:bg-red-500 text-white rounded-xl font-black text-lg transition-all hover:scale-[1.02] shadow-lg"
            >
              Publish Your Vibe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
