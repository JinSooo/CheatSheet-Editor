export * from './shortcut'
export * from './toast'

// 防抖函数
export const debounce = (fn: (...args: unknown[]) => void, delay = 100) => {
  let timer: NodeJS.Timeout | null = null

  return (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 节流函数
export const throttle = (fn: (...args: unknown[]) => void, delay = 100) => {
  let timer: NodeJS.Timeout | null = null

  return (...args: unknown[]) => {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 下载文件
export const download = (file: File) => {
  const tmpLink = document.createElement('a')
  const objectUrl = URL.createObjectURL(file)

  tmpLink.href = objectUrl
  tmpLink.download = file.name
  document.body.appendChild(tmpLink)
  tmpLink.click()

  document.body.removeChild(tmpLink)
  URL.revokeObjectURL(objectUrl)
}
