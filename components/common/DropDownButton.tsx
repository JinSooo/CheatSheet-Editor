'use client'

import { MouseEvent } from 'react'

interface Props {
  icon: JSX.Element
  items?: { key: string; value: string }[]
  position?: 'left' | 'right'
  tooltip?: string
  onClick?: (e: MouseEvent<HTMLUListElement>) => void
}

const DropDownButton = ({ position = 'left', icon, items, tooltip, onClick }: Props) => {
  return (
    <div
      className={`dropdown dropdown-hover ${tooltip ? 'tooltip' : ''} ${position === 'left' ? '' : 'dropdown-end'}`}
      data-tip={tooltip}
    >
      <label className='btn btn-ghost min-h-0 h-[30px] w-[30px] px-0'>{icon}</label>
      {items && (
        <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32' onClick={onClick}>
          {items.map((item) => (
            <li key={item.key}>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a data-key={item.key}>{item.value}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDownButton
