'use client'

import { motion } from "framer-motion"
import { useEffect, useState, useMemo, useCallback, useRef } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [cursorActive, setCursorActive] = useState(false)
  const isInitialMount = useRef(true)
  const mouseMoveRef = useRef((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  })

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      setMounted(true)
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const updateScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseDown = () => {
      setCursorActive(true)
    }

    const handleMouseUp = () => {
      setCursorActive(false)
    }

    window.addEventListener('mousemove', mouseMoveRef.current)
    window.addEventListener('resize', updateDimensions)
    window.addEventListener('scroll', updateScroll)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', mouseMoveRef.current)
      window.removeEventListener('resize', updateDimensions)
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Generate random stars with memoization
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      blinkDuration: Math.random() * 3 + 2
    }))
  }, [])

  // Generate shooting stars
  const shootingStars = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      endX: Math.random() * 100,
      endY: Math.random() * 100 + 50,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 10,
      size: Math.random() * 1 + 1
    }))
  }, [])

  // Generate cosmic dust particles
  const cosmicDust = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      rotationDuration: Math.random() * 100 + 50,
      orbitRadius: Math.random() * 50 + 10,
      orbitSpeed: Math.random() * 20 + 10
    }))
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black">
        {/* Additional gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-purple-950/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-indigo-950/10 to-transparent" />
      </div>
      
      {/* Subtle animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: cursorActive ? [1, 1.2, 1] : [1, 1, 1],
            }}
            transition={{
              opacity: {
                duration: star.blinkDuration,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: 0.5,
              }
            }}
          />
        ))}
      </div>
      
      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden">
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute h-[1px] bg-white origin-left"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              width: `${star.size * 10}px`,
            }}
            animate={{
              left: [`${star.startX}%`, `${star.endX}%`],
              top: [`${star.startY}%`, `${star.endY}%`],
              opacity: [0, 1, 0],
              width: [`${star.size * 10}px`, `${star.size * 30}px`],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatDelay: star.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      
      {/* Cosmic dust particles */}
      <div className="absolute inset-0">
        {cosmicDust.map((dust) => (
          <motion.div
            key={dust.id}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${dust.size}px`,
              height: `${dust.size}px`,
              opacity: dust.opacity,
              x: `calc(${dust.x}% - ${dust.size / 2}px)`,
              y: `calc(${dust.y}% - ${dust.size / 2}px)`,
            }}
            animate={{
              x: [
                `calc(${dust.x}% - ${dust.size / 2}px + ${dust.orbitRadius}px)`,
                `calc(${dust.x}% - ${dust.size / 2}px)`,
                `calc(${dust.x}% - ${dust.size / 2}px - ${dust.orbitRadius}px)`,
                `calc(${dust.x}% - ${dust.size / 2}px)`,
                `calc(${dust.x}% - ${dust.size / 2}px + ${dust.orbitRadius}px)`,
              ],
              y: [
                `calc(${dust.y}% - ${dust.size / 2}px)`,
                `calc(${dust.y}% - ${dust.size / 2}px + ${dust.orbitRadius}px)`,
                `calc(${dust.y}% - ${dust.size / 2}px)`,
                `calc(${dust.y}% - ${dust.size / 2}px - ${dust.orbitRadius}px)`,
                `calc(${dust.y}% - ${dust.size / 2}px)`,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: dust.orbitSpeed,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Nebula effect */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/10 via-transparent to-transparent"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-repeat [mask-image:radial-gradient(white,transparent_80%)]" />
      
      {/* Particle effect */}
      <div className="absolute inset-0">
        {mounted && Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
              opacity: [null, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  )
} 