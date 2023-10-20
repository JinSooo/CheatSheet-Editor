import { create } from 'zustand'
import { OSType } from '../types'

type State = {
  os: OSType
  theme: string
  editorTheme: string
}

type Action = {
  setOS: (os: State['os']) => void
  setTheme: (theme: State['theme']) => void
  setEditorTheme: (editorTheme: State['editorTheme']) => void
}

const useGlobalStore = create<State & Action>((set) => ({
  os: OSType.Windows,
  theme: 'light',
  editorTheme: 'light',

  setOS: (os) => set(() => ({ os })),
  setTheme: (theme) => set(() => ({ theme })),
  setEditorTheme: (editorTheme) => set(() => ({ editorTheme })),
}))

export default useGlobalStore
