import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

/* The line `export const metadata = genPageMetadata({ title: 'Projects' })` is creating a constant
variable named `metadata` and assigning it the value returned by the `genPageMetadata` function. The
`genPageMetadata` function is likely a custom function that generates metadata for the page, such as
the title. In this case, it is generating metadata for the "Projects" page with the title set to
"Projects". This metadata can be used for SEO purposes or for other page-related information. */

export const metadata = genPageMetadata({ title: 'Projects' })

/* The `export default function Projects()` is a React functional component that exports the component
as the default export. */
export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
