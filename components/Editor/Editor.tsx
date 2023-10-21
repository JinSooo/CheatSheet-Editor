import { HTMLAttributes, forwardRef } from 'react'
import { Monaco, Editor as MonacoEditor } from '@monaco-editor/react'
import schema from '@/public/json/schema.json'
import useGlobalStore from '@/lib/store'

// 编辑器是否存在错误
let hasError = false

const Editor = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Editor(
  { className, ...props },
  ref,
) {
  const editorTheme = useGlobalStore((state) => state.editorTheme)
  const [shortcut, setShortCut] = useGlobalStore((state) => [state.shortcut, state.setShortCut])

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleMount = (editor: any, monaco: Monaco) => {
    const modelUri = 'schema'
    const model = monaco.editor.createModel(shortcut, 'json', monaco.Uri.parse(modelUri))
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

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleChange = (value: string | undefined, ev: any) => {
    if (hasError) return

    setShortCut(value ?? '')
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleValidate = (markers: any) => {
    if (markers.length === 0) hasError = false
    else hasError = true
  }

  return (
    <div ref={ref} className={`w-1/2 shadow-md rounded-lg ${className}`} {...props}>
      <MonacoEditor
        theme={editorTheme}
        options={{ tabSize: 2, automaticLayout: true, minimap: { autohide: true } }}
        onMount={handleMount}
        onChange={handleChange}
        onValidate={handleValidate}
      />
    </div>
  )
})

export default Editor
