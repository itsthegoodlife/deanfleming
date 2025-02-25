'use client'

import { LandingCard } from "@/components/landing-card"
import { AnimatedBackground } from "@/components/animated-background"
import { Sparkles, Terminal, Cpu, Scan, Power } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [systemMessages, setSystemMessages] = useState<string[]>([]);
  
  // Simulate system boot sequence
  useEffect(() => {
    const messages = [
      "Initializing quantum interface...",
      "Establishing neural connection...",
      "Loading holographic projections...",
      "Calibrating dimensional stabilizers...",
      "Synchronizing temporal flux...",
      "Activating Dean Fleming's digital presence..."
    ];
    
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        setSystemMessages(prev => [...prev, messages[currentIndex]]);
        currentIndex++;
        setLoadingProgress(prev => prev + (100 / messages.length));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 selection:bg-purple-500/20 selection:text-purple-200 overflow-hidden relative">
      <AnimatedBackground />
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          >
            <div className="w-full max-w-md space-y-8">
              <div className="flex items-center justify-center">
                <Power className="h-16 w-16 text-purple-500 animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    animate={{ width: `${loadingProgress}%` }}
                  />
                </div>
                
                <div className="font-mono text-xs text-neutral-500 h-32 overflow-hidden flex flex-col-reverse">
                  {systemMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-purple-400"
                    >
                      &gt; {message}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-center text-neutral-400 text-sm">
                <p>Initializing Dean Fleming's Digital Space</p>
                <p className="text-xs text-neutral-600 mt-1">{Math.round(loadingProgress)}% complete</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      {/* Futuristic decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isLoading ? 3.7 : 0, duration: 0.5 }}
        className="absolute top-8 left-8 z-10 text-purple-500/30"
      >
        <Terminal className="h-6 w-6" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isLoading ? 3.9 : 0, duration: 0.5 }}
        className="absolute top-8 right-8 z-10 text-blue-500/30"
      >
        <Cpu className="h-6 w-6" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isLoading ? 4.1 : 0, duration: 0.5 }}
        className="absolute bottom-24 left-8 z-10 text-pink-500/30"
      >
        <Scan className="h-6 w-6" />
      </motion.div>
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: isLoading ? 3.5 : 0, duration: 0.8 }}
      >
        <LandingCard />
      </motion.div>
      
      {/* Footer */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: isLoading ? 4 : 0, duration: 0.5 }}
        className="absolute bottom-4 text-neutral-500 text-xs z-10 flex flex-col items-center"
      >
        <p>© {new Date().getFullYear()} Dean Fleming. All rights reserved.</p>
      </motion.div>
      
      {/* Interactive corner decorations */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-[100px] h-[100px]">
          <div className="absolute top-0 left-0 w-[1px] h-[40px] bg-purple-500/30" />
          <div className="absolute top-0 left-0 w-[40px] h-[1px] bg-purple-500/30" />
        </div>
        
        <div className="absolute top-0 right-0 w-[100px] h-[100px]">
          <div className="absolute top-0 right-0 w-[1px] h-[40px] bg-blue-500/30" />
          <div className="absolute top-0 right-0 w-[40px] h-[1px] bg-blue-500/30" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-[100px] h-[100px]">
          <div className="absolute bottom-0 left-0 w-[1px] h-[40px] bg-pink-500/30" />
          <div className="absolute bottom-0 left-0 w-[40px] h-[1px] bg-pink-500/30" />
        </div>
        
        <div className="absolute bottom-0 right-0 w-[100px] h-[100px]">
          <div className="absolute bottom-0 right-0 w-[1px] h-[40px] bg-purple-500/30" />
          <div className="absolute bottom-0 right-0 w-[40px] h-[1px] bg-purple-500/30" />
        </div>
      </div>
    </main>
  )
}
