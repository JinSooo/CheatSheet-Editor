import { AlignHorizontalJustifyCenter } from 'lucide-react'
import DropDownButton from '../common/DropDownButton'

const ToolBar = () => {
  return (
    <div className='flex justify-between px-3 py-1 shadow-md border-y-[1px]'>
      <div className='flex gap-3'>
        <DropDownButton icon={<AlignHorizontalJustifyCenter size={18} />} items={['Light', 'Dark']} />
        <DropDownButton icon={<AlignHorizontalJustifyCenter size={18} />} items={['Light', 'Dark']} />
        <DropDownButton icon={<AlignHorizontalJustifyCenter size={18} />} items={['Light', 'Dark']} />
        <DropDownButton icon={<AlignHorizontalJustifyCenter size={18} />} items={['Light', 'Dark']} />
        <DropDownButton icon={<AlignHorizontalJustifyCenter size={18} />} items={['Light', 'Dark']} />
      </div>
      <div className='flex gap-3'>
        <DropDownButton icon={<AlignHorizontalJustifyCenter size={18} />} items={['Light', 'Dark']} position='right' />
      </div>
    </div>
  )
}

export default ToolBar
