import { useState, useEffect, useRef } from 'react'
import '../index.css'

export default function CursorTrail() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      
      // Check if hovering over interactive elements
      const target = e.target
      const isInteractive = target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
        target.closest('a, button, [role="button"]')
      
      setIsHovering(!!isInteractive)
    }

    const animate = () => {
      const current = currentRef.current
      const target = targetRef.current
      
      // Smooth follow with easing
      const dx = target.x - current.x
      const dy = target.y - current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      
      if (dist > 0.5) {
        const speed = dist > 100 ? 0.15 : 0.25
        current.x += dx * speed
        current.y += dy * speed
        
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${current.x - 4}px, ${current.y - 4}px)`
        }
        if (outlineRef.current) {
          const outlineScale = isHovering ? 1.5 : 1
          outlineRef.current.style.transform = `translate(${current.x}px, ${current.y - 20}px) scale(${outlineScale})`
        }
      }
      
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    const animId = requestAnimationFrame(animate)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [isHovering])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  )
}
