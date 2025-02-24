'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Github, Twitter as X, Linkedin, Mail, ExternalLink, Code2, Rocket, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const MotionCard = motion(Card)
const MotionButton = motion(Button)

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
  color: 'blue' | 'purple' | 'sky' | 'green';
  href: string;
  text: string;
}

export function LandingCard() {
  return (
    <MotionCard 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl bg-black/40 backdrop-blur-3xl border-neutral-800/50 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/10" />
      <CardContent className="p-8 md:p-12 flex flex-col items-center gap-8 relative z-10">
        {/* Profile Section */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin-slow" />
          <Avatar className="h-32 w-32 border-2 border-neutral-800/50 relative ring-2 ring-purple-500/20 ring-offset-2 ring-offset-black/50">
            <AvatarImage src="https://avatars.githubusercontent.com/u/6792974?s=400&u=2479104bd5acc3d9fefc113ec0528d4675eba277&v=4" alt="Dean Fleming" />
            <AvatarFallback className="bg-neutral-900">DF</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Name and Bio */}
        <div className="text-center space-y-4 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text pb-1 tracking-tight"
          >
            Dean Fleming
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-300 text-lg leading-relaxed"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Director</span> obsessed with technology and smooth client experiences.
            <span className="block mt-2 text-neutral-400">Mortgage broker by day, developer by night.</span>
          </motion.p>
        </div>

        {/* Project Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
        >
          <ProjectCard
            icon={Code2}
            title="DFMB"
            description="5 Star Mortgage Brokerage as seen in The Herald, Daily Record, Glasgow Live, & Glasgow Evening Times."
            iconColor="purple"
            href="https://dfmb.co.uk"
          />
          <ProjectCard
            icon={Rocket}
            title="Mortgage.tools"
            description="Time Saving Tools for Mortgage Brokerages"
            iconColor="blue"
            href="https://mortgage.tools"
          />
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <SocialButton icon={Github} color="blue" href="https://github.com/itsthegoodlife" text="Github" />
          <SocialButton icon={X} color="blue" href="https://x.com/deanITGL" text="Follow on X" />
          <SocialButton icon={Linkedin} color="sky" href="https://linkedin.com/in/deanflemingmortgages" text="Connect" />
        </motion.div>
      </CardContent>
    </MotionCard>
  )
}

function ProjectCard({ icon: Icon, title, description, iconColor, href }: ProjectCardProps) {
  return (
    <motion.a 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card block"
    >
      <Card className="border-neutral-800/50 bg-neutral-900/50 hover:bg-neutral-800/50 transition duration-300">
        <CardContent className="p-6 flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Icon className={`h-4 w-4 text-${iconColor}-400`} />
              <h3 className="font-semibold text-neutral-200 group-hover/card:text-white">{title}</h3>
            </div>
            <p className="text-neutral-400 text-sm mt-1">{description}</p>
          </div>
          <ExternalLink className="h-5 w-5 text-neutral-500 group-hover/card:text-white transition-colors" />
        </CardContent>
      </Card>
    </motion.a>
  )
}

function SocialButton({ icon: Icon, color, href, text }: SocialButtonProps) {
  const colorClasses = {
    blue: "hover:bg-blue-500/10 hover:text-blue-400",
    purple: "hover:bg-purple-500/10 hover:text-purple-400",
    sky: "hover:bg-sky-500/10 hover:text-sky-400",
    green: "hover:bg-green-500/10 hover:text-green-400"
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          size="icon"
          variant="ghost"
          className={`rounded-full text-neutral-400 transition-all duration-300 ${colorClasses[color]}`}
        >
          <Icon className="h-5 w-5" />
        </MotionButton>
      </HoverCardTrigger>
      <HoverCardContent className="bg-neutral-900/80 backdrop-blur-xl border-neutral-800/50">
        {text}
      </HoverCardContent>
    </HoverCard>
  )
} 