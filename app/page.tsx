'use client'

import Main from '@/components/Main'
import useGlobalStore from '@/lib/store'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
  const theme = useTheme()
  const setEditorTheme = useGlobalStore((state) => state.setEditorTheme)
  const [mounted, setMounted] = useState(false)

  // 如果系统默认为黑色，则将编辑器也设置为黑色
  useEffect(() => {
    console.log(theme)
    if (theme.theme === 'light' || (theme.theme === 'system' && theme.resolvedTheme === 'light'))
      setEditorTheme('light')
    else setEditorTheme('vs-dark')
  }, [theme])

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Main />
}
