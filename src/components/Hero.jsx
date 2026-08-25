export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
          Welcome to the future of coding
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-tight">
          Code by Vibe, Build with AI
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of AI-assisted coders sharing projects, learning prompts, 
          and building the future together. No code reviews required - just vibes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold text-lg transition-all hover:scale-105">
            Start Creating
          </button>
          <button className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 transition-all">
            Browse Tribes
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { label: 'Creators', value: '12K+' },
            { label: 'Projects', value: '48K+' },
            { label: 'Tribes', value: '156' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
