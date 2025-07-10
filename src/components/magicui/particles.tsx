"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

interface Particle {
  x: number
  y: number
  duration: number
  delay: number
  translateX: number
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < quantity; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: 20 + Math.random() * 20,
          delay: Math.random() * 20,
          translateX: Math.random() * 200 - 100,
        })
      }
      setParticles(newParticles)
    }

    createParticles()
  }, [quantity, refresh])

  return (
    <div className={cn("fixed inset-0 pointer-events-none", className)}>
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute h-0.5 w-0.5 rounded-full bg-white/20 animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            "--translate-x": `${particle.translateX}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}