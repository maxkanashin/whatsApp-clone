import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'
import './ChatListItem.css'

const ChatListItem = ({ user, lastMessage, active, onClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`ChatListItem${active ? ' active' : ''}`} onClick={onClick}>
      <div className="ChatListItem--avatar">
        <Avatar src={user.imgAvatar} />
      </div>
      <div className="ChatListItem--container">
        <div className="ChatListItem--container--line">
          <div className="ChatListItem--user">{user.userName}</div>
          <div className="ChatListItem--data">{lastMessage.date}</div>
        </div>
        <div className="ChatListItem--container--line">
          <div className="ChatListItem--message">
            <p>{lastMessage.message}</p>
          </div>
          <div className="container--line-btn">
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <ExpandMoreIcon />
            </IconButton>
            <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen}>
              <DropdownMenuItem>В архив</DropdownMenuItem>
              <DropdownMenuItem>Без звука</DropdownMenuItem>
              <DropdownMenuItem>Удалить чат</DropdownMenuItem>
              <DropdownMenuItem>Закрепить чат</DropdownMenuItem>
              <DropdownMenuItem>Пометить как непрочитанное</DropdownMenuItem>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatListItem
