import { HTMLAttributes, forwardRef, useEffect, useRef } from 'react'
import ShortCut from './ShortCut'
import useGlobalStore from '@/lib/store'

// 默认 ShortCut 窗口显示的大小比例
const ratio = 9 / 16

const Display = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Display(props, ref) {
  const resizeRatio = useGlobalStore((state) => state.resizeRatio)
  const shortCutRef = useRef<HTMLDivElement>(null)

  const adjustShortCutSize = () => {
    if (!shortCutRef.current || !ref) return
    shortCutRef.current.style.height = `${shortCutRef.current.clientWidth * ratio}px`
  }

  useEffect(() => {
    adjustShortCutSize()
  }, [resizeRatio])

  return (
    <div
      ref={ref}
      className='w-1/2 shadow-md rounded-lg bg-[var(--background)] p-2 flex justify-center items-center'
      {...props}
    >
      <div
        ref={shortCutRef}
        className='flex-1 bg-[var(--background-fore)] text-[var(--foreground)] overflow-auto no-scrollbar shadow-lg rounded-[16px]'
      >
        <ShortCut />
      </div>
    </div>
  )
})

export default Display
