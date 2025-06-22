'use client'

import { Github, Linkedin, ExternalLink, Building2, Code2, Wrench, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-6 z-50">
        <ThemeToggle />
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Combined Hero + About Section */}
        <section className="mb-24">
          <div className="glass-card rounded-3xl p-8 md:p-16 hover-lift animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="gradient-text">Dean Fleming</span>
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
                    Director & Developer
                  </p>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Building solutions for the mortgage industry
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    As Director of DFMB, I lead a mortgage brokerage firm while developing 
                    the software tools that power our operations and improve client experiences.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I combine deep industry knowledge with technical expertise to build 
                    practical solutions for real business challenges.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Active Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">UK</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Based</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Gradient Ring */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                  {/* Photo Container */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                      <Image
                        src="/dean-headshot.jpg"
                        alt="Dean Fleming"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover object-center"
                        priority
                      />
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Director
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-8 hover-lift group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">DFMB</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Mortgage brokerage firm providing financing solutions for residential, 
                commercial, and investment properties across the UK.
              </p>
              <Link 
                href="https://dfmb.co.uk" 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium group-hover:gap-3"
              >
                Visit Site <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-card rounded-xl p-8 hover-lift group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">ComfyCRM</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Custom CRM solution built specifically for mortgage professionals, 
                streamlining client management and application workflows.
              </p>
              <Link 
                href="https://comfycrm.com" 
                className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium group-hover:gap-3"
              >
                Learn More <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-card rounded-xl p-8 hover-lift group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Mortgage.tools</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Collection of calculators and tools designed to help mortgage 
                professionals with common calculations and client scenarios.
              </p>
              <Link 
                href="https://mortgage.tools" 
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium group-hover:gap-3"
              >
                Explore Tools <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-card rounded-xl p-8 hover-lift group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-600 dark:bg-gray-500 flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Open Source</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Various development projects and contributions to open source software, 
                primarily focused on business automation and productivity tools.
              </p>
              <Link 
                href="https://github.com/deanfleming93" 
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-medium group-hover:gap-3"
              >
                View GitHub <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 hover-lift text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Business Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strategic planning, team management, and operational oversight in financial services.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 hover-lift text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto mb-6 flex items-center justify-center">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Software Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack development with focus on business automation and workflow optimization.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 hover-lift text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mx-auto mb-6 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Industry Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep understanding of mortgage markets, regulatory requirements, and client needs.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="mb-16">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center hover-lift">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Get in Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Interested in collaborating or learning more about my work? Let's connect.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="https://linkedin.com/in/deanfleming" 
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-white rounded-xl font-medium"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/deanfleming93" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-xl font-medium transition-all hover-lift"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Dean Fleming. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
