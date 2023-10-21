'use client'

import { Contrast, PanelLeftOpen, PanelRightOpen, Sun } from 'lucide-react'
import DropDownButton from '../common/DropDownButton'
import { MouseEvent } from 'react'
import { useTheme } from 'next-themes'
import useGlobalStore from '@/lib/store'

const ToolBar = () => {
  const { setTheme } = useTheme()
  const [setEditorTheme, setDisplayArea, displayArea] = useGlobalStore((state) => [
    state.setEditorTheme,
    state.setDisplayArea,
    state.displayArea,
  ])

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

  const handleOnlyEditor = () => {
    if (displayArea === -1) return setDisplayArea(0)
    setDisplayArea(-1)
  }

  const handleOnlyDisplay = () => {
    if (displayArea === 1) return setDisplayArea(0)
    setDisplayArea(1)
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
          onItemClick={handleEditorTheme}
        />
      </div>
      <div className='flex gap-3'>
        <DropDownButton
          icon={<PanelLeftOpen size={18} color={displayArea === -1 ? '#3ABFF8' : 'currentColor'} />}
          tooltip={displayArea === -1 ? '恢复默认' : '仅编辑区'}
          position='right'
          onClick={handleOnlyEditor}
        />
        <DropDownButton
          icon={<PanelRightOpen size={18} color={displayArea === 1 ? '#3ABFF8' : 'currentColor'} />}
          tooltip={displayArea === 1 ? '恢复默认' : '仅预览区'}
          position='right'
          onClick={handleOnlyDisplay}
        />
        <DropDownButton
          icon={<Sun size={18} />}
          items={[
            { key: 'system', value: '系统默认' },
            { key: 'light', value: '白天模式' },
            { key: 'dark', value: '夜间模式' },
          ]}
          tooltip='主题'
          position='right'
          onItemClick={handleGlobalTheme}
        />
      </div>
    </div>
  )
}

export default ToolBar
