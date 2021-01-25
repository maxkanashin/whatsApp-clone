import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveId } from '../AC/activeIdAction'
import UserListItem from './UserListItem'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeId = useSelector((state) => state.activeId)
  const usersList = useSelector((state) => state.usersList.entities)
  return (
    <div className="sidebar">
      <header>
        <div className="sidebar--header">
          <Avatar />
          <div className="sidebar--header--btn">
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
      <div className="sidebar--search">
        <div className="search--container">
          <SearchIcon fontSize="small" color="disabled" />
          <input placeholder="Поиск или новый чат" />
        </div>
      </div>
      <div className="sidebar--userList">
        {usersList.valueSeq().map((item, i) => (
          <UserListItem
            user={item}
            key={i}
            active={item.id === activeId}
            onClick={() => dispatch(setActiveId(item.id))}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
