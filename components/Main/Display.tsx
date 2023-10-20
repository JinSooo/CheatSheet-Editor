import { HTMLAttributes, forwardRef } from 'react'

const Display = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Display(props, ref) {
  return (
    <div ref={ref} {...props}>
      Editor
    </div>
  )
})

export default Display
