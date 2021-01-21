import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import SendIcon from '@material-ui/icons/Send'
import './ChatWindow.css'

const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <header className="chatWindow--header">
        <div className="header--avatar">
          <Avatar />
        </div>
        <div className="header--container">
          <div className="header--container--name">User Name</div>
          <div className="header--container--date">Был в сети вчера</div>
        </div>
        <div className="header--buttons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>

      <div className="chatWindow--messageWindow"></div>

      <footer className="chatWindow--footer">
        <div className="footer--buttons">
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </div>
        <div className="footer--inputField">
          <input placeholder="Введите сообщение"></input>
        </div>
        <div className="footer--sendButton">
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </footer>
    </div>
  )
}

export default ChatWindow
