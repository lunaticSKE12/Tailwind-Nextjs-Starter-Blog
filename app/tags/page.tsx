import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import LottieAnimation from '@/components/LottieAnimation'

/* The line `export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog
about' })` is exporting a constant variable named `metadata`. It is using the `genPageMetadata`
function to generate metadata for the page. The metadata includes the title of the page, which is
set to 'Tags', and the description of the page, which is set to 'Things I blog about'. This metadata
can be used for SEO purposes, such as setting the title and description of the page in search engine
results. */
export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

/**
 * The function renders a page that displays a list of tags and their corresponding counts, along with
 * a link to view posts tagged with each tag.
 * @returns The code is returning a JSX element that represents a page layout. It includes a heading, a
 * list of tags with their respective counts, and a Lottie animation.
 */
export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mb-2 mr-5 mt-2">
                <Tag text={t} />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagCounts[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-l-2 border-solid border-dark dark:border-light">
          <LottieAnimation />
        </div>
      </div>
    </>
  )
}
