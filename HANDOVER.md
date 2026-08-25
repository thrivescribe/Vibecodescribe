# VibeCode Community - Project Handover Manifest
**Repository:** https://github.com/thrivescribe/Vibecodescribe
**Live URL:** https://vibecodescribe.vercel.app

---

## Project Overview
Vibe Coding Community website for AgnesCode Build Challenge, inspired by AI Workshop Lite / Skool design. Users can sign in with Google, choose username, earn XP/levels, and interact through posts and comments.

---

## Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom config with cream/navy/coral/yellow/blue palette)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Auth:** Firebase (Google Sign-In, planned)
- **Deployment:** Vercel

---

## Core Features Built

### 1. Navigation & Layout
- **Navbar.jsx**: Shows different UI for logged in/out users
- **CursorTrail.jsx**: Magnetic cursor trail effect
- **ThemeToggle.jsx**: Light/dark mode toggle
- **Color Palette**: Cream (#FFF8F0), Navy (#1A1A2E), Coral (#FF6B6B), Yellow (#FFD93D), Blue (#74C0FC)

### 2. Pages
- **Feed.jsx**: Community feed with stats bar (Members: 12.8K, Online: 342, Admins: 12), category tabs, pinned announcements
- **Members.jsx**: Member listing with search, filter by rank, sort by XP/level/posts, progress bars
- **Leaderboards.jsx**: 30-day leaderboard with podium (top 3), full list, category filters
- **CreatePost.jsx**: Post creation with type selector (Share/Question/Discussion), category, tags
- **Tribes.jsx**: Tribe browsing page

### 3. Components
- **PostCard.jsx**: Post display with like/comment/share actions
- **Sidebar.jsx**: Trending tribes, hot tags, top creators
- **Hero.jsx**: Landing page hero section

---

## XP System Design
- **Formula**: Level = sqrt(XP/50) + 1
- **Rewards**: Login: 10, Post: 50, Comment: 20, Like received: 5, Tribe join: 30
- **Ranks**: Newbie → Rookie → Contributor → Creator → Expert → Master → Vibe Master

---

## File Structure
```
src/
├── App.jsx                    # Router with all routes
├── main.jsx                   # Entry point
├── index.css                  # Global styles, cursor trail
├── components/
│   ├── Navbar.jsx            # Nav with auth state
│   ├── CursorTrail.jsx       # Mouse trail effect
│   ├── ThemeToggle.jsx       # Light/dark toggle
│   ├── PostCard.jsx          # Post card component
│   └── Sidebar.jsx           # Right sidebar
└── pages/
    ├── Feed.jsx              # Main community feed
    ├── Members.jsx           # Members directory
    ├── Leaderboards.jsx      # XP leaderboard
    ├── CreatePost.jsx        # Post creation
    └── Tribes.jsx            # Tribes browsing
```

---

## Routes
- `/` - Feed (Community)
- `/members` - Members directory
- `/leaderboards` - XP Leaderboards
- `/create` - Create post
- `/tribes` - Tribes browsing

---

## Deployment
- **Vercel**: vibecodescribe.vercel.app
- **GitHub**: https://github.com/thrivescribe/Vibecodescribe
- **Build**: npm run build (uses Vercel auto-detection for Vite)

---

## Pending Tasks
- [ ] Complete Firebase authentication setup
- [ ] Implement real-time comment system
- [ ] Add user profile pages
- [ ] Mobile responsive testing
- [ ] Connect to backend API (Firebase Firestore)

---

## Agent Communication Log
- 2026-08-22: Initial project setup, color theme extraction from reference images
- 2026-08-22: Built navigation, cursor trail, light/dark mode
- 2026-08-23: Added Members and Leaderboards pages following AI Workshop Lite design
- 2026-08-23: Enhanced Feed with community stats bar and category tabs
- 2026-08-23: Updated CreatePost with post type selector

---

## Ground Rules
1. YAGNI Principle - Only build MVP features
2. Ask before assuming - Confirm with user before adding features
3. English only - All documentation in English
4. Update HANDOVER.md after every code change
