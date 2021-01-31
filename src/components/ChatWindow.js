import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMessage } from '../AC/chatListAction'
import { openAboutContact } from '../AC/openContactAction'
import { Avatar, IconButton, TextareaAutosize } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'
import CloseIcon from '@material-ui/icons/Close'
import GifIcon from '@material-ui/icons/Gif'
import NoteIcon from '@material-ui/icons/Note'
import MessageBox from './shared/MessageBox'
import { Picker } from 'emoji-mart'
import DropdownMenu from './shared/DropdownMenu'
import DropdownMenuItem from './shared/DropdownMenuItem'
import 'emoji-mart/css/emoji-mart.css'
import './ChatWindow.css'

const ChatWindow = () => {
  const messagesEndRef = useRef(null)
  const [input, setInput] = useState('')
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [emojiIsOpen, setEmojiIsOpen] = useState(false)
  const dispatch = useDispatch()
  const activeId = useSelector((state) => state.activeId)
  const chatList = useSelector((state) => state.chatList.entities)
  const messagesList = chatList.find((obj) => obj.get('userId') === activeId)
  const isOpenContact = useSelector((state) => state.openContact)

  const user = useSelector((state) =>
    state.usersList.getIn(['entities', activeId])
  )
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView()
  }

  function handleClickKey(e) {
    if (e.which === 13 && e.ctrlKey) {
      setInput(e.target.value + '\n')
    } else if (e.which === 13) {
      handleClickSend(e)
    }
  }

  function handleClickSend(e) {
    e.preventDefault()
    if (input.length > 0) {
      var date = new Date()
      dispatch(
        setMessage(
          input,
          activeId,
          date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2)
        )
      )
      setInput('')
    }
  }

  function handleClickEmojiOpen(e) {
    e.preventDefault()
    if (!emojiIsOpen) setEmojiIsOpen(true)
  }

  function handleClickClose(e) {
    e.preventDefault()
    setEmojiIsOpen(false)
  }

  useEffect(() => {
    scrollToBottom()
  })

  return (
    <div className="chatWindow">
      <header className="chatWindow--header">
        <div
          className="header--tittle"
          onClick={() => dispatch(openAboutContact())}
        >
          <div className="header--avatar">
            <Avatar src={user.imgAvatar} />
          </div>
          <div className="header--container">
            <div className="header--container--name">{user.userName}</div>
            <div className="header--container--date">Был в сети вчера</div>
          </div>
        </div>
        <div className="header--buttons">
          <div className="header--btn">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <div className="header--btn">
            <IconButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <MoreVertIcon />
            </IconButton>
            <DropdownMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu}>
              <DropdownMenuItem>Данные контакта</DropdownMenuItem>
              <DropdownMenuItem>Выбрать сообщения</DropdownMenuItem>
              <DropdownMenuItem>Без звука</DropdownMenuItem>
              <DropdownMenuItem>Очистить чат</DropdownMenuItem>
              <DropdownMenuItem>Удалить чат</DropdownMenuItem>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="chatWindow--messageWindow">
        {messagesList.get('messages').map((item, index) => (
          <MessageBox message={item} key={index} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={`chatWindow--emojiField${!emojiIsOpen ? ' hidden' : ''}`}>
        <Picker
          showPreview={false}
          showSkinTones={false}
          emojiSize={32}
          onSelect={(emoji) => setInput(input + emoji.native)}
        />
      </div>

      <footer className="chatWindow--footer">
        <div className="footer--buttons">
          <IconButton
            className={`${!emojiIsOpen ? 'hidden' : ''}`}
            onClick={handleClickClose}
          >
            <CloseIcon />
          </IconButton>

          <IconButton onClick={handleClickEmojiOpen}>
            <InsertEmoticonIcon
              style={{ color: emojiIsOpen ? '#009688' : '#919191' }}
            />
          </IconButton>

          <IconButton className={`${!emojiIsOpen ? 'hidden' : ''}`}>
            <GifIcon />
          </IconButton>

          <IconButton className={`${!emojiIsOpen ? 'hidden' : ''}`}>
            <NoteIcon />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </div>
        <div className="footer--inputField">
          <TextareaAutosize
            rowsMax={5}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Введите сообщение"
            onKeyPress={handleClickKey}
          ></TextareaAutosize>
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
