import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
  readingTime?: number
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Ensure the posts directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true })
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.md$/, '')
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)
          
          return {
            slug,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || content.substring(0, 150) + '...',
            tags: data.tags || [],
            readingTime: calculateReadingTime(content),
          } as BlogPostMeta
        })
    )
    
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.warn('No blog posts found or error reading posts directory:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(content)
    
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      tags: data.tags || [],
      readingTime: calculateReadingTime(content),
      content: processedContent.toString(),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}
