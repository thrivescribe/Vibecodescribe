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
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
          Trending Tribes
        </h3>
        
        <div className="space-y-3">
          {tribes.map((tribe, i) => (
            <div key={i} className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${tribe.active ? 'bg-violet-50 dark:bg-violet-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}>
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${tribe.active ? 'bg-violet-200 dark:bg-violet-800' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  {['🌐', '🎨', '👾', '⚡', '📱'][i]}
                </span>
                <span className="font-medium text-sm">{tribe.name}</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">{tribe.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
          Hot Tags
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {['#react', '#claude', '#cursor', '#prompt', '#webdev', '#aiart', '#gamedev', '#mobile'].map((tag, i) => (
            <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 rounded-lg text-sm cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Top Creators */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
          Top Creators
        </h3>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white font-bold">
                {['A', 'B', 'C'][i-1]}
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Creator {i}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{i * 120} posts</div>
              </div>
              <button className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
