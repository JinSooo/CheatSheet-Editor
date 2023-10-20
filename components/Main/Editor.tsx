import { HTMLAttributes, forwardRef } from 'react'
import { Monaco, Editor as MonacoEditor } from '@monaco-editor/react'
import schema from '@/public/json/schema.json'

const defaultValue = `{
  "$schema": "schema",
  "name": "CheatSheet",
  "categories": [
    {
      "name": "CheatSheet",
      "shortcuts": [
        {
          "command": { "win": "|", "mac": "|", "linux": "|" },
          "description": "多功能快捷键, 即上下两种快捷键都可以实现操作"
        },
        {
          "command": { "win": "&", "mac": "&", "linux": "&" },
          "description": "组合快捷键, 即先按下上快捷键, 再按下下快捷键来实现操作"
        },
        {
          "command": { "win": "Space", "mac": "Space", "linux": "Space" },
          "description": "空格键"
        },
        {
          "command": { "win": "Backspace", "mac": "Backspace", "linux": "Backspace" },
          "description": "退格键"
        },
        {
          "command": { "win": "Win" },
          "description": "徽标键"
        },
        {
          "command": { "win": "Enter" },
          "description": "回车键"
        },
        {
          "command": { "mac": "Command" },
          "description": "Command/Cmd键"
        },
        {
          "command": { "mac": "Control" },
          "description": "Control/Ctrl键"
        },
        {
          "command": { "mac": "Option" },
          "description": "Option/Alt键"
        },
        {
          "command": { "mac": "Shift" },
          "description": "Shift键"
        },
        {
          "command": { "mac": "Esc" },
          "description": "Esc键"
        },
        {
          "command": { "mac": "Enter" },
          "description": "Enter键"
        }
      ]
    }
  ]
}
`

const Editor = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Editor(props, ref) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onMount = (editor: any, monaco: Monaco) => {
    const modelUri = 'schema'
    const model = monaco.editor.createModel(defaultValue, 'json', monaco.Uri.parse(modelUri))
    editor.setModel(model)

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      ...monaco.languages.json.jsonDefaults.diagnosticsOptions,
      allowComments: true,
      schemas: [
        {
          uri: 'schema',
          schema: schema,
        },
      ],
      validate: true,
    })
  }

  return (
    <div ref={ref} {...props}>
      <MonacoEditor options={{ tabSize: 2, automaticLayout: true, minimap: { autohide: true } }} onMount={onMount} />
    </div>
  )
})

export default Editor
