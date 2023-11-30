/**
 * The TableWrapper component is a wrapper for a table element in a React application.
 * @param  - The `TableWrapper` component is a functional component that takes in a single prop called
 * `children`. The `children` prop is used to render any child components or elements that are passed
 * into the `TableWrapper` component.
 * @returns The `TableWrapper` component is returning a `div` element with the class name "w-full
 * overflow-x-auto" that contains a `table` element. The `children` prop is passed as the content of
 * the `table` element.
 */
const TableWrapper = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  )
}

export default TableWrapper
