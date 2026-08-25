import { useState } from 'react'
import PostCard from './PostCard'
import Sidebar from './Sidebar'
import Hero from './Hero'

const initialPosts = [
  {
    id: 1,
    author: 'Alex Chen',
    time: '2 hours ago',
    tribe: 'Web Dev Vibes',
    content: 'Just built my first 3D website using Three.js and React! The particles effect took forever but totally worth it. Drop your thoughts!',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b2c25f50?w=800&q=80',
    tags: ['threejs', 'react', '3d'],
    likes: 142,
    comments: 23,
    liked: false,
  },
  {
    id: 2,
    author: 'Maya Liu',
    time: '5 hours ago',
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
    time: '8 hours ago',
    tribe: 'Retro Games',
    content: 'Pixel art meets modern mechanics. This game took me 3 weeks to prototype but playing it feels like going back to 1995.',
    tags: ['retro', 'pixel-art', 'game-dev'],
    likes: 198,
    comments: 31,
    liked: false,
  },
]

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts)

  const toggleLike = (id) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['All Vibes', 'Web Dev', 'AI Art', 'Games', 'Mobile'].map((tab, i) => (
                <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-violet-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-violet-900/20'}`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map(post => (
                <PostCard key={post.id} post={{...post, toggleLike}} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  )
}
