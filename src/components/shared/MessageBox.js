import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { MY_UUID } from '../../constants'
import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'
import './MessageBox.css'

function MessageBox({ message }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="messageBox--line">
      <div
        className={`messageBox--line--container${
          message.author === MY_UUID ? ` out` : ``
        }`}
      >
        <div className="container--wrapper">
          <div className="container--wrapper--message">{message.message}</div>
          <div className="container--wrapper--time">{message.date}</div>
        </div>
        <div className="container--btn">
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <ExpandMoreIcon />
          </IconButton>
          <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen}>
            <DropdownMenuItem>Данные о сообщении</DropdownMenuItem>
            <DropdownMenuItem>Ответить</DropdownMenuItem>
            <DropdownMenuItem>Переслать сообщение</DropdownMenuItem>
            <DropdownMenuItem>Добавить сообщение в Избранные</DropdownMenuItem>
            <DropdownMenuItem>Удалить сообщение</DropdownMenuItem>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default MessageBox
