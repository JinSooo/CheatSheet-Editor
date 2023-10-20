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
