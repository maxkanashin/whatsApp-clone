import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './components/Sidebar'
import ChatInfoWindow from './components/ChatInfoWindow'
import ChatWindow from './components/ChatWindow'
import './App.css'

function App() {
  const activeId = useSelector((state) => state.activeId)
  return (
    <div className="App">
      <div className="App--body">
        <Sidebar />
        {activeId == null ? <ChatInfoWindow /> : <ChatWindow />}
      </div>
    </div>
  )
}

export default App
