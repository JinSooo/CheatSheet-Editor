'use client'

import { MasonryGrid } from '@egjs/react-grid'
import Category from './Category'
import useGlobalStore from '@/lib/store'

const ShortCut = () => {
  const [shortcut, resizeRatio] = useGlobalStore((state) => [state.shortcut, state.resizeRatio])
  //   const [categoryRatio, setCategoryRatio] = useState(25)

  // useEffect(() => {
  //   const displayRatio = 100 - resizeRatio
  //   let ratio = 0

  //   if (displayRatio >= 80) ratio = 25
  //   else if (displayRatio >= 60) ratio = 33
  //   else if (displayRatio >= 40) ratio = 50
  //   else ratio = 100

  //   if (categoryRatio !== ratio) setCategoryRatio(ratio)
  // }, [resizeRatio])

  console.log(resizeRatio / 100)

  return (
    <div className='w-full h-full box-border p-6 select-none'>
      <MasonryGrid
        gap={0}
        defaultDirection={'end'}
        align={'justify'}
        column={0}
        columnSize={0}
        columnSizeRatio={resizeRatio / 100}
      >
        {shortcut.categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </MasonryGrid>
    </div>
  )
}

export default ShortCut
