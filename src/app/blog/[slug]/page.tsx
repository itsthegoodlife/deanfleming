import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { BlogPost } from '@/components/blog-post'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Dean Fleming',
    }
  }

  return {
    title: `${post.title} - Dean Fleming`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300">
      <nav className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-slate-800 transition-all hover-lift"
        >
          <ArrowLeft className="h-4 w-4" />
          Blog
        </Link>
        <ThemeToggle />
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <BlogPost post={post} />
      </div>
    </main>
  )
}
