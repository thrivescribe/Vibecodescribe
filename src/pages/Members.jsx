import { useState } from 'react'
import { ArrowLeft, Search, Filter, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const mockMembers = [
  { id: 1, username: 'alexchen', level: 6, xp: 2450, rank: 'Creator', isOnline: true, isAdmin: true, joinDate: 'Jan 2024', posts: 45, comments: 123 },
  { id: 2, username: 'mayaliu', level: 5, xp: 1890, rank: 'Contributor', isOnline: true, isAdmin: false, joinDate: 'Feb 2024', posts: 32, comments: 89 },
  { id: 3, username: 'jordanpark', level: 5, xp: 1560, rank: 'Contributor', isOnline: false, isAdmin: false, joinDate: 'Mar 2024', posts: 28, comments: 67 },
  { id: 4, username: 'sarahkim', level: 4, xp: 1340, rank: 'Rookie', isOnline: true, isAdmin: false, joinDate: 'Apr 2024', posts: 22, comments: 45 },
  { id: 5, username: 'mikechen', level: 4, xp: 1200, rank: 'Rookie', isOnline: false, isAdmin: true, joinDate: 'May 2024', posts: 19, comments: 56 },
  { id: 6, username: 'emma_w', level: 3, xp: 980, rank: 'Newbie', isOnline: true, isAdmin: false, joinDate: 'Jun 2024', posts: 15, comments: 34 },
  { id: 7, username: 'davidjones', level: 3, xp: 850, rank: 'Newbie', isOnline: false, isAdmin: false, joinDate: 'Jul 2024', posts: 12, comments: 28 },
  { id: 8, username: 'lisawong', level: 3, xp: 720, rank: 'Newbie', isOnline: true, isAdmin: false, joinDate: 'Aug 2024', posts: 10, comments: 22 },
]

const ranks = ['All Ranks', 'Newbie', 'Rookie', 'Contributor', 'Creator', 'Expert']

export default function Members() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('xp')
  const [filterRank, setFilterRank] = useState('all')

  const filteredMembers = mockMembers
    .filter(member => member.username.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(member => filterRank === 'all' || member.rank === filterRank)
    .sort((a, b) => {
      if (sortBy === 'xp') return b.xp - a.xp
      if (sortBy === 'level') return b.level - a.level
      if (sortBy === 'posts') return b.posts - a.posts
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-primary-navy transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-coral" />
              <h1 className="text-xl font-black text-primary-navy">Members</h1>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-primary-navy text-white rounded-lg font-bold text-sm hover:bg-primary-navy/90 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          {/* Search & Filters */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary-coral outline-none"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-gray-100 border-none rounded-xl text-sm font-bold focus:ring-2 focus:ring-primary-coral outline-none"
            >
              <option value="xp">Most XP</option>
              <option value="level">Highest Level</option>
              <option value="posts">Most Posts</option>
            </select>
          </div>

          {/* Rank Filter */}
          <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
            {ranks.map((rank) => (
              <button
                key={rank}
                onClick={() => setFilterRank(rank.toLowerCase())}
                className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  filterRank === rank.toLowerCase() 
                    ? 'bg-primary-coral text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {rank}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-primary-coral/30 transition-all hover:shadow-md cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                    member.isAdmin 
                      ? 'from-primary-coral to-primary-yellow' 
                      : member.isOnline 
                        ? 'from-blue-400 to-blue-600' 
                        : 'from-gray-400 to-gray-500'
                  } flex items-center justify-center text-white font-bold text-lg`}>
                    {member.username.charAt(0).toUpperCase()}
                  </div>
                  {member.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-primary-navy truncate">{member.username}</span>
                    {member.isAdmin && (
                      <span className="px-2 py-0.5 bg-primary-coral text-white text-xs font-black rounded-full">
                        ADMIN
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-primary-yellow/20 text-primary-navy text-xs font-bold rounded-full">
                      Level {member.level}
                    </span>
                    <span className="text-xs text-gray-500">{member.rank}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{member.xp} XP</span>
                    <span>•</span>
                    <span>{member.posts} posts</span>
                    <span>•</span>
                    <span>{member.comments} comments</span>
                  </div>
                </div>
                
                <button className="px-3 py-1.5 bg-primary-navy/5 hover:bg-primary-navy hover:text-white text-primary-navy rounded-lg text-xs font-bold transition-colors">
                  View
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress to Level {member.level + 1}</span>
                  <span>{Math.min(Math.floor((member.xp / ((member.level + 1) ** 2 * 50)) * 100), 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-coral to-primary-yellow rounded-full transition-all"
                    style={{ width: `${Math.min((member.xp / ((member.level + 1) ** 2 * 50)) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-black text-lg text-primary-navy mb-2">No members found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
