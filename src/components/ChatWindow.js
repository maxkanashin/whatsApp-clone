import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'
import MessageBox from './shared/MessageBox'
import './ChatWindow.css'

const ChatWindow = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  function handleClickSend(e) {
    e.preventDefault()
    setMessages((item) => [...item, { text: input }])
  }

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

      <div className="chatWindow--messageWindow">
        {messages.map((item, index) => (
          <MessageBox message={item} key={index} />
        ))}
      </div>

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
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Введите сообщение"
          ></input>
        </div>
        <div className="footer--sendButton">
          {input.length > 0 ? (
            <IconButton onClick={handleClickSend}>
              <SendIcon />
            </IconButton>
          ) : (
            <IconButton>
              <MicIcon />
            </IconButton>
          )}
        </div>
      </footer>
    </div>
  )
}

export default ChatWindow
