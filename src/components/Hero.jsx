export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-primary-cream">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-yellow rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary-coral rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary-blue rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-navy text-primary-cream rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary-coral rounded-full animate-pulse"></span>
              Welcome to the future of coding
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none text-primary-navy">
              Code by{' '}
              <span className="text-primary-coral">Vibe,</span>
              <br />
              Build with{' '}
              <span className="text-primary-blue">AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Join thousands of AI-assisted coders sharing projects, learning prompts, 
              and building the future together. No code reviews required - just vibes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary-coral hover:bg-red-500 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                Start Creating
              </button>
              <button className="px-8 py-4 bg-primary-yellow hover:bg-yellow-400 text-primary-navy rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                Browse Tribes
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {[
                { label: 'Creators', value: '12K+', color: 'text-primary-coral' },
                { label: 'Projects', value: '48K+', color: 'text-primary-blue' },
                { label: 'Tribes', value: '156', color: 'text-primary-yellow' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative tickets/cards */}
              <div className="absolute top-0 right-0 w-64 bg-primary-coral rounded-2xl p-6 text-white transform rotate-12 shadow-2xl animate-float">
                <div className="text-xs font-bold uppercase tracking-wider mb-2">ADMIT ONE</div>
                <div className="text-2xl font-black">Daily Vibes</div>
                <div className="text-sm opacity-90 mt-2">A fresh pop culture question daily</div>
              </div>
              
              <div className="absolute top-16 left-0 w-64 bg-primary-yellow rounded-2xl p-6 text-primary-navy transform -rotate-6 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2">GROUP PASS</div>
                <div className="text-2xl font-black">Host a Game</div>
                <div className="text-sm opacity-90 mt-2">Choose a party game and bring a crew</div>
                <div className="mt-3 text-xs font-bold">8-10 PLAYERS</div>
              </div>
              
              <div className="absolute bottom-0 right-8 w-64 bg-primary-blue rounded-2xl p-6 text-primary-navy transform rotate-3 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2">SINGLE PASS</div>
                <div className="text-2xl font-black">Join a Game</div>
                <div className="text-sm opacity-90 mt-2">Enter a room code and play with your crew</div>
                <div className="mt-3 text-xs font-bold">ANYTIME • 2-10 PLAYERS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary-navy" />
    </section>
  )
}
