'use client'

import { Contrast, Sun } from 'lucide-react'
import DropDownButton from '../common/DropDownButton'
import { MouseEvent } from 'react'
import { useTheme } from 'next-themes'
import useGlobalStore from '@/lib/store'

const ToolBar = () => {
  const { setTheme } = useTheme()
  const [setEditorTheme] = useGlobalStore((state) => [state.setEditorTheme])

  const handleGlobalTheme = (e: MouseEvent<HTMLUListElement>) => {
    // @ts-ignore
    if (e.target.tagName === 'A') {
      // @ts-ignore
      setTheme(e.target.dataset.key)
    }
  }

  const handleEditorTheme = (e: MouseEvent<HTMLUListElement>) => {
    // @ts-ignore
    if (e.target.tagName === 'A') {
      // @ts-ignore
      setEditorTheme(e.target.dataset.key)
    }
  }

  return (
    <div className='flex justify-between px-3 py-1 shadow-md border-y-[1px] bg-[var(--background-toolbar)] border-y-[var(--background)]'>
      <div className='flex gap-3'>
        <DropDownButton
          icon={<Contrast size={18} />}
          items={[
            { key: 'light', value: '亮色' },
            { key: 'vs-dark', value: '暗色' },
          ]}
          tooltip='编辑器主题'
          onClick={handleEditorTheme}
        />
      </div>
      <div className='flex gap-3'>
        <DropDownButton
          icon={<Sun size={18} />}
          items={[
            { key: 'system', value: '系统默认' },
            { key: 'light', value: '白天模式' },
            { key: 'dark', value: '夜间模式' },
          ]}
          tooltip='主题'
          position='right'
          onClick={handleGlobalTheme}
        />
      </div>
    </div>
  )
}

export default ToolBar
