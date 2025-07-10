import { Metadata } from 'next'
import { BlogCard } from '@/components/blog-card'
import { getAllPosts } from '@/lib/blog'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Dean Fleming',
  description: 'Thoughts on business, technology, and the mortgage industry.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300">
      <nav className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-slate-800 transition-all hover-lift"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
        <ThemeToggle />
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <header className="mb-16 pt-16">
          <div className="glass-card rounded-3xl p-8 md:p-16 hover-lift animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Thoughts on business, technology, and building solutions for the mortgage industry.
            </p>
          </div>
        </header>

        <section>
          {posts.length > 0 ? (
            <div className="grid gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-xl p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
