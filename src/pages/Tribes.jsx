import TribeCard from '../components/TribeCard'

const tribes = [
  { name: 'Web Dev Vibes', icon: '🌐', description: 'Frontend magic and full-stack dreams', memberCount: 1234, members: [1,2,3,4] },
  { name: 'AI Art Lab', icon: '🎨', description: 'Midjourney, Stable Diffusion & beyond', memberCount: 892, members: [1,2,3] },
  { name: 'Retro Gaming', icon: '👾', description: 'Pixel perfect nostalgia meets modern dev', memberCount: 567, members: [1,2] },
  { name: 'Prompt Engineering', icon: '⚡', description: 'Master the art of talking to AI', memberCount: 2341, members: [1,2,3,4,5] },
  { name: 'Mobile Apps', icon: '📱', description: 'iOS, Android, and cross-platform', memberCount: 445, members: [1,2,3] },
  { name: 'Data Science', icon: '📊', description: 'Python, ML, and visualizations', memberCount: 678, members: [1,2] },
  { name: 'Game Dev', icon: '🎮', description: 'Unity, Unreal, and indie vibes', memberCount: 890, members: [1,2,3,4] },
  { name: 'DevOps', icon: '🚀', description: 'CI/CD, cloud, and infrastructure', memberCount: 345, members: [1,2] },
]

export default function Tribes() {
  return (
    <div className="min-h-screen bg-primary-cream py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black mb-4 text-primary-navy">Find Your Tribe</h1>
          <p className="text-xl text-gray-600">Join communities that match your vibe and level up together</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tribes.map((tribe, i) => (
            <TribeCard key={i} tribe={tribe} />
          ))}
        </div>
      </div>
    </div>
  )
}
