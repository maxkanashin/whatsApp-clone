import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import './Profile.css'

const Profile = ({ isOpen, setIsOpen }) => {
  const [unMount, setUnMount] = useState(true)
  if (unMount && isOpen) {
    setTimeout(() => {
      setUnMount(false)
    })
  } else if (unMount) {
    return null
  }

  function HandleClick(e) {
    setIsOpen(false)
    setTimeout(() => {
      setUnMount(true)
    }, 500)
  }

  return (
    <div className={`profile${isOpen && !unMount ? '' : ' hidden'}`}>
      <header>
        <div className="profile--header">
          <div className="header--content">
            <IconButton onClick={HandleClick}>
              <ArrowBackIcon />
            </IconButton>
            <div className="header--content--text">Профиль</div>
          </div>
        </div>
      </header>
      <div className="profile--body">
        <div className="profile--body--avatar">
          <Avatar />
        </div>
        <div className="profile--body--container">
          <div className="body--label">Ваше имя</div>
          <div className="body--inputField">
            <div className="inputField--input">
              <input type="text" />
            </div>
            <div className="inputField--btn">
              <IconButton>
                <CreateIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="profile--body--warning">
          Это не имя пользователя или пароль. Данное имя будут видеть ваши
          контакты в WhatsApp.
        </div>
        <div className="profile--body--container">
          <div className="body--label">Сведения</div>
          <div className="body--inputField">
            <div className="inputField--input">
              <input type="text" />
            </div>
            <div className="inputField--btn">
              <IconButton>
                <CreateIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
