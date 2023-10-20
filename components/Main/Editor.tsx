import { HTMLAttributes, forwardRef } from 'react'

const Editor = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Editor(props, ref) {
  return (
    <div ref={ref} {...props}>
      Editor
    </div>
  )
})

export default Editor
