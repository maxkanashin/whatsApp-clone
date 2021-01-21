import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Sidebar from './components/Sidebar'
import ChatInfoWindow from './components/ChatInfoWindow'
import ChatWindow from './components/ChatWindow'
import './App.css'

function App() {
  const [userList, setUserList] = useState([
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'Ksenya Kozlova',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'Maxim Kanashin',
      message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, necessitatibus enim sunt quae id quas expedita molestias corporis reprehenderit nostrum!'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'Andrey Malinin',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'Nikolay Kanushkov',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'Judy Alvarez ',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name1',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name2',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name3',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name4',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name5',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name6',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name7',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    },
    {
      id: uuid(),
      imgAvatar: '',
      userName: 'User Name8',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum.'
    }
  ])
  const [activeId, setActiveId] = useState(null)
  return (
    <div className="App">
      <div className="App--body">
        <Sidebar
          users={userList}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        {activeId == null ? <ChatInfoWindow /> : <ChatWindow />}
      </div>
    </div>
  )
}

export default App
