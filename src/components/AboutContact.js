import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, IconButton } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import BlockIcon from '@material-ui/icons/Block'
import DeleteIcon from '@material-ui/icons/Delete'
import { CSSTransition } from 'react-transition-group'
import { openAboutContact, closeAboutContact } from '../AC/openContactAction'
import './AboutContact.css'

function AboutContact(props) {
  const [isMount, setIsMount] = useState(false)
  const activeId = useSelector((state) => state.activeId)
  const isOpen = useSelector((state) => state.openContact)
  const user = useSelector((state) =>
    state.usersList.getIn(['entities', activeId])
  )
  const dispatch = useDispatch()
  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames="about-contact"
      unmountOnExit
      onEnter={() => setIsMount(true)}
      onExited={() => dispatch(closeAboutContact())}
    >
      <div className="about-contact">
        <div className="about-contact--header">
          <IconButton onClick={() => dispatch(closeAboutContact())}>
            <CloseIcon />
          </IconButton>
          <div className="header--info">Данные контакта</div>
        </div>

        <div className="about-contact--body">
          <div className="body--wrapper">
            <div className="body--avatar">
              <Avatar src={user?.imgAvatar} />
              <div className="avatar--name">{user?.userName}</div>
              <div className="avatar--date">{user?.online}</div>
            </div>
          </div>
          <div className="body--wrapper">
            <div className="body--documents">
              <div className="documents--tittle">
                <div className="about-contact--tittle--text">
                  Медия, ссылки и документы
                </div>
                <div className="about-contact--btn">
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div className="documents--content">
                Медия, ссылки и документы отсутствуют
              </div>
            </div>
          </div>
          <div className="body--wrapper">
            <div className="body--setting-messages">
              <div className="setting-messages--container">
                <div className="container--line">
                  <div className="container--line--text">Без звука</div>
                  <div className="about-contact--btn">
                    <Checkbox />
                  </div>
                </div>
              </div>
              <div className="setting-messages--container">
                <div
                  className="container--line"
                  style={{
                    borderTop: '1px solid #e5e5e6',
                    borderBottom: '1px solid #e5e5e6'
                  }}
                >
                  <div className="container--line--text">
                    Избранные сообщения
                  </div>
                  <div className="about-contact--btn">
                    <IconButton>
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="setting-messages--container">
                <div className="container--line">
                  <div className="container--line--text">
                    Исчезающие сообщения
                  </div>
                  <div className="about-contact--btn">
                    <IconButton>
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body--wrapper">
            <div className="body--number">
              <div className="about-contact--tittle--text">
                Сведения и номер телефона
              </div>
              <div
                className="container--line"
                style={{
                  borderBottom: '1px solid #e5e5e6'
                }}
              >
                <div className="container--line--text">Hello, World!</div>
              </div>
              <div className="container--line">
                <div className="container--line--text">{user?.phoneNum}</div>
              </div>
            </div>
          </div>

          <div className="body--button">
            <BlockIcon />
            <div className="button--title">Заблокировать</div>
          </div>

          <div className="body--button red">
            <ThumbDownIcon />
            <div className="button--title">Пожаловаться на контакт</div>
          </div>

          <div className="body--button red">
            <DeleteIcon />
            <div className="button--title">Удалить чат</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default AboutContact
