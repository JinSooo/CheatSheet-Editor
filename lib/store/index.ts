import { create } from 'zustand'
import { OSType } from '../types'

type State = {
  os: OSType
  editorTheme: string // 编辑器主题
  shortcut: string
  resizeRatio: number // 左右区域比例
  displayArea: number // -1: 仅编辑区, 0: 全部显示, 1: 仅预览区
}

type Action = {
  setOS: (os: State['os']) => void
  setEditorTheme: (editorTheme: State['editorTheme']) => void
  setShortCut: (shortcut: State['shortcut']) => void
  setShortCutDefault: () => void
  setShortCutCase: () => void
  setResizeRatio: (resizeRatio: State['resizeRatio']) => void
  setDisplayArea: (displayArea: State['displayArea']) => void
}

const defaultShortCut = `{
  "$schema": "schema",
  "name": "Test",
  "categories": [
    {
      "name": "Test",
      "shortcuts": [
        {
          "command": { "win": "Ctrl+C", "mac": "Command+C", "linux": "Ctrl+C" },
          "description": "复制"
        }
      ]
    }
  ]
}
`

const defaultShortCutCase = `{
  "$schema": "schema",
  "name": "Postman",
  "categories": [
    {
      "name": "通用",
      "shortcuts": [
        {
          "command": { "win": "Ctrl+S", "mac": "Command+S", "linux": "Ctrl+S" },
          "description": "保存"
        },
        {
          "command": {
            "win": "Ctrl+Shift+S",
            "mac": "Command+Shift+S",
            "linux": "Ctrl+Shift+S"
          },
          "description": "另存为"
        },
        {
          "command": {
            "win": "Ctrl+Enter",
            "mac": "Command+Enter",
            "linux": "Ctrl+Enter"
          },
          "description": "发送请求"
        },
        {
          "command": {
            "win": "Ctrl+\\\\",
            "mac": "Command+\\\\",
            "linux": "Ctrl+\\\\"
          },
          "description": "切换侧边栏"
        },
        {
          "command": { "win": "Ctrl+L", "mac": "Command+L", "linux": "Ctrl+L" },
          "description": "跳转到URL栏"
        },
        {
          "command": {
            "win": "Ctrl+Alt+C",
            "mac": "Command+Option+C",
            "linux": "Ctrl+Alt+C"
          },
          "description": "打开控制台"
        }
      ]
    },
    {
      "name": "导航",
      "shortcuts": [
        {
          "command": {
            "win": "Ctrl+Alt+1",
            "mac": "Command+Option+1",
            "linux": "Ctrl+Alt+1"
          },
          "description": "侧边栏"
        },
        {
          "command": {
            "win": "Ctrl+Alt+2",
            "mac": "Command+Option+2",
            "linux": "Ctrl+Alt+2"
          },
          "description": "生成器"
        },
        {
          "command": {
            "win": "Ctrl+NumPad",
            "mac": "Command+NumPad",
            "linux": "Ctrl+NumPad"
          },
          "description": "切换第 n 个选项卡"
        },
        {
          "command": {
            "win": "Ctrl+Shift+/",
            "mac": "Command+Shift+/",
            "linux": "Ctrl+Shift+/"
          },
          "description": "在选项卡之间切换"
        }
      ]
    },
    {
      "name": "侧边栏",
      "shortcuts": [
        {
          "command": { "win": "Down", "mac": "Down", "linux": "Down" },
          "description": "移至下一项"
        },
        {
          "command": { "win": "Up", "mac": "Up", "linux": "Up" },
          "description": "移至上一项"
        },
        {
          "command": { "win": "Left", "mac": "Left", "linux": "Left" },
          "description": "收起收藏夹/文件夹"
        },
        {
          "command": { "win": "Right", "mac": "Right", "linux": "Right" },
          "description": "展开收藏夹/文件夹"
        },
        {
          "command": {
            "win": "Shift+Down",
            "mac": "Shift+Down",
            "linux": "Shift+Down"
          },
          "description": "选择当前和下一个项目"
        },
        {
          "command": {
            "win": "Shift+Up",
            "mac": "Shift+Up",
            "linux": "Shift+Up"
          },
          "description": "选择当前和上一个项目"
        },
        {
          "command": { "win": "Ctrl+F", "mac": "Command+F", "linux": "Ctrl+F" },
          "description": "搜索边栏"
        },
        {
          "command": { "win": "Enter", "mac": "Enter", "linux": "Enter" },
          "description": "在选项卡中打开请求"
        }
      ]
    },
    {
      "name": "编辑",
      "shortcuts": [
        {
          "command": { "win": "Ctrl+C", "mac": "Command+C", "linux": "Ctrl+C" },
          "description": "复制"
        },
        {
          "command": { "win": "Ctrl+V", "mac": "Command+V", "linux": "Ctrl+V" },
          "description": "粘贴"
        },
        {
          "command": { "win": "Ctrl+E", "mac": "Command+E", "linux": "Ctrl+E" },
          "description": "编辑/重命名"
        }
      ]
    }
  ]
}
`

const useGlobalStore = create<State & Action>((set) => ({
  os: OSType.Windows,
  editorTheme: 'light',
  shortcut: localStorage.getItem('shortcut') ?? defaultShortCut,
  resizeRatio: 50,
  displayArea: 0,

  setOS: (os) => set(() => ({ os })),
  setEditorTheme: (editorTheme) => set(() => ({ editorTheme })),
  setShortCut: (shortcut) => set(() => {
    localStorage.setItem('shortcut', shortcut)
    return { shortcut }
  }),
  setShortCutDefault: () => set(() => {
    localStorage.setItem('shortcut', defaultShortCut)
    return { shortcut: defaultShortCut }
  }),
  setShortCutCase: () => set(() => {
    localStorage.setItem('shortcut', defaultShortCutCase)
    return { shortcut: defaultShortCutCase }
  }),
  setResizeRatio: (resizeRatio) => set(() => ({ resizeRatio })),
  setDisplayArea: (displayArea) => set(() => ({ displayArea })),
}))

export default useGlobalStore
