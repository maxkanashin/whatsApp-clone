import React from 'react'
import './DropdownMenuItem.css'

function DropdownMenuItem(props) {
  return (
    <li className="dropdown-menu-item">
      <div>{props.children}</div>
    </li>
  )
}

export default DropdownMenuItem
