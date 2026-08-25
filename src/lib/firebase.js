import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore'

// Firebase config - Replace with your own from firebase.google.com
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()

// XP Configuration
export const XP_REWARDS = {
  LOGIN: 10,
  POST: 50,
  COMMENT: 20,
  LIKE_RECEIVED: 5,
  TRIBE_JOIN: 30,
  PROFILE_COMPLETE: 25
}

// Level thresholds: Level N requires Level^2 * 50 XP
export const LEVEL_THRESHOLD = (level) => Math.pow(level, 2) * 50

// Calculate level from XP
export const calculateLevel = (xp) => {
  let level = 1
  while (XP_REWARDS.XP >= LEVEL_THRESHOLD(level)) {
    level++
  }
  return level
}

// Get progress to next level
export const getLevelProgress = (xp) => {
  const currentLevel = calculateLevel(xp)
  const currentLevelXP = LEVEL_THRESHOLD(currentLevel - 1)
  const nextLevelXP = LEVEL_THRESHOLD(currentLevel)
  const progress = xp - currentLevelXP
  const totalNeeded = nextLevelXP - currentLevelXP
  return {
    level: currentLevel,
    progress: Math.min(100, Math.max(0, (progress / totalNeeded) * 100)),
    xp: xp,
    xpToNext: nextLevelXP - xp
  }
}

// Get rank/title based on level
export const getRank = (level) => {
  const ranks = [
    { level: 1, title: 'Newbie', icon: '🌱' },
    { level: 2, title: 'Rookie', icon: '🚀' },
    { level: 3, title: 'Contributor', icon: '⭐' },
    { level: 4, title: 'Creator', icon: '✨' },
    { level: 5, title: 'Expert', icon: '💫' },
    { level: 6, title: 'Master', icon: '👑' },
    { level: 7, title: 'Legend', icon: '🏆' },
    { level: 8, title: 'Vibe Master', icon: '🔥' },
    { level: 9, title: 'Community Legend', icon: '💎' },
    { level: 10, title: 'Legendary Coder', icon: '🌟' },
    { level: 11, title: 'Code Deity', icon: '⚡' },
  ]
  return ranks[Math.min(level - 1, ranks.length - 1)]
}

// Initialize user document
export const initUser = async (user, username) => {
  const userRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userRef)
  
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || username,
      username: username,
      xp: 0,
      level: 1,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      posts: [],
      tribes: [],
      badges: []
    })
  } else {
    // Update last login and add XP
    await updateDoc(userRef, {
      lastLogin: new Date().toISOString(),
      xp: increment(XP_REWARDS.LOGIN)
    })
  }
  
  return userSnap.exists() ? userSnap.data() : {
    uid: user.uid,
    username: username,
    xp: XP_REWARDS.LOGIN,
    level: 1,
    displayName: username
  }
}

// Add XP to user
export const addXP = async (userId, amount, reason) => {
  const userRef = doc(db, 'users', userId)
  const userSnap = await getDoc(userRef)
  
  if (userSnap.exists()) {
    const oldXP = userSnap.data().xp || 0
    const newXP = oldXP + amount
    const newLevel = calculateLevel(newXP)
    
    await updateDoc(userRef, {
      xp: increment(amount),
      level: newLevel
    })
    
    return {
      oldXP,
      newXP,
      oldLevel: calculateLevel(oldXP),
      newLevel,
      leveledUp: newLevel > calculateLevel(oldXP)
    }
  }
  
  return null
}

// Sign out
export const logout = () => signOut(auth)

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Sign in error:', error)
    throw error
  }
}
