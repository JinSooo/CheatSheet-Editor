import { forwardRef } from 'react'

const ResizeBar = forwardRef<HTMLUListElement>(function ResizeBar(props, ref) {
  return (
    <div className='w-[8px] h-full flex justify-center items-center'>
      <ul
        ref={ref}
        className='cursor-col-resize w-full py-4 rounded-md bg-[#C0C0C0] hover:bg-[#7F8081] flex flex-col gap-[6px] items-center'
      >
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
      </ul>
    </div>
  )
})

export default ResizeBar
