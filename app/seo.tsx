import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

/* The `interface PageSEOProps` defines the structure of an object that can be passed as an argument to
the `genPageMetadata` function. It specifies that the object must have a `title` property of type
`string`, and it can optionally have a `description` property of type `string` and an `image`
property of type `string`. */
interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

/**
 * The genPageMetadata function generates metadata for a webpage, including title, description, image,
 * and other properties.
 * @param {PageSEOProps}  - - `title`: The title of the page.
 * @returns The function `genPageMetadata` returns an object of type `Metadata`.
 */
export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  }
}
