import React, { useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import './DropdownMenu.css'

function DropdownMenu(props) {
  const wrapperRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      props.setIsOpen(false)
    }
  }
  return (
    <CSSTransition
      in={props.isOpen}
      timeout={200}
      classNames="menu"
      unmountOnExit
      onEnter={() => props.setIsOpen(true)}
      onExited={() => props.setIsOpen(false)}
    >
      <div ref={wrapperRef} className="dropdown-menu">
        <ul>{props.children}</ul>
      </div>
    </CSSTransition>
  )
}

export default DropdownMenu
