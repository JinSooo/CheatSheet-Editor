'use client'

import { MasonryGrid } from '@egjs/react-grid'
import Category from './Category'
import useGlobalStore from '@/lib/store'

const ShortCut = () => {
  const shortcut = useGlobalStore((state) => state.shortcut)

  return (
    <div className='w-full h-full box-border p-6 select-none'>
      <MasonryGrid observeChildren={true} useResizeObserver={true}>
        {shortcut.categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </MasonryGrid>
    </div>
  )
}

export default ShortCut
