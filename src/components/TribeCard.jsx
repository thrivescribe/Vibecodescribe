export default function TribeCard({ tribe }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 dark:border-gray-700">
      {/* Banner */}
      <div className="h-32 bg-gradient-to-r from-violet-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30">{tribe.icon}</span>
        </div>
      </div>
      
      {/* Avatar */}
      <div className="absolute -top-8 left-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold border-4 border-white dark:border-gray-800">
          {tribe.icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-10 px-6 pb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{tribe.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tribe.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {tribe.members.slice(0, 3).map((m, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-300 to-pink-300 border-2 border-white dark:border-gray-800" />
            ))}
            {tribe.memberCount > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">
                +{tribe.memberCount - 3}
              </div>
            )}
          </div>
          
          <button className="px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors">
            Join
          </button>
        </div>
      </div>
    </div>
  )
}
