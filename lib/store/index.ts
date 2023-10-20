import { create } from 'zustand'
import { OSType, ShortCut } from '../types'
import defaultShortCut from '@/public/json/default.json'

type State = {
  os: OSType
  theme: string
  editorTheme: string
  shortcut: ShortCut
}

type Action = {
  setOS: (os: State['os']) => void
  setTheme: (theme: State['theme']) => void
  setEditorTheme: (editorTheme: State['editorTheme']) => void
  setShortCut: (shortcut: State['shortcut']) => void
}

const useGlobalStore = create<State & Action>((set) => ({
  os: OSType.Windows,
  theme: 'light',
  editorTheme: 'light',
  shortcut: defaultShortCut,

  setOS: (os) => set(() => ({ os })),
  setTheme: (theme) => set(() => ({ theme })),
  setEditorTheme: (editorTheme) => set(() => ({ editorTheme })),
  setShortCut: (shortcut) => set(() => ({ shortcut })),
}))

export default useGlobalStore
