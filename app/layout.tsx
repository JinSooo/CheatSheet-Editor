import Header from '@/components/Header'
import '@/lib/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-CN'>
      <body>
        <div className='w-full h-full flex flex-col'>
          <Header />
          <main className='flex-1 bg-[var(--background)]'>{children}</main>
        </div>
      </body>
    </html>
  )
}
