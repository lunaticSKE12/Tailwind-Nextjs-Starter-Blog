import { ReactNode } from 'react'

/* The `interface Props` defines the type of the props object that the `PageTitle` component expects to
receive. In this case, it specifies that the `children` prop should be of type `ReactNode`.
`ReactNode` is a type provided by React that represents any valid React node, such as JSX elements,
strings, or numbers. By specifying the type of the `children` prop as `ReactNode`, it ensures that
only valid React nodes can be passed as children to the `PageTitle` component. */
interface Props {
  children: ReactNode
}

/**
 * The above function is a TypeScript React component that renders a page title with customizable
 * children.
 * @param {Props}  - The `PageTitle` function is a React component that takes in a single prop called
 * `children`. The `children` prop represents the content that will be rendered inside the `<h1>`
 * element.
 * @returns an h1 element with the provided children as its content. The h1 element has the following
 * classes applied to it: "text-3xl", "font-extrabold", "leading-9", "tracking-tight", "text-gray-900",
 * "dark:text-gray-100", "sm:text-4xl", "sm:leading-10", "md
 */
export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
