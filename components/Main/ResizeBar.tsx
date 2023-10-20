const ResizeBar = () => {
  return (
    <div className='cursor-col-resize w-[8px] h-full flex justify-center items-center'>
      <ul className='w-full py-3 rounded-md bg-[#7F8081] flex flex-col gap-[6px] items-center'>
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
        <li className='w-[4px] h-[4px] rounded-full bg-[#FFFFFF]' />
      </ul>
    </div>
  )
}

export default ResizeBar
