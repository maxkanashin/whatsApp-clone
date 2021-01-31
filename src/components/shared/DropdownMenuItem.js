import React from 'react'
import './DropdownMenuItem.css'

function DropdownMenuItem(props) {
  return (
    <li className="dropdown-menu-item" onClick={props.onClick}>
      <div>{props.children}</div>
    </li>
  )
}

export default DropdownMenuItem
