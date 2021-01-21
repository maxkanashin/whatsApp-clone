import React from 'react'
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows'
import './ChatInfoWindow.css'

function ChatInfoWindow() {
  return (
    <div className="ChatInfoWindow">
      <div className="ChatInfoWindow--content">
        <div className="ChatInfoWindow--content--img" />
        <h1>Не отключайте свой телефон</h1>
        <div className="ChatInfoWindow--text">
          WhatsApp подключается к вашему телефону, чтобы синхронизировать
          сообщения. Чтобы снизить трафик данных, подключите телефон к Wi-Fi.
        </div>
        <div className="ChatInfoWindow--link">
          <LaptopWindowsIcon />
          <div>
            WhatsApp доступен для Windows. <a href="/#">Скачайте здесь</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInfoWindow
