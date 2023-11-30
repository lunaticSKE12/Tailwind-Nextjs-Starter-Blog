import { ReactNode } from 'react'

/* The `interface Props` defines the type of the `Props` object that is passed as a parameter to the
`SectionContainer` function. It specifies that the `Props` object should have a property called
`children` of type `ReactNode`. The `ReactNode` type is a type provided by React that represents any
valid React node, such as a JSX element, a string, or an array of JSX elements. */
interface Props {
  children: ReactNode
}

/**
 * The function is a React component that renders a section container with a maximum width and padding.
 * @param {Props}  - The function `SectionContainer` takes in a single parameter called `Props`, which
 * is an object containing the property `children`. The `children` property represents the content that
 * will be rendered inside the section container.
 * @returns a JSX element. It is a section element with the class name "mx-auto max-w-3xl px-4 sm:px-6
 * xl:max-w-5xl xl:px-0". The content of the section is the "children" prop, which is passed as a
 * parameter to the function.
 */
export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</section>
  )
}
