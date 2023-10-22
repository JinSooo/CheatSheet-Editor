import Header from '@/components/Header/Header'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import '@/lib/styles/globals.css'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'CheatSheet Editor',
  description: '用于 CheatSheet 的应用快捷键可视化编辑器',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-CN'>
      <body>
        <ThemeProvider enableSystem>
          <div className='w-full h-full flex flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
