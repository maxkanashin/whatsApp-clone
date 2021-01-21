import React, { useState, useEffect } from 'react'
import UserListItem from './UserListItem'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'

const Sidebar = ({ users, activeId, setActiveId }) => {
  return (
    <div className="sidebar">
      <header>
        <div className="sidebar__header">
          <Avatar />
          <div className="sidebar__header__btn">
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
      <div className="sidebar__search">
        <div className="search__container">
          <SearchIcon fontSize="small" color="disabled" />
          <input placeholder="Поиск или новый чат" />
        </div>
      </div>
      <div className="sidebar__userList">
        {users.map((item, i) => (
          <UserListItem
            user={item}
            key={i}
            active={item.id === activeId}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
