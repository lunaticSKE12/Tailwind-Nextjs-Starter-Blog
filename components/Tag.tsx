import Link from 'next/link'
import { slug } from 'github-slugger'
/* The `interface Props` is defining the type of the props that the `Tag` component expects to receive.
In this case, it specifies that the `text` prop should be a string. This allows the component to
enforce type safety and provides better code readability and maintainability. */
interface Props {
  text: string
}
/**
 * The `Tag` component is a React component that renders a link with a text prop, which is used to
 * generate a slug and display the text as a link.
 * @param {Props}  - The above code defines a functional component called `Tag` that takes a single
 * prop called `text`.
 */

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
