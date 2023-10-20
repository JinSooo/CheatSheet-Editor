'use client'

import { ShortCutCategory } from '@/lib/types'
import ShortCutItem from './ShortCutItem'
import useGlobalStore from '@/lib/store'

interface Props {
  category: ShortCutCategory
}

const Category = ({ category }: Props) => {
  const os = useGlobalStore((state) => state.os)

  return (
    // 四等分
    <div className='box-border px-6 pb-6'>
      <div className='font-bold ml-[40%] pl-3 pb-3'>{category.name}</div>
      {category.shortcuts.map((shortcut) => (
        // 系统存在对应快捷键才显示
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
