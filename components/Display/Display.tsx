import { HTMLAttributes, forwardRef, useCallback, useEffect, useRef } from 'react'
import ShortCut from './ShortCut'
import useGlobalStore from '@/lib/store'
import { debounce } from '@/lib/utils'

// 默认 ShortCut 窗口显示的大小比例
const ratio = 9 / 16

const Display = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Display(
  { className, ...props },
  ref,
) {
  const resizeRatio = useGlobalStore((state) => state.resizeRatio)
  const shortCutRef = useRef<HTMLDivElement>(null)

  const adjustShortCutSize = useCallback(
    debounce(() => {
      if (!shortCutRef.current) return
      shortCutRef.current.style.height = `${shortCutRef.current.clientWidth * ratio}px`
    }),
    [shortCutRef],
  )

  const init = () => {
    // 窗口改变后重新调整大小
    window.addEventListener('resize', () => {
      adjustShortCutSize()
    })
  }

  useEffect(() => {
    adjustShortCutSize()
  }, [resizeRatio])

  useEffect(() => {
    init()
  }, [])

  return (
    <div
      ref={ref}
      className={`w-1/2 shadow-md rounded-lg bg-[var(--background)] p-2 flex justify-center items-center ${className}`}
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
