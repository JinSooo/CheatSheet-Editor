import { HTMLAttributes, forwardRef } from 'react'

const ResizeBar = forwardRef<HTMLUListElement, HTMLAttributes<HTMLDivElement>>(function ResizeBar(
  { className, ...props },
  ref,
) {
  return (
    <div className={`w-[8px] h-full flex justify-center items-center ${className}`} {...props}>
      <ul
        ref={ref}
        className='cursor-col-resize w-full py-4 rounded-md bg-[var(--resize-bar-fore)] hover:bg-[var(--resize-bar-bg)] flex flex-col gap-[6px] items-center'
      >
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
      </ul>
    </div>
  )
})

export default ResizeBar
