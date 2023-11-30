import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5
/* The line `export const metadata = genPageMetadata({ title: 'Blog' })` is creating a constant
variable named `metadata` and assigning it the value returned by the `genPageMetadata` function. The
`genPageMetadata` function is being called with an object argument `{ title: 'Blog' }`, which sets
the title of the page to 'Blog'. This metadata can be used for SEO purposes, such as setting the
title tag of the page. */

export const metadata = genPageMetadata({ title: 'Blog' })

/**
 * The `BlogPage` function creates a list of blog posts, sorts them, and displays a subset of the posts
 * on each page with pagination.
 */
export default function BlogPage() {
  /* The line `const posts = allCoreContent(sortPosts(allBlogs))` is creating a constant variable named
  `posts` and assigning it the value returned by the `allCoreContent` function. The `allCoreContent`
  function is being called with the result of the `sortPosts` function, which is being called with
  the `allBlogs` variable as its argument. */
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  /* The `initialDisplayPosts` constant is creating a subset of the `posts` array that will be
  initially displayed on the page. It uses the `slice` method to extract a portion of the `posts`
  array based on the current page number and the number of posts per page. */
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  /* The `pagination` constant is an object that contains information about the current page and the
  total number of pages. */
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
