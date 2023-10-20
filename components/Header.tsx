import { AlignHorizontalJustifyCenter } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex justify-between px-3 py-1 shadow-md border-b-[1px]'>
      <div className='flex gap-3'>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
      </div>
      <div className='flex gap-3'>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
        <div className='w-[24px] h-[24px] flex justify-center items-center'>
          <AlignHorizontalJustifyCenter size={18} />
        </div>
      </div>
    </header>
  )
}

export default Header
