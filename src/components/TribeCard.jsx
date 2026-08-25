export default function TribeCard({ tribe }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-primary-yellow">
      {/* Banner */}
      <div className="h-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-coral via-primary-yellow to-primary-blue opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">{tribe.icon}</span>
        </div>
        {/* Decorative stripes */}
        <div className="absolute top-0 left-0 w-full h-2 bg-white/20" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-black text-primary-navy mb-2 group-hover:text-primary-coral transition-colors">{tribe.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tribe.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {tribe.members.slice(0, 3).map((m, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-coral to-primary-yellow border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            {tribe.memberCount > 3 && (
              <div className="w-8 h-8 rounded-full bg-primary-navy border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                +{tribe.memberCount - 3}
              </div>
            )}
          </div>
          
          <button className="px-4 py-2 bg-primary-yellow hover:bg-yellow-400 text-primary-navy rounded-full text-sm font-black transition-all hover:scale-105 shadow-md">
            Join
          </button>
        </div>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-primary-blue rounded-bl-full opacity-80" />
    </div>
  )
}
