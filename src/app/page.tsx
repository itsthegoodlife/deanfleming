import { LandingCard } from "@/components/landing-card"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 selection:bg-purple-500/20 selection:text-purple-200 overflow-hidden">
      <AnimatedBackground />
      <LandingCard />
    </main>
  )
}
