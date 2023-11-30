import { Mail, Github, Facebook, Youtube, Linkedin, Twitter, Mastodon } from './icons'

/* The `const components` object is defining a mapping between the names of social media platforms
(e.g., "mail", "github", "facebook") and their corresponding icon components. Each key in the object
represents the name of a social media platform, and the value represents the icon component
associated with that platform. */
const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
}

/**
 * The above type defines the props for a social icon component in a TypeScript React application.
 * @property kind - The `kind` property is a string that represents the type of social icon component.
 * It is a key of the `components` object.
 * @property {string | undefined} href - The `href` property is a string that represents the URL or
 * link that the social icon should navigate to when clicked. It can also be `undefined` if the social
 * icon is not clickable or does not have a link associated with it.
 * @property {number} size - The `size` property is an optional number that represents the size of the
 * social icon. It can be used to adjust the size of the icon according to your needs.
 */
type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

/**
 * The `SocialIcon` function is a React component that renders a social media icon with a link.
 * @param {SocialIconProps}  - - `kind`: The type of social icon to display (e.g., "mail", "twitter",
 * "facebook").
 * @returns The `SocialIcon` component is returning JSX code, which is a combination of HTML and
 * JavaScript. It returns an anchor (`<a>`) element with a link (`href`) and a nested SVG icon.
 */
const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
