import { create } from 'zustand'
import { OSType, ShortCut } from '../types'
import defaultShortCut from '@/public/json/default.json'

type State = {
  os: OSType
  editorTheme: string // 编辑器主题
  shortCutTheme: string // 快捷键主题
  shortcut: ShortCut
  resizeRatio: number // 左右区域比例
}

type Action = {
  setOS: (os: State['os']) => void
  setTheme: (shortCutTheme: State['shortCutTheme']) => void
  setEditorTheme: (editorTheme: State['editorTheme']) => void
  setShortCut: (shortcut: State['shortcut']) => void
  setResizeRatio: (resizeRatio: State['resizeRatio']) => void
}

const useGlobalStore = create<State & Action>((set) => ({
  os: OSType.Windows,
  editorTheme: 'light',
  shortCutTheme: 'light',
  shortcut: defaultShortCut,
  resizeRatio: 50,

  setOS: (os) => set(() => ({ os })),
  setEditorTheme: (editorTheme) => set(() => ({ editorTheme })),
  setTheme: (shortCutTheme) => set(() => ({ shortCutTheme })),
  setShortCut: (shortcut) => set(() => ({ shortcut })),
  setResizeRatio: (resizeRatio) => set(() => ({ resizeRatio })),
}))

export default useGlobalStore
