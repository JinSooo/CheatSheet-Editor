import Header from '@/components/Header/Header'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import '@/lib/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-CN' data-theme='light' style={{ colorScheme: 'light' }}>
      <body>
        <ThemeProvider attribute='data-theme' defaultTheme='system' enableSystem>
          <div className='w-full h-full flex flex-col'>
            <Header />
            <main className='flex-1 bg-[var(--background)]'>{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
