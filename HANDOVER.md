# VibeCode Community - Project Handover Manifest
**Repository:** https://github.com/thrivescribe/Vibecodescribe
**Live URL:** https://work-one-rose.vercel.app
**Last Updated:** 2026-08-25

---

## Project Overview
Vibe Coding Community website for AgnesCode Build Challenge, inspired by AI Workshop Lite / Skool design patterns. Users can sign in with Google, choose username, earn XP/levels, and interact through posts and comments.

---

## Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom config with cream/navy/coral/yellow/blue palette)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Auth:** Firebase (Google Sign-In, planned implementation)
- **Deployment:** Vercel with custom alias vibecodescribe.vercel.app

---

## Core Features Built

### 1. Navigation & Layout
- **Navbar.jsx**: Shows different UI for logged in/out users with Community/Members/Leaderboards tabs
- **CursorTrail.jsx**: Magnetic cursor trail effect using requestAnimationFrame
- **ThemeToggle.jsx**: Light/dark mode toggle with localStorage persistence
- **Color Palette**: Cream (#FFF8F0), Navy (#1A1A2E), Coral (#FF6B6B), Yellow (#FFD93D), Blue (#74C0FC)

### 2. Pages (AI Workshop Lite Design)
- **Feed.jsx**: Community feed with stats bar (Members: 12.8K, Online: 342, Admins: 12), category tabs (All Vibes/General/Announcements/Meet & Greet/Ask & Assist), pinned announcements, post cards
- **Members.jsx**: Member directory with search, filter by rank (Newbie/Rookie/Contributor/Creator), sort by XP/level/posts, progress bars to next level
- **Leaderboards.jsx**: 30-day leaderboard with podium visualization (top 3), full list with trend indicators, category filters
- **CreatePost.jsx**: Post creation with type selector (Share/Question/Discussion), category dropdown, tag input
- **Tribes.jsx**: Tribe browsing page (placeholder)

### 3. Components
- **PostCard.jsx**: Post display with like/comment/share actions, author avatar, timestamp, tags
- **Sidebar.jsx**: Trending tribes, hot tags, top creators
- **Hero.jsx**: Landing page hero section (existing)

---

## XP System Design
- **Formula**: Level = floor(sqrt(XP/50)) + 1
- **Rewards**: Login: 10, Post: 50, Comment: 20, Like received: 5, Tribe join: 30, Profile complete: 25
- **Ranks**: Newbie → Rookie → Contributor → Creator → Expert → Master → Vibe Master → Community Legend → Legendary Coder → Code Deity
- **Threshold**: Level N requires N² × 50 XP

---

## File Structure
```
src/
├── App.jsx                    # Router with all routes
├── main.jsx                   # Entry point
├── index.css                  # Global styles, cursor trail, color variables
├── components/
│   ├── Navbar.jsx            # Nav with auth state (Community/Members/Leaderboards)
│   ├── CursorTrail.jsx       # Mouse trail effect
│   ├── ThemeToggle.jsx       # Light/dark toggle
│   ├── PostCard.jsx          # Post card component
│   ├── Sidebar.jsx           # Right sidebar
│   ├── SignInButton.jsx      # Google sign-in button
│   └── UsernameOnboarding.jsx # Username selection after signup
├── context/
│   └── UserContext.jsx       # Auth state and XP management
├── lib/
│   └── firebase.js           # Firebase config, XP rewards, level calculation
└── pages/
    ├── Feed.jsx              # Main community feed with stats bar
    ├── Members.jsx           # Members directory with search/filter
    ├── Leaderboards.jsx      # XP leaderboard with podium
    ├── CreatePost.jsx        # Post creation with type selector
    └── Tribes.jsx            # Tribes browsing
```

---

## Routes
- `/` - Feed (Community)
- `/members` - Members directory
- `/leaderboards` - XP Leaderboards
- `/create` - Create post (Share/Question/Discussion)
- `/tribes` - Tribes browsing

---

## Deployment
- **Vercel Production**: https://work-jwodiuhts-pf23.vercel.app (Latest: HTTP 200 ✓)
- **GitHub**: https://github.com/thrivescribe/Vibecodescribe
- **Build**: npm run build (uses Vercel auto-detection for Vite)
- **vercel.json**: Proper Vite configuration

---

## Pending Tasks
- [ ] Complete Firebase authentication setup with actual Firebase config
- [ ] Implement real-time comment system on posts
- [ ] Add user profile pages with XP progress display
- [ ] Connect to backend API (Firebase Firestore)
- [ ] Mobile responsive testing for all new pages
- [ ] Add image upload functionality for posts
- [ ] Fix custom domain alias (SSO protection issue - use https://work-one-rose.vercel.app)
- [ ] Fix custom domain alias (SSO protection issue)

---

## Agent Communication Log
- 2026-08-22: Initial project setup, color theme extraction from reference images
- 2026-08-22: Built navigation, cursor trail, light/dark mode toggle
- 2026-08-23: Created Members page with search/filter/sort functionality
- 2026-08-23: Created Leaderboards page with podium visualization
- 2026-08-23: Enhanced Feed with community stats bar and category tabs (AI Workshop Lite style)
- 2026-08-23: Updated CreatePost with post type selector (Share/Question/Discussion)
- 2026-08-23: Updated Navbar with auth-aware navigation (Community/Members/Leaderboards)
- 2026-08-25: Fixed Git author info (changed from johnnyboi to thrivescribe)
- 2026-08-25: Deployed successfully at https://work-one-rose.vercel.app (HTTP 200)
- 2026-08-25: Custom domain alias needs manual fix due to SSO protection

---

## Ground Rules
1. **YAGNI Principle** - Only build MVP features, no "just in case" code
2. **Ask before assuming** - Confirm with user before making decisions
3. **English only** - All documentation and comments in English
4. **Update HANDOVER.md** - After every significant code change

---

## Key Design Patterns
- Stats bar at top showing Members/Online/Admins counts
- Category tabs for filtering content (All Vibes/General/Announcements/Meet & Greet/Ask & Assist)
- Pinned announcements with visual distinction
- Member avatars shown in horizontal scroll
- Settings button for tribe management
- Leaderboard with medal visualization for top 3
- Progress bars showing XP progression to next level
