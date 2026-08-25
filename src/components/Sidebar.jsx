export default function Sidebar() {
  const tribes = [
    { name: 'Web Dev Vibes', count: 1234, active: true },
    { name: 'AI Artists', count: 892, active: false },
    { name: 'Retro Games', count: 567, active: false },
    { name: 'Prompt Engineering', count: 2341, active: false },
    { name: 'Mobile Apps', count: 445, active: false },
  ]

  return (
    <aside className="space-y-6">
      {/* Trending Tribes */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
        <h3 className="font-black text-lg mb-4 flex items-center gap-2 text-primary-navy">
          <span className="w-1 h-6 bg-primary-coral rounded-full"></span>
          Trending Tribes
        </h3>
        
        <div className="space-y-3">
          {tribes.map((tribe, i) => (
            <div key={i} className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${tribe.active ? 'bg-primary-yellow/20 border-2 border-primary-yellow' : 'hover:bg-gray-50 border-2 border-transparent'}`}>
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${tribe.active ? 'bg-primary-coral' : 'bg-gray-200'}`}>
                  {['🌐', '🎨', '👾', '⚡', '📱'][i]}
                </span>
                <span className="font-bold text-sm text-primary-navy">{tribe.name}</span>
              </div>
              <span className="text-xs font-medium text-gray-500">{tribe.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Tags */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
        <h3 className="font-black text-lg mb-4 flex items-center gap-2 text-primary-navy">
          <span className="w-1 h-6 bg-primary-blue rounded-full"></span>
          Hot Tags
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {['#react', '#claude', '#cursor', '#prompt', '#webdev', '#aiart', '#gamedev', '#mobile'].map((tag, i) => (
            <span key={i} className="px-3 py-1.5 bg-gray-100 hover:bg-primary-coral hover:text-white text-gray-600 rounded-lg text-sm cursor-pointer transition-all font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Top Creators */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
        <h3 className="font-black text-lg mb-4 flex items-center gap-2 text-primary-navy">
          <span className="w-1 h-6 bg-primary-yellow rounded-full"></span>
          Top Creators
        </h3>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-coral to-primary-yellow flex items-center justify-center text-white font-black">
                {String.fromCharCode(64 + i)}
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm text-primary-navy">Creator {i}</div>
                <div className="text-xs text-gray-500">{i * 120} posts</div>
              </div>
              <button className="px-3 py-1 bg-primary-coral text-white rounded-full text-xs font-bold hover:bg-red-500 transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
