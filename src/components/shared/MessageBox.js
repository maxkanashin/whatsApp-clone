import React from 'react'
import './MessageBox.css'
import { MY_UUID } from '../../constants'

function MessageBox({ message }) {
  return (
    <div className="messageBox--line">
      <div
        className={`messageBox--line--container${
          message.author === MY_UUID ? ` right` : ``
        }`}
      >
        <div className="container--message">{message.message}</div>
        <div className="container--time">{message.date}</div>
      </div>
    </div>
  )
}

export default MessageBox
