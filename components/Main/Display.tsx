import { HTMLAttributes, forwardRef } from 'react'
import ShortCut from '../ShortCut/ShortCut'

const Display = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Display(props, ref) {
  return (
    <div ref={ref} {...props}>
      <ShortCut />
    </div>
  )
})

export default Display
