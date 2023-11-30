import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

/**
 * This function sorts and filters blog posts and returns them as props to the Main component.
 * @returns the component `<Main>` with the prop `posts` set to the value of the `posts` variable.
 */
export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
