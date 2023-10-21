import ToolBar from './ToolBar'

const Header = () => {
  return (
    <header>
      {/* <div className='h-14 flex justify-between items-center mx-4'>
        <div className='flex gap-4 items-center'>
          <Image src='/imgs/icon.png' width={28} height={28} alt='icon' />
          <h1 className='font-bold text-2xl'>CheatSheet Editor</h1>
        </div>
        <div>
          <button type='button' className='btn btn-info btn-outline btn-sm'>
            Test
          </button>
        </div>
      </div> */}
      <div className='w-full h-14 flex justify-center items-center'>
        <h1 className='font-bold text-2xl'>CheatSheet Editor</h1>
      </div>
      <ToolBar />
    </header>
  )
}

export default Header
