import { Inter } from 'next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

/* The `interface Props` is defining the type of the props object that the `LayoutWrapper` component
expects to receive. In this case, it specifies that the `children` prop should be of type
`ReactNode`. The `ReactNode` type is a built-in type in React that represents any valid JSX element,
including components, HTML elements, and strings. By specifying the `children` prop as `ReactNode`,
the `LayoutWrapper` component can accept any valid JSX element as its children. */
interface Props {
  children: ReactNode
}

/* The code `const inter = Inter({ subsets: ['latin'] })` is creating a new instance of the `Inter`
font from the `next/font/google` package. It is specifying that the font should include the 'latin'
subset. The `inter` variable can then be used to apply the font to elements in the JSX code. */
const inter = Inter({
  subsets: ['latin'],
})

/**
 * The `LayoutWrapper` function is a React component that wraps its children with a header, main
 * content, and footer, and applies some styling.
 * @param {Props}  - - `children`: This is a special prop in React that allows you to pass components
 * or elements as children to another component. In this case, it is used to render the content between
 * the `<LayoutWrapper>` opening and closing tags.
 * @returns The LayoutWrapper component is returning a JSX element.
 */
const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
