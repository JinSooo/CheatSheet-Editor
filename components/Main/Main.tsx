import Display from './Display'
import Editor from './Editor'
import ResizeBar from './ResizeBar'

const Main = () => {
  return (
    <div className='w-full h-full flex p-1'>
      <Editor className='w-1/2 bg-slate-400 shadow-md rounded-lg' />
      <ResizeBar />
      <Display className='w-1/2 bg-slate-500 shadow-md rounded-lg' />
    </div>
  )
}

export default Main
