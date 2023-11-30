import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

const defaultLayout = 'PostLayout'
/* The `layouts` object is defining different layout components for the `Page` component. Each layout
component is associated with a specific key (`PostSimple`, `PostLayout`, `PostBanner`). These layout
components will be used to render the content of the page based on the layout specified in the
`post` object. */
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

/**
 * The function `generateMetadata` generates metadata for a blog post based on its slug and returns it
 * as a promise.
 * @param  - The `generateMetadata` function takes in an object with a `params` property. The `params`
 * property is an object with a `slug` property, which is an array of strings.
 * @returns The function `generateMetadata` returns a `Promise` that resolves to an object of type
 * `Metadata` or `undefined`.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

/**
 * The function generates static parameters for all blogs by splitting their slugs.
 * @returns The function `generateStaticParams` returns an array of objects, where each object has a
 * property `slug` that is an array of strings.
 */
export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

/**
 * This is a TypeScript React function that renders a page based on the provided slug parameter,
 * displaying the content of a blog post along with its author details and navigation links to previous
 * and next posts.
 * @param  - The `Page` function takes an object as its parameter, which has a `params` property. The
 * `params` property is an object with a `slug` property, which is an array of strings.
 * @returns JSX elements.
 */
export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allBlogs.find((p) => p.slug === slug) as Blog
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>    
        <div className='col-span-12 lg:col-span-8 sm:col-span-4 font-in prose sm:prose-base md:prose-lg max-w-max
          prose-blockquote:bg-accent/20 
          prose-blockquote:p-2
          prose-blockquote:px-6
          prose-blockquote:border-accent
          prose-blockquote:not-italic
          prose-blockquote:rounded-r-lg
          prose-li:marker:text-accent

          dark:prose-invert
          dark:prose-blockquote:border-accentDark
          dark:prose-blockquote:bg-accentDark/20
          dark:prose-li:marker:text-accentDark
        '>
          <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
        </div>

        {/* <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} /> */}

      </Layout>
    </>
  )
}
