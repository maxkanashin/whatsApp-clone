import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './ChatListItem.css'

const ChatListItem = ({ user, lastMessage, active, onClick }) => {
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
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ChatListItem
