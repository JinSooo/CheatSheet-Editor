'use client'

import { ShortCutCategory } from '@/lib/types'
import ShortCutItem from './ShortCutItem'
import useGlobalStore from '@/lib/store'
import { Fragment, useEffect, useState } from 'react'

interface Props {
  category: ShortCutCategory
}

const Category = ({ category }: Props) => {
  const [os, resizeRatio] = useGlobalStore((state) => [state.os, state.resizeRatio])
  // 根据显示区域的比例计算分类比例
  const [categoryRatio, setCategoryRatio] = useState(50)

  const calculateCategoryRatio = () => {
    if (typeof window === 'undefined') return 50

    const displayRatio = 100 - resizeRatio
    const width = (document.body.clientWidth * displayRatio) / 100

    if (width >= 1280) return 25
    else if (width >= 1024) return 33
    else if (width >= 640) return 50
    else return 100
  }

  useEffect(() => {
    setCategoryRatio(calculateCategoryRatio())
  }, [resizeRatio])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setCategoryRatio(calculateCategoryRatio())
    })
  }, [])

  return (
    <div className='box-border px-6 pb-6' style={{ width: `${categoryRatio}%` }}>
      <div className='font-bold ml-[40%] pl-3 pb-3'>{category.name}</div>
      {category.shortcuts.map((shortcut) => (
        <Fragment key={category.name + shortcut.description}>
          {shortcut.command[os] && (
            <ShortCutItem command={shortcut.command[os] as string} description={shortcut.description} />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Category
