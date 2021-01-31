import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveId } from '../AC/activeIdAction'
import ChatListItem from './shared/ChatListItem'
import DropdownMenu from './shared/DropdownMenu'
import DropdownMenuItem from './shared/DropdownMenuItem'
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
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const activeId = useSelector((state) => state.activeId)
  const usersList = useSelector((state) => state.usersList.entities).filter(
    (item) => item.userName.indexOf(filter) > -1
  )
  const chatList = useSelector((state) => state.chatList.entities)

  return (
    <div className="sidebar">
      <div className="main_sidebar">
        <div className="main_sidebar--header">
          <Avatar onClick={() => setIsProfileOpen(true)} />
          <div className="main_sidebar--header--buttons">
            <div className="header--btn">
              <IconButton>
                <DonutLargeIcon />
              </IconButton>
            </div>

            <div className="header--btn">
              <IconButton>
                <ChatIcon />
              </IconButton>
            </div>

            <div className="header--btn">
              <IconButton onClick={() => setIsOpen(!isOpen)}>
                <MoreVertIcon />
              </IconButton>
              <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen}>
                <DropdownMenuItem>Новая группа</DropdownMenuItem>
                <DropdownMenuItem>Создать комнату</DropdownMenuItem>
                <DropdownMenuItem>Профиль</DropdownMenuItem>
                <DropdownMenuItem>Архив</DropdownMenuItem>
                <DropdownMenuItem>Избранные</DropdownMenuItem>
                <DropdownMenuItem>Настройки</DropdownMenuItem>
                <DropdownMenuItem>Выйти</DropdownMenuItem>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="main_sidebar--search">
          <div className="search--container">
            <SearchIcon fontSize="small" color="disabled" />
            <input
              placeholder="Поиск или новый чат"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="main_sidebar--userList">
          {chatList.valueSeq().map((item, i) => {
            const user = usersList.find((obj) => obj.get('id') === item.userId)
            return user ? (
              <ChatListItem
                user={user}
                lastMessage={item.messages[item.messages.length - 1]}
                key={i}
                active={user.id === activeId}
                onClick={() => dispatch(setActiveId(user.id))}
              />
            ) : (
              ''
            )
          })}
        </div>
      </div>
      <Profile isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
    </div>
  )
}

export default Sidebar
