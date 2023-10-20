import { HTMLAttributes, forwardRef } from 'react'
import { Monaco, Editor as MonacoEditor } from '@monaco-editor/react'
import schema from '@/public/json/schema.json'
import useGlobalStore from '@/lib/store'

const Editor = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Editor(props, ref) {
  const [shortcut, setShortCut] = useGlobalStore((state) => [state.shortcut, state.setShortCut])

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onMount = (editor: any, monaco: Monaco) => {
    const modelUri = 'schema'
    const model = monaco.editor.createModel(JSON.stringify(shortcut), 'json', monaco.Uri.parse(modelUri))
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
