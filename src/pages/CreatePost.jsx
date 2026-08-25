import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Tag, FileText, MessageCircle } from 'lucide-react'

export default function CreatePost() {
  const navigate = useNavigate()
  const [postType, setPostType] = useState('share')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('general')
  const [tags, setTags] = useState('')

  const postTypes = [
    { id: 'share', label: 'Share', icon: '📤', desc: 'Share your project' },
    { id: 'question', label: 'Question', icon: '❓', desc: 'Ask for help' },
    { id: 'discussion', label: 'Discussion', icon: '💬', desc: 'Start discussion' },
  ]

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'greetings', label: 'Meet & Greet' },
    { id: 'help', label: 'Ask & Assist' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Post created:', { postType, title, content, category, tags })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <button 
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-primary-navy font-bold transition-colors"
        >
          ← Back to Community
        </button>

        <h1 className="text-3xl font-black mb-8 text-primary-navy">Share Your Vibe</h1>

        {/* Post type selector */}
        <div className="flex gap-3 mb-6">
          {postTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setPostType(type.id)}
              className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                postType === type.id
                  ? 'border-primary-coral bg-primary-coral/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">{type.icon}</div>
              <div className="font-bold text-sm text-primary-navy">{type.label}</div>
              <div className="text-xs text-gray-500 mt-1">{type.desc}</div>
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100 space-y-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-bold mb-2 text-primary-navy">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral outline-none transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-bold mb-2 text-primary-navy">Title</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={postType === 'question' ? 'What do you want to ask?' : 'What are you building?'}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-bold mb-2 text-primary-navy">Content</label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={postType === 'question' ? 'Describe your question in detail...' : 'Tell us about your project...'}
                rows={6}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral outline-none transition-colors resize-none"
                required
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-bold mb-2 text-primary-navy">
              Tags <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="react, threejs, creative (comma separated)"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-coral outline-none transition-colors"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-primary-coral hover:bg-red-500 text-white rounded-xl font-black text-lg transition-all hover:scale-[1.02] shadow-lg"
          >
            {postType === 'share' ? 'Publish Your Project' : 
             postType === 'question' ? 'Ask the Community' : 'Start Discussion'}
          </button>
        </form>

        {/* Tips */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-100 rounded-xl p-4">
          <h3 className="font-bold text-blue-900 mb-2">💡 Tips</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Be specific about what you built or asking</li>
            <li>• Include screenshots or links when possible</li>
            <li>• Use relevant tags to help others find your post</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
