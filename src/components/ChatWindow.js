import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
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
  const messagesEndRef = useRef(null)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const activeId = useSelector((state) => state.activeId)
  const user = useSelector((state) =>
    state.usersList.getIn(['entities', activeId])
  )
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView()
  }

  function handleClickEnter(e) {
    if (e.key === 'Enter') {
      handleClickSend(e)
    }
  }

  function handleClickSend(e) {
    e.preventDefault()
    if (input.length > 0) {
      setMessages((item) => [...item, { text: input }])
      setInput('')
    }
  }

  useEffect(scrollToBottom)

  return (
    <div className="chatWindow">
      <header className="chatWindow--header">
        <div className="header--avatar">
          <Avatar src={user.imgAvatar} />
        </div>
        <div className="header--container">
          <div className="header--container--name">{user.userName}</div>
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
        <div ref={messagesEndRef} />
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
            onKeyPress={handleClickEnter}
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
