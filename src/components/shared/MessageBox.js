import React from 'react'
import './MessageBox.css'

function MessageBox({ message }) {
  return (
    <div className="messageBox--line">
      <div className="messageBox--line--container">
        <div className="container--message">{message.message}</div>
        <div className="container--time">{message.date}</div>
      </div>
    </div>
  )
}

export default MessageBox
