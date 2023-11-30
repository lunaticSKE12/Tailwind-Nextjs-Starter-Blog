import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

const POSTS_PER_PAGE = 5

/**
 * The function generates static parameters for pagination in a TypeScript React application.
 * @returns The function `generateStaticParams` returns an array of objects, where each object
 * represents a page and contains a `page` property with the page number as a string.
 */
export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

/**
 * The function is a TypeScript React component that displays a paginated list of posts.
 * @param  - - `params` is an object that contains the parameters passed to the page component. In this
 * case, it expects a `page` parameter which is a string.
 */
export default function Page({ params }: { params: { page: string } }) {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = parseInt(params.page as string)
  /* The code `const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1),
  POSTS_PER_PAGE * pageNumber)` is creating a subset of the `posts` array that will be displayed on
  the current page. */
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  /* The code `const pagination = { currentPage: pageNumber, totalPages: Math.ceil(posts.length /
  POSTS_PER_PAGE) }` is creating an object called `pagination`. */
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
