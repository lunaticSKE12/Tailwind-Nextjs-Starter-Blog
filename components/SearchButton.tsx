import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'
/**
 * The SearchButton component checks if the search provider is either Algolia or KBar and renders the
 * appropriate button component.
 * @returns The code is returning a search button component. The specific button component being
 * returned depends on the value of `siteMetadata.search.provider`. If `siteMetadata.search.provider`
 * is 'algolia', it returns an `AlgoliaButton` component. If `siteMetadata.search.provider` is 'kbar',
 * it returns a `KBarButton` component. The returned button component includes an SVG icon for search.
 */

const SearchButton = () => {
 /* The code is checking if the `siteMetadata.search` object exists and if the `provider` property of
 `siteMetadata.search` is either 'algolia' or 'kbar'. If both conditions are true, it assigns the
 value of `AlgoliaButton` or `KBarButton` to the `SearchButtonWrapper` variable based on the value
 of `siteMetadata.search.provider`. */
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchButtonWrapper aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </SearchButtonWrapper>
    )
  }
}

export default SearchButton
