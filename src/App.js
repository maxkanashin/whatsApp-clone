import React from 'react'
import Sidebar from './components/Sidebar'
import MainWindow from './components/MainWindow'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="App--wrapper">
        <div className="App--body">
          <Sidebar />
          <MainWindow />
        </div>
      </div>
    </div>
  )
}

export default App
