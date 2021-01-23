import React from 'react'
import './MessageBox.css'

function MessageBox({ message }) {
  return (
    <div className="messageBox--line">
      <div className="messageBox--line--container">
        <div className="container--message">{message.text}</div>
        <div className="container--time">19.00</div>
      </div>
    </div>
  )
}

export default MessageBox
