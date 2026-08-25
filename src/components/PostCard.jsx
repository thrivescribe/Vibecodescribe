export default function PostCard({ post }) {
  const { liked, toggleLike } = post
  
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white font-bold">
          {post.author.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">{post.author}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{post.time}</p>
        </div>
        <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-xs rounded-full">
          {post.tribe}
        </span>
      </div>

      {/* Content */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{post.content}</p>
      
      {post.image && (
        <div className="mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-lg">
            #{tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleLike && toggleLike(post.id)}
          className={`flex items-center gap-2 text-sm transition-colors ${liked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-500'}`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-violet-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-violet-500 transition-colors ml-auto">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>
    </article>
  )
}
