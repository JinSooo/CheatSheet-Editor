'use client'

import { MasonryGrid } from '@egjs/react-grid'
import Category from './Category'
import useGlobalStore from '@/lib/store'
import { useEffect, useState } from 'react'
import { ShortCut } from '@/lib/types'

const ShortCut = () => {
  const shortcutStr = useGlobalStore((state) => state.shortcut)
  const [shortcut, setShortCut] = useState<ShortCut | null>(null)

  useEffect(() => {
    try {
      const sc = JSON.parse(shortcutStr) as ShortCut
      setShortCut(sc)
    } catch (error) {
      console.error(error)
    }
  }, [shortcutStr])

  return (
    <div className='w-full h-full box-border p-6 select-none'>
      <MasonryGrid observeChildren={true} useResizeObserver={true}>
        {shortcut?.categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </MasonryGrid>
    </div>
  )
}

export default ShortCut
