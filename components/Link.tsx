/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

/* The code defines a custom link component called `CustomLink`. It takes in a `href` prop and any
other props that can be passed to an anchor element (`<a>`). */
const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

 /* The `if (isInternalLink)` condition checks if the `href` prop starts with a forward slash ("/"),
 indicating that it is an internal link within the application. If it is an internal link, the
 component returns a `Link` component from the `next/link` library, passing the `href` and any other
 props (`...rest`) to it. This allows for client-side navigation within the application without a
 full page refresh. */
  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

/* The `if (isAnchorLink)` condition checks if the `href` prop starts with a hash symbol ("#"),
indicating that it is an anchor link within the same page. If it is an anchor link, the component
returns an anchor element (`<a>`) with the specified `href` and any other props (`...rest`). This
allows for smooth scrolling to different sections of the same page. */
  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
