'use client'

import { useEffect, useRef } from 'react'
import Display from './Display/Display'
import Editor from './Editor/Editor'
import ResizeBar from './common/ResizeBar'
import { throttle } from '@/lib/utils'
import useGlobalStore from '@/lib/store'

const Main = () => {
  const [setResizeRatio, displayArea] = useGlobalStore((state) => [state.setResizeRatio, state.displayArea])
  const boxRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLDivElement>(null)
  const displayRef = useRef<HTMLDivElement>(null)
  const resizeBarRef = useRef<HTMLUListElement>(null)

  const initResizeBar = () => {
    if (!boxRef.current || !resizeBarRef.current || !editorRef.current || !displayRef.current) return

    const box = boxRef.current
    const editor = editorRef.current
    const display = displayRef.current
    const resizeBar = resizeBarRef.current

    resizeBar.onmousedown = (e) => {
      const startX = e.clientX
      const left = resizeBar.offsetLeft
      const maxT = box.clientWidth - resizeBar.offsetWidth // 容器宽度 - 左边区域的宽度 = 右边区域的宽度
      resizeBar.style.backgroundColor = '#7F8081'

      // @ts-ignore
      const handleMouseMove = throttle((e: MouseEvent) => {
        const endX = e.clientX
        let moveLen = left + (endX - startX)

        if (moveLen < 200)
          // 左右区域最小限制
          moveLen = 200
        if (moveLen > maxT - 200) moveLen = maxT - 200

        const ratio = (moveLen / (maxT - 8)) * 100
        editor.style.width = `${ratio}%`
        display.style.width = `${100 - ratio}%`

        setResizeRatio(ratio)
      }, 50)

      // 节流设置
      document.body.onmousemove = handleMouseMove

      document.body.onmouseup = () => {
        document.body.onmousemove = null
        document.body.onmouseup = null
        resizeBar.style.backgroundColor = '#C0C0C0'
      }

      return false
    }
  }

  useEffect(() => {
    initResizeBar()
  }, [])

  return (
    <div ref={boxRef} className='w-full h-full flex p-1'>
      <Editor
        ref={editorRef}
        className={`${displayArea === 1 ? 'hidden' : ''} ${displayArea === -1 ? '!w-full' : ''}`}
      />
      <ResizeBar ref={resizeBarRef} className={`${displayArea === 0 ? '' : 'hidden'}`} />
      <Display
        ref={displayRef}
        className={`${displayArea === -1 ? 'hidden !w-full' : ''}  ${displayArea === 1 ? '!w-full' : ''}`}
      />
    </div>
  )
}

export default Main
