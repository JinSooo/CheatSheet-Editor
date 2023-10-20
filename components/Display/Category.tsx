'use client'

import { ShortCutCategory } from '@/lib/types'
import ShortCutItem from './ShortCutItem'
import useGlobalStore from '@/lib/store'
import { useMemo } from 'react'

interface Props {
  category: ShortCutCategory
}

const Category = ({ category }: Props) => {
  const [os, resizeRatio] = useGlobalStore((state) => [state.os, state.resizeRatio])
  // 根据显示区域的比例计算分类比例
  const categoryRatio = useMemo(() => {
    if (typeof window === 'undefined') return 33

    const displayRatio = 100 - resizeRatio
    const width = (document.body.clientWidth * displayRatio) / 100

    if (width >= 1280) return 25
    else if (width >= 1024) return 33
    else if (width >= 640) return 50
    else return 100
  }, [resizeRatio])

  return (
    <div className='box-border px-6 pb-6' style={{ width: `${categoryRatio}%` }}>
      <div className='font-bold ml-[40%] pl-3 pb-3'>{category.name}</div>
      {category.shortcuts.map((shortcut) => (
        <>
          {shortcut.command[os] && (
            <ShortCutItem
              key={shortcut.description}
              command={shortcut.command[os] as string}
              description={shortcut.description}
            />
          )}
        </>
      ))}
    </div>
  )
}

export default Category
