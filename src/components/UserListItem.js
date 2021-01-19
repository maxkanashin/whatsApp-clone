import React from 'react'
import { Avatar } from '@material-ui/core'
import './UserListItem.css'

function UserListItem() {
  return (
    <div className="userListItem">
      <div className="userListItem--avatar">
        <Avatar />
      </div>
      <div className="userListItem--container">
        <div className="userListItem--container--line">
          <div className="userListItem--user">User Name</div>
          <div className="userListItem--data">00:00</div>
        </div>
        <div className="userListItem--container--line">
          <div className="userListItem--message">Hello world!</div>
        </div>
      </div>
    </div>
  )
}

export default UserListItem
