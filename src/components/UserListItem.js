import React from 'react'
import { Avatar } from '@material-ui/core'
import './UserListItem.css'

const UserListItem = ({ user, active, onClick }) => {
  return (
    <div className={`userListItem${active ? ' active' : ''}`} onClick={onClick}>
      <div className="userListItem--avatar">
        <Avatar src={user.imgAvatar} />
      </div>
      <div className="userListItem--container">
        <div className="userListItem--container--line">
          <div className="userListItem--user">{user.userName}</div>
          <div className="userListItem--data">00:00</div>
        </div>
        <div className="userListItem--container--line">
          <div className="userListItem--message">
            <p>{user.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserListItem
