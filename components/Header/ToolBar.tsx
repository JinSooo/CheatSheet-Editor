'use client'

import { Contrast, HelpCircle, ListRestart, PanelLeftOpen, PanelRightOpen, RotateCcw, Share, Sun } from 'lucide-react'
import DropDownButton from '../common/DropDownButton'
import { MouseEvent } from 'react'
import { useTheme } from 'next-themes'
import useGlobalStore from '@/lib/store'
import { ShortCut } from '@/lib/types'
import { download, toastIconError, toastStyle } from '@/lib/utils'
import toast from 'react-hot-toast'

const ToolBar = () => {
  const { setTheme } = useTheme()
  const [shortcut, setEditorTheme, setDisplayArea, displayArea, setShortCutDefault, setShortCutCase] = useGlobalStore(
    (state) => [
      state.shortcut,
      state.setEditorTheme,
      state.setDisplayArea,
      state.displayArea,
      state.setShortCutDefault,
      state.setShortCutCase,
    ],
  )

  /* --------------------------------- Editor --------------------------------- */
  const handleEditorTheme = (e: MouseEvent<HTMLUListElement>) => {
    // @ts-ignore
    if (e.target.tagName === 'A') {
      // @ts-ignore
      setEditorTheme(e.target.dataset.key)
    }
  }

  const handleEditorReset = () => {
    setShortCutDefault()
  }

  const handleEditorCase = () => {
    setShortCutCase()
  }

  /* --------------------------------- Display -------------------------------- */
  const handleExport = () => {
    try {
      const shortcutObj = JSON.parse(shortcut) as ShortCut
      const file = new File([shortcut], `${shortcutObj.name}.json`, {
        type: 'text/plain',
      })
      download(file)
    } catch (error) {
      toast('转换失败,请检查你的文件是否存在错误!', { icon: toastIconError, style: toastStyle })
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

  const handleGlobalTheme = (e: MouseEvent<HTMLUListElement>) => {
    // @ts-ignore
    if (e.target.tagName === 'A') {
      // @ts-ignore
      setTheme(e.target.dataset.key)
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
          onItemClick={handleEditorTheme}
        />
        <DropDownButton icon={<RotateCcw size={18} />} tooltip='重置' onClick={handleEditorReset} />
        <DropDownButton icon={<ListRestart size={18} />} tooltip='案例' onClick={handleEditorCase} />
      </div>
      <div className='flex gap-3'>
        <DropDownButton icon={<HelpCircle size={18} />} tooltip='帮助' position='right' />
        <DropDownButton icon={<Share size={18} />} tooltip='导出' position='right' onClick={handleExport} />
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
