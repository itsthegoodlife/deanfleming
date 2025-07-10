import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { BlogPostMeta } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="glass-card rounded-xl p-8 hover-lift group">
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {post.excerpt}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium group-hover:gap-3"
        >
          Read more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
