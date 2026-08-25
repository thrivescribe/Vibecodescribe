export default function PostCard({ post }) {
  const { liked, toggleLike } = post
  
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border-2 border-gray-100 hover:border-primary-coral/30">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-coral to-primary-yellow flex items-center justify-center text-white font-bold text-lg">
          {post.author.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-primary-navy">{post.author}</h3>
          <p className="text-xs text-gray-500">{post.time}</p>
        </div>
        <span className="px-3 py-1 bg-primary-yellow text-primary-navy text-xs font-bold rounded-full">
          {post.tribe}
        </span>
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
      
      {post.image && (
        <div className="mb-4 rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-200">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 hover:bg-primary-blue/20 text-gray-600 hover:text-primary-blue rounded-lg text-sm cursor-pointer transition-colors">
            #{tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
        <button
          onClick={() => toggleLike && toggleLike(post.id)}
          className={`flex items-center gap-2 text-sm font-medium transition-colors ${liked ? 'text-primary-coral' : 'text-gray-500 hover:text-primary-coral'}`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-blue transition-colors font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-yellow transition-colors ml-auto font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>
    </article>
  )
}
