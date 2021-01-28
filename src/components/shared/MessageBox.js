import React from 'react'
import './MessageBox.css'
import { IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { MY_UUID } from '../../constants'

function MessageBox({ message }) {
  return (
    <div className="messageBox--line">
      <div
        className={`messageBox--line--container${
          message.author === MY_UUID ? ` out` : ``
        }`}
      >
        <div className="container--wrapper">
          <div className="container--wrapper--message">{message.message}</div>
          <div className="container--wrapper--time">{message.date}</div>
        </div>
        <div className="container--btn">
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default MessageBox
