import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveId } from '../AC/activeIdAction'
import ChatListItem from './shared/ChatListItem'
import Profile from './Profile'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'

const Sidebar = () => {
  const dispatch = useDispatch()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const activeId = useSelector((state) => state.activeId)
  const usersList = useSelector((state) => state.usersList.entities)
  const chatList = useSelector((state) => state.chatList.entities)

  return (
    <div className="sidebar">
      <div className="main_sidebar">
        <div className="main_sidebar--header">
          <Avatar onClick={() => setIsProfileOpen(true)} />
          <div className="main_sidebar--header--btn">
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
        <div className="main_sidebar--search">
          <div className="search--container">
            <SearchIcon fontSize="small" color="disabled" />
            <input placeholder="Поиск или новый чат" />
          </div>
        </div>
        <div className="main_sidebar--userList">
          {chatList.valueSeq().map((item, i) => {
            const user = usersList.find((obj) => obj.get('id') === item.userId)
            return (
              <ChatListItem
                user={user}
                lastMessage={item.messages[item.messages.length - 1]}
                key={i}
                active={user.id === activeId}
                onClick={() => dispatch(setActiveId(user.id))}
              />
            )
          })}
        </div>
      </div>
      <Profile isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
    </div>
  )
}

export default Sidebar
