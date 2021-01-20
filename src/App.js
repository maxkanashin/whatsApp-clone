import './App.css'
import Sidebar from './components/Sidebar'
import ChatInfoWindow from './components/ChatInfoWindow'

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Sidebar />
        <ChatInfoWindow />
      </div>
    </div>
  )
}

export default App
