import { useState } from 'react'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'

const initialPosts = [
  {
    id: 1,
    author: 'Alex Chen',
    time: '3 hours ago',
    tribe: 'Web Dev Vibes',
    content: 'Just built my first 3D website using Three.js and React! The particles effect took forever but totally worth it. Drop your thoughts!',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b2c25f50?w=800&q=80',
    tags: ['threejs', 'react', '3d'],
    likes: 142,
    comments: 23,
    liked: false,
    pinned: true,
    category: 'announcements',
  },
  {
    id: 2,
    author: 'Maya Liu',
    time: '6 hours ago',
    tribe: 'AI Artists',
    content: 'Prompts are everything. After testing 100+ variations, this one generates the most consistent results for architectural visualization.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    tags: ['stable-diffusion', 'prompts', 'aiart'],
    likes: 289,
    comments: 45,
    liked: true,
  },
  {
    id: 3,
    author: 'Jordan Park',
    time: '12 hours ago',
    tribe: 'Retro Games',
    content: 'Pixel art meets modern mechanics. This game took me 3 weeks to prototype but playing it feels like going back to 1995.',
    tags: ['retro', 'pixel-art', 'game-dev'],
    likes: 198,
    comments: 31,
    liked: false,
  },
]

const categories = [
  { id: 'all', label: 'All Vibes', icon: null },
  { id: 'general', label: 'General', icon: null },
  { id: 'announcements', label: 'Announcements', icon: '📢' },
  { id: 'greetings', label: 'Meet & Greet', icon: '👋' },
  { id: 'help', label: 'Ask & Assist', icon: '💡' },
]

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts)
  const [activeCategory, setActiveCategory] = useState('all')

  const toggleLike = (id) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ))
  }

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(p => p.category === activeCategory || !p.category)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Community Stats Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-black text-primary-navy">12.8K</div>
                <div className="text-xs text-gray-500 font-medium">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-green-500">342</div>
                <div className="text-xs text-gray-500 font-medium">Online</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary-coral">12</div>
                <div className="text-xs text-gray-500 font-medium">Admins</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold ${
                    i === 1 ? 'bg-primary-coral' :
                    i === 2 ? 'bg-blue-500' :
                    i === 3 ? 'bg-green-500' :
                    i === 4 ? 'bg-purple-500' :
                    'bg-yellow-500'
                  }`}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">View all members</span>
            </div>
          </div>

          {/* Settings Button */}
          <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-xl text-gray-600 font-bold transition-colors">
            SETTINGS
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-primary-navy text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.icon && <span>{cat.icon}</span>}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={{...post, toggleLike}} />
        ))}
      </main>
    </div>
  )
}
