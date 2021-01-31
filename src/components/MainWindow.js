import React from 'react'
import { useSelector } from 'react-redux'
import ChatInfoWindow from './ChatInfoWindow'
import ChatWindow from './ChatWindow'
import AboutContact from './AboutContact'
import './MainWindow.css'

function MainWindow() {
  const activeId = useSelector((state) => state.activeId)
  return (
    <div className="main-window">
      {activeId == null ? <ChatInfoWindow /> : <ChatWindow />}
      <AboutContact />
    </div>
  )
}

export default MainWindow
