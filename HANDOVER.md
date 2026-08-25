# VibeCode Community - Project Handover Manifest

**Created:** 2026-08-25  
**Last Updated:** 2026-08-25  
**Project:** AgnesCode Build Challenge Entry

---

## 🎯 Project Overview

**Product Name:** VibeCode  
**Tagline:** A community platform for AI-assisted coders to share projects, get feedback, and connect.  
**Type:** Web application (mobile-ready via Capacitor later)  
**Competition:** AgnesCode Build Challenge (One Week, One Project)  
**Deadline:** August 26, 2026, 11:30 PM GMT+8  
**Repository:** https://github.com/thrivescribe/Vibecodescribe

---

## 📋 Current Status

### ✅ Completed
- [x] Product brief created
- [x] Ground rules established (YAGNI, handover manifest)
- [x] Repository initialized on GitHub
- [x] Tech stack selected: React + Vite
- [x] Design direction: Light/dark mode toggle, magnetic cursor trail

### 🔄 In Progress
- Setting up Vercel deployment pipeline
- Creating basic test deployment

### ⏳ Pending
- [ ] Get final decisions on: demo data, scope boundary
- [ ] Initialize React project structure
- [ ] Build MVP features (YAGNI compliant)
- [ ] Test locally and on mobile
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Final challenge submission prep

---

## 🛠️ Tech Stack

| Component | Technology | Reason |
|-----------|-----------|--------|
| Framework | **React 18 + Vite** | Fast dev, great ecosystem, easy mobile wrap |
| Styling | **Tailwind CSS** | Rapid development, dark mode support |
| State Management | **Zustand** (optional) | Simple, lightweight state management |
| Mobile Ready | **Capacitor** | Wrap web app for Android/iOS later |
| Deployment | **Vercel** | Automatic deployments from GitHub |

---

## 📁 Project Structure

```
Vibecodescribe/
├── public/                    # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/           # React components
│   │   ├── CursorTrail.jsx   # Magnetic cursor effect
│   │   ├── ThemeToggle.jsx   # Light/dark mode switch
│   │   ├── Navbar.jsx
│   │   ├── Feed.jsx
│   │   └── PostCard.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Tribe.jsx
│   │   └── Profile.jsx
│   ├── data/                 # Mock data for demo
│   │   └── posts.js
│   ├── context/              # React context (theme, etc.)
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json               # Vercel configuration
├── package.json
├── vite.config.js
├── index.html
├── README.md
├── HANDOVER.md               # This file
├── GROUNDRULES.md            # Working principles
└── product-brief.md          # Original product brief
```

---

## 🎨 Design System

**Posture:** Calm × Playful × Editorial  
**Inspiration:** Behance + Discord + Skool

### Color Palette
- **Light Mode:** Clean whites, soft grays, accent color TBD
- **Dark Mode:** Deep blacks, dark grays, matching accent
- **Accent:** Will finalize based on user's vibe pictures

### Typography
- **Primary Font:** TBD (user will provide reference)
- **Fallback:** System fonts for performance

### Cursor Effect
- **Style:** Magnetic cursor trail
- **Behavior:** Element follows mouse movement smoothly
- **Interaction:** Expands/scales when hovering over clickable elements
- **Implementation:** Custom React component with requestAnimationFrame

---

## 🔑 Features (MVP - YAGNI Compliant)

### Must Have (Build These)
1. **Homepage** - Landing page with hero section
2. **Community/Tribe Pages** - Browse and join interest-based groups
3. **Project Feed** - Infinite-scroll feed of user posts
4. **User Profiles** - Showcase user's projects (basic)
5. **Post Creation** - Share projects with title, description, tags (basic form)
6. **Engagement** - Like button functionality
7. **Theme Toggle** - Light/dark mode switch
8. **Magnetic Cursor Trail** - Interactive cursor effect

### Not Needed Yet (YAGNI - Do NOT Build)
- User authentication/accounts
- Payments/monetization
- Push notifications
- Admin dashboard
- Third-party integrations
- Advanced settings
- Real-time updates (page refresh is fine)
- Comments (if scope is minimal)

---

## 🧪 Testing Criteria

**Definition of Done:**
- A person can complete this journey on both phone and desktop:
  > "Land on site → browse tribes → pick one → read 3 posts → like/comment → see example post"

**Checklist:**
- [ ] Homepage loads correctly
- [ ] Dark/light mode toggle works
- [ ] Cursor trail follows mouse smoothly
- [ ] Tribe pages accessible
- [ ] Posts display properly
- [ ] Like action works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Vercel deployment successful

---

## 🐙 GitHub Repository

**Status:** ✅ READY  
**Repo Name:** `Vibecodescribe`  
**Your GitHub:** https://github.com/thrivescribe  
**Repo URL:** https://github.com/thrivescribe/Vibecodescribe  
**Local Git:** Initialized and connected to remote

---

## ☁️ Vercel Deployment

**Status:** SETTING UP

### Deployment Pipeline
```
Local Code → git push → GitHub → Vercel auto-deploy → Live URL
```

### Steps to Complete
1. ✅ Initialize React project locally
2. ⏳ Configure vercel.json
3. ⏳ Add build scripts
4. ⏳ Connect to Vercel account
5. ⏳ Deploy first version
6. ⏳ Verify live URL works

### Expected Live URL
https://vibecodescribe.vercel.app

---

## 📝 Agent Communication Log

| Timestamp | Agent | Action | Notes |
|-----------|-------|--------|-------|
| 2026-08-25 19:54 | Primary | Establishing ground rules | Created handover manifest, defined YAGNI principle |
| 2026-08-25 19:55 | Primary | Created ground rules | YAGNI, handover protocol, ask-before-assuming |
| 2026-08-25 20:00 | Primary | Updated repo name | Changed from sgvibecodr to Vibecodescribe |
| 2026-08-25 20:09 | Primary | Clarified cursor style | Magnetic cursor trail (follows mouse), not custom cursor icon |
| 2026-08-25 20:10 | Primary | Language requirement | All documentation in English only |
| 2026-08-25 20:10 | Primary | Vercel setup | Preparing deployment pipeline |

---

## ❓ Open Questions

These require user input before proceeding:

1. ~~**Repo Name?**~~ ✅ COMPLETED: `Vibecodescribe`
2. ~~**Tech Stack?**~~ ✅ COMPLETED: **React + Vite**
3. ~~**Design Preferences?**~~ ✅ PARTIALLY COMPLETED:
   - Light mode + dark mode toggle ✅
   - Font: TBD (user will share references later)
   - Cursor style: **Magnetic cursor trail** ✅
   - Vibe: User to share pictures later ⏸️
4. **Demo Data?** - ❓ NEEDED
5. **Scope Boundary?** - ❓ NEEDED

---

## 🚀 Next Steps

1. Initialize React + Vite project
2. Install dependencies (Tailwind, etc.)
3. Set up Vercel configuration
4. Create basic project structure
5. Implement magnetic cursor trail component
6. Build homepage and feed
7. Add theme toggle
8. Test locally
9. Push to GitHub
10. Deploy to Vercel
11. Iterate based on user feedback

---

*Language Policy: All project documentation, comments, and code must be in English only.*
