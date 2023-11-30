'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

/**
 * The `ThemeProviders` function is a TypeScript React component that wraps its children with a theme
 * provider, using the `siteMetadata.theme` as the default theme and enabling system theme detection.
 * @param  - - `children`: This is a special prop in React that represents the child elements of a
 * component. It is used to pass components or elements as children to another component.
 * @returns The `ThemeProviders` function is returning a `ThemeProvider` component with the following
 * props:
 */
export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
