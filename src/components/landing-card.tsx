'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Github, Linkedin, Mail, ExternalLink, Code2, Rocket, Sparkles, ArrowRight, Globe, Zap } from "lucide-react"
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const MotionCard = motion(Card)
const MotionButton = motion(Button)

// Custom X icon component
const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

// Define proper types
interface ProjectCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
  href: string;
}

interface SocialButtonProps {
  icon: React.ElementType;
  color: 'blue' | 'purple' | 'sky' | 'green' | 'pink';
  href: string;
  text: string;
}

export function LandingCard() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position for holographic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Calculate holographic gradient based on mouse position
  const holographicGradient = `
    linear-gradient(
      ${135 + mousePosition.x * 30}deg,
      rgba(76, 29, 149, 0.05) 0%,
      rgba(124, 58, 237, 0.1) 25%,
      rgba(139, 92, 246, 0.15) 50%,
      rgba(167, 139, 250, 0.1) 75%,
      rgba(196, 181, 253, 0.05) 100%
    )
  `;

  return (
    <MotionCard 
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl backdrop-blur-3xl border-neutral-800/50 relative overflow-hidden group"
      style={{
        background: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
          ${holographicGradient}
        `,
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Holographic noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      {/* Glowing orb */}
      <motion.div 
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: mousePosition.x * 400 - 150,
          y: mousePosition.y * 400 - 150,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(76, 29, 149, 0.05) 70%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/10" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-[10px] w-full"
          animate={{
            top: ["-10px", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      <CardContent className="p-8 md:p-12 flex flex-col items-center gap-8 relative z-10">
        {/* Profile Section with 3D tilt effect */}
        <Tilt>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={() => setActiveSection('profile')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin-slow" />
            
            {/* Holographic ring */}
            <motion.div 
              className="absolute -inset-4 rounded-full"
              style={{
                background: `conic-gradient(
                  from ${mousePosition.x * 360}deg at 50% 50%,
                  rgba(139, 92, 246, 0) 0%,
                  rgba(139, 92, 246, 0.1) 25%,
                  rgba(139, 92, 246, 0.3) 50%,
                  rgba(139, 92, 246, 0.1) 75%,
                  rgba(139, 92, 246, 0) 100%
                )`,
                opacity: activeSection === 'profile' ? 0.8 : 0,
                transition: 'opacity 0.3s ease',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <Avatar className="h-32 w-32 border-2 border-neutral-800/50 relative ring-2 ring-purple-500/20 ring-offset-2 ring-offset-black/50">
              <AvatarImage src="https://avatars.githubusercontent.com/u/6792974?s=400&u=2479104bd5acc3d9fefc113ec0528d4675eba277&v=4" alt="Dean Fleming" />
              <AvatarFallback className="bg-neutral-900">DF</AvatarFallback>
            </Avatar>
            
            {/* Futuristic data points */}
            <AnimatePresence>
              {activeSection === 'profile' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-8 -left-8 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-purple-500/20 text-xs text-purple-300"
                  >
                    <span className="text-purple-400">ID:</span> DF-0001
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 }}
                    className="absolute -bottom-8 -right-8 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-purple-500/20 text-xs text-purple-300"
                  >
                    <span className="text-purple-400">STATUS:</span> ONLINE
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </Tilt>

        {/* Name and Bio */}
        <div className="text-center space-y-4 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text pb-1 tracking-tight relative"
            onMouseEnter={() => setActiveSection('name')}
            onMouseLeave={() => setActiveSection(null)}
          >
            Dean Fleming
            
            {/* Futuristic name decoration */}
            <motion.div 
              className="absolute -inset-2 -z-10 opacity-0 pointer-events-none"
              animate={{
                opacity: activeSection === 'name' ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute left-0 top-1/2 h-[1px] w-[20px] bg-purple-500/50" />
              <div className="absolute right-0 top-1/2 h-[1px] w-[20px] bg-purple-500/50" />
              <div className="absolute left-[30px] top-0 h-[10px] w-[1px] bg-purple-500/50" />
              <div className="absolute right-[30px] bottom-0 h-[10px] w-[1px] bg-purple-500/50" />
            </motion.div>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
            onMouseEnter={() => setActiveSection('bio')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <p className="text-neutral-300 text-lg leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">Director</span> obsessed with technology and smooth client experiences.
              <span className="block mt-2 text-neutral-400">Mortgage broker by day, developer by night.</span>
            </p>
            
            {/* Animated underline */}
            <motion.div 
              className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mt-4 w-1/2 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
            
            {/* Bio decoration */}
            <AnimatePresence>
              {activeSection === 'bio' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute -right-12 top-0 text-purple-400"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Highlights with improved cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
          onMouseEnter={() => setActiveSection('projects')}
          onMouseLeave={() => setActiveSection(null)}
        >
          <ProjectCard
            icon={Globe}
            title="DFMB"
            description="5 Star Mortgage Brokerage as seen in The Herald, Daily Record, Glasgow Live, & Glasgow Evening Times."
            iconColor="purple"
            href="https://dfmb.co.uk"
          />
          <ProjectCard
            icon={Zap}
            title="Mortgage.tools"
            description="Time Saving Tools for Mortgage Brokerages"
            iconColor="blue"
            href="https://mortgage.tools"
          />
          
          {/* Projects decoration */}
          <AnimatePresence>
            {activeSection === 'projects' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute -left-4 -bottom-4 text-xs text-purple-400/70 font-mono"
              >
                &lt;projects&gt;
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social Links with improved hover effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
          onMouseEnter={() => setActiveSection('social')}
          onMouseLeave={() => setActiveSection(null)}
        >
          <SocialButton icon={Github} color="blue" href="https://github.com/itsthegoodlife" text="Github" />
          <SocialButton icon={XIcon} color="purple" href="https://x.com/deanITGL" text="Follow on X" />
          <SocialButton icon={Linkedin} color="sky" href="https://linkedin.com/in/deanflemingmortgages" text="Connect" />
          <SocialButton icon={Mail} color="pink" href="mailto:dean@dfmb.co.uk" text="Email me" />
          
          {/* Social decoration */}
          <AnimatePresence>
            {activeSection === 'social' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute -right-4 text-xs text-purple-400/70 font-mono"
              >
                &lt;connect/&gt;
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </CardContent>
    </MotionCard>
  )
}

// 3D Tilt component with enhanced effects
function Tilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  const brightness = useTransform(mouseYSpring, [-0.5, 0.5], [1.2, 0.8]);
  const shadow = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["0px 10px 20px rgba(139, 92, 246, 0.3)", "0px 5px 15px rgba(139, 92, 246, 0.1)"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        filter: `brightness(${brightness})`,
        boxShadow: shadow,
      }}
      className="relative"
    >
      <div style={{ transform: "translateZ(75px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

function ProjectCard({ icon: Icon, title, description, iconColor, href }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.a 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="border-neutral-800/50 bg-black/50 backdrop-blur-md hover:bg-neutral-800/30 transition duration-300 overflow-hidden">
        <CardContent className="p-6 flex items-start gap-4 relative">
          {/* Animated gradient border on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r from-${iconColor}-500/0 via-${iconColor}-500/30 to-${iconColor}-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} 
               style={{ height: '1px', top: 'auto' }} />
          
          {/* Holographic glow on hover */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
            animate={{
              background: isHovered ? [
                `radial-gradient(circle at 50% 50%, rgba(${iconColor === 'purple' ? '139, 92, 246' : '59, 130, 246'}, 0.2) 0%, transparent 70%)`,
                `radial-gradient(circle at 60% 60%, rgba(${iconColor === 'purple' ? '139, 92, 246' : '59, 130, 246'}, 0.2) 0%, transparent 70%)`,
                `radial-gradient(circle at 40% 40%, rgba(${iconColor === 'purple' ? '139, 92, 246' : '59, 130, 246'}, 0.2) 0%, transparent 70%)`,
                `radial-gradient(circle at 50% 50%, rgba(${iconColor === 'purple' ? '139, 92, 246' : '59, 130, 246'}, 0.2) 0%, transparent 70%)`,
              ] : 'none'
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ 
                  rotate: isHovered ? [0, 15, 0, -15, 0] : 0,
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className={`p-1.5 rounded-md bg-${iconColor}-500/10 text-${iconColor}-400`}
              >
                <Icon className="h-4 w-4" />
              </motion.div>
              <h3 className="font-semibold text-neutral-200 group-hover/card:text-white">{title}</h3>
            </div>
            <p className="text-neutral-400 text-sm mt-1">{description}</p>
          </div>
          <motion.div
            animate={{
              x: isHovered ? [0, 5] : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="h-5 w-5 text-neutral-500 group-hover/card:text-white transition-colors" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.a>
  )
}

function SocialButton({ icon: Icon, color, href, text }: SocialButtonProps) {
  const colorClasses = {
    blue: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/50",
    purple: "hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/50",
    sky: "hover:bg-sky-500/10 hover:text-sky-400 hover:border-sky-500/50",
    green: "hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/50",
    pink: "hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/50"
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        size="icon"
        variant="ghost"
        className={`rounded-full text-neutral-400 transition-all duration-300 border border-transparent ${colorClasses[color]} relative overflow-hidden group/social`}
      >
        {/* Glow effect on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
          animate={{
            background: [
              `radial-gradient(circle at 50% 50%, rgba(${color === 'blue' ? '59, 130, 246' : color === 'purple' ? '139, 92, 246' : color === 'sky' ? '14, 165, 233' : color === 'pink' ? '236, 72, 153' : '34, 197, 94'}, 0.3) 0%, transparent 70%)`,
              `radial-gradient(circle at 60% 60%, rgba(${color === 'blue' ? '59, 130, 246' : color === 'purple' ? '139, 92, 246' : color === 'sky' ? '14, 165, 233' : color === 'pink' ? '236, 72, 153' : '34, 197, 94'}, 0.3) 0%, transparent 70%)`,
              `radial-gradient(circle at 40% 40%, rgba(${color === 'blue' ? '59, 130, 246' : color === 'purple' ? '139, 92, 246' : color === 'sky' ? '14, 165, 233' : color === 'pink' ? '236, 72, 153' : '34, 197, 94'}, 0.3) 0%, transparent 70%)`,
              `radial-gradient(circle at 50% 50%, rgba(${color === 'blue' ? '59, 130, 246' : color === 'purple' ? '139, 92, 246' : color === 'sky' ? '14, 165, 233' : color === 'pink' ? '236, 72, 153' : '34, 197, 94'}, 0.3) 0%, transparent 70%)`,
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <Icon className="h-5 w-5 relative z-10" />
      </MotionButton>
    </a>
  )
} 