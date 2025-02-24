'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#3B0764,transparent)]" />
      
      {/* Animated orbs */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        className="absolute inset-0"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [-90, 0, -90] 
          }}
          transition={{ duration: 17, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/20 rounded-full blur-[100px]" 
        />
      </motion.div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-repeat [mask-image:radial-gradient(white,transparent_80%)]" />
      
      {/* Particle effect */}
      <div className="absolute inset-0">
        {mounted && Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
          />
        ))}
      </div>
    </div>
  )
} 