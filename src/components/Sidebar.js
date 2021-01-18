import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <header>
        <div className="header">
          <Avatar />
          <div className="header--btn">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>

            <IconButton>
              <ChatIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </header>
      <div className="sidebar--search">Search</div>
      <div className="sidebar--list">UserList</div>
    </div>
  )
}

export default Sidebar
