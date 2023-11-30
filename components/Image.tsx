import NextImage, { ImageProps } from 'next/image'

/**
 * The above code is a TypeScript React component that renders an image using the Next.js Image
 * component.
 * @param {ImageProps}  - The above code is defining a functional component called `Image` that takes
 * in a spread of props (`...rest`) and renders a `NextImage` component with those props.
 */
const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

export default Image
