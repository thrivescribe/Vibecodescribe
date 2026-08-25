import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        // Fetch user data from Firestore
        const userRef = doc(db, 'users', authUser.uid)
        const userSnap = await getDoc(userRef)
        
        if (userSnap.exists()) {
          setUserData(userSnap.data())
        } else {
          // New user - redirect to username selection
          setUserData({ isNew: true })
        }
      }
      setUser(authUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const addXP = async (amount, reason) => {
    if (!user) return
    
    const userRef = doc(db, 'users', user.uid)
    const oldData = await getDoc(userRef)
    
    if (!oldData.exists()) return
    
    const oldXP = oldData.data().xp || 0
    const newXP = oldXP + amount
    const newLevel = Math.floor(Math.sqrt(newXP / 50)) + 1
    
    await updateDoc(userRef, {
      xp: increment(amount),
      level: newLevel
    })
    
    setUserData(prev => ({ ...prev, xp: newXP, level: newLevel }))
    
    return { oldXP, newXP, oldLevel: Math.floor(Math.sqrt(oldXP / 50)) + 1, newLevel }
  }

  const value = {
    user,
    userData,
    loading,
    addXP
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
