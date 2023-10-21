import React from 'react'

interface Props {
  icon: JSX.Element
  items?: string[]
  position?: 'left' | 'right'
  tooltip?: string
}

const DropDownButton = ({ position = 'left', icon, items }: Props) => {
  return (
    <div className={`dropdown dropdown-hover ${position === 'left' ? '' : 'dropdown-end'}`}>
      <label className='btn btn-ghost min-h-0 h-[30px] w-[30px] px-0'>{icon}</label>
      {items && (
        <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32'>
          {items.map((item) => (
            <li key={item}>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDownButton
