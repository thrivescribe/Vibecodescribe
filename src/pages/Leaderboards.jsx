import { useState } from 'react'
import { ArrowLeft, Search, Trophy, Flame, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const mockLeaderboard = [
  { rank: 1, username: 'alexchen', xp: 2450, trend: '+852', emoji: '🔥', avatar: 'from-primary-coral to-primary-yellow' },
  { rank: 2, username: 'mayaliu', xp: 1890, trend: '+420', emoji: '🔥', avatar: 'from-blue-400 to-blue-600' },
  { rank: 3, username: 'jordanpark', xp: 1560, trend: '+198', emoji: '🔥', avatar: 'from-green-400 to-green-600' },
  { rank: 4, username: 'sarahkim', xp: 1340, trend: '+156', avatar: 'from-purple-400 to-purple-600' },
  { rank: 5, username: 'mikechen', xp: 1200, trend: '+134', avatar: 'from-orange-400 to-orange-600' },
  { rank: 6, username: 'emma_w', xp: 980, trend: '+98', avatar: 'from-pink-400 to-pink-600' },
  { rank: 7, username: 'davidjones', xp: 850, trend: '+76', avatar: 'from-teal-400 to-teal-600' },
  { rank: 8, username: 'lisawong', xp: 720, trend: '+64', avatar: 'from-indigo-400 to-indigo-600' },
  { rank: 9, username: 'tomsmith', xp: 680, trend: '+52', avatar: 'from-red-400 to-red-600' },
  { rank: 10, username: 'natashaross', xp: 620, trend: '+48', avatar: 'from-amber-400 to-amber-600' },
]

const medalColors = {
  1: 'from-yellow-300 via-yellow-400 to-yellow-500',
  2: 'from-gray-300 via-gray-400 to-gray-500',
  3: 'from-amber-600 via-amber-700 to-amber-800',
}

export default function Leaderboards() {
  const [timeFilter, setTimeFilter] = useState('30d')

  const timeFilters = [
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: 'all', label: 'All Time' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-primary-navy transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary-coral" />
              <h1 className="text-xl font-black text-primary-navy">Leaderboard</h1>
            </div>

            <div className="w-16"></div>
          </div>

          {/* Time filter */}
          <div className="flex gap-2 mt-4">
            {timeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setTimeFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  timeFilter === filter.id
                    ? 'bg-primary-navy text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Top 3 Podium */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border-2 border-gray-100">
          <div className="flex items-end justify-center gap-4 mb-6">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${mockLeaderboard[1].avatar} flex items-center justify-center text-white font-black text-2xl mb-2`}>
                {mockLeaderboard[1].username.charAt(0).toUpperCase()}
              </div>
              <div className={`w-12 h-12 rounded-t-lg bg-gradient-to-t ${medalColors[2]} flex items-center justify-center`}>
                <span className="text-white font-black text-lg">#2</span>
              </div>
              <div className="mt-2 text-center">
                <div className="font-black text-sm text-primary-navy">{mockLeaderboard[1].username}</div>
                <div className="text-xs text-gray-500">{mockLeaderboard[1].trend} XP</div>
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${mockLeaderboard[0].avatar} flex items-center justify-center text-white font-black text-3xl mb-2 ring-4 ring-primary-yellow`}>
                {mockLeaderboard[0].username.charAt(0).toUpperCase()}
              </div>
              <div className={`w-16 h-16 rounded-t-lg bg-gradient-to-t ${medalColors[1]} flex items-center justify-center`}>
                <span className="text-white font-black text-xl">#1</span>
              </div>
              <div className="mt-2 text-center">
                <div className="font-black text-primary-navy">{mockLeaderboard[0].username}</div>
                <div className="text-xs text-primary-coral font-bold">{mockLeaderboard[0].trend} XP {mockLeaderboard[0].emoji}</div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${mockLeaderboard[2].avatar} flex items-center justify-center text-white font-black text-2xl mb-2`}>
                {mockLeaderboard[2].username.charAt(0).toUpperCase()}
              </div>
              <div className={`w-12 h-12 rounded-t-lg bg-gradient-to-t ${medalColors[3]} flex items-center justify-center`}>
                <span className="text-white font-black text-lg">#3</span>
              </div>
              <div className="mt-2 text-center">
                <div className="font-black text-sm text-primary-navy">{mockLeaderboard[2].username}</div>
                <div className="text-xs text-gray-500">{mockLeaderboard[2].trend} XP</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-4"></div>

          {/* Full List */}
          <div className="space-y-2">
            {mockLeaderboard.slice(3).map((user) => (
              <div
                key={user.rank}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-8 text-center">
                  <span className="text-gray-400 font-bold text-sm">#{user.rank}</span>
                </div>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${user.avatar} flex items-center justify-center text-white font-bold`}>
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-primary-navy text-sm">{user.username}</div>
                </div>
                <div className="flex items-center gap-1">
                  {user.emoji && <span className="text-sm">{user.emoji}</span>}
                  <span className="font-black text-primary-coral text-sm">+{user.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 text-primary-coral font-bold text-sm hover:bg-primary-coral/5 rounded-xl transition-colors">
            See Full Leaderboard →
          </button>
        </div>

        {/* Leaderboard Categories */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
          <h2 className="font-black text-lg mb-4 flex items-center gap-2 text-primary-navy">
            <Star className="w-5 h-5 text-primary-yellow" />
            Categories
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Top Contributors', icon: '🏆', desc: 'Most XP earned' },
              { name: 'Active Members', icon: '👥', desc: 'Most active daily' },
              { name: 'Newcomers', icon: '🌟', desc: 'Fastest rising' },
              { name: 'Problem Solvers', icon: '💡', desc: 'Best helpers' },
            ].map((cat, i) => (
              <button
                key={i}
                className="p-4 rounded-xl border-2 border-gray-100 hover:border-primary-coral/30 hover:bg-primary-coral/5 transition-all text-left"
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className="font-bold text-primary-navy text-sm">{cat.name}</div>
                <div className="text-xs text-gray-500">{cat.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
