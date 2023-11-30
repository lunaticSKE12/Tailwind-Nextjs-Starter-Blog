import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
/**
 * The function `generateMetadata` generates metadata for a specific tag in a TypeScript React
 * application.
 * @param  - The `generateMetadata` function takes an object as a parameter, which has a `params`
 * property. The `params` property is an object that has a `tag` property of type string.
 * @returns a Promise that resolves to an object of type Metadata.
 */

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

/**
 * The function generates static parameters based on tag data.
 * @returns The function `generateStaticParams` returns an array of objects, where each object has a
 * `tag` property. The `tag` property is the encoded URI of each tag in the `tagData` object.
 */
export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

/**
 * The TagPage component takes a tag parameter, decodes it, capitalizes the first letter and converts
 * spaces to dashes, filters the posts based on the tag, and renders a ListLayout component with the
 * filtered posts and the formatted tag as the title.
 * @param  - The `TagPage` function takes in a single parameter `params`, which is an object with a
 * property `tag` of type string. The `tag` parameter represents the tag that is being used to filter
 * the posts.
 */
export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  return <ListLayout posts={filteredPosts} title={title} />
}
