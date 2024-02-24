import { useState } from 'react'
import './css/main.css'
import { messages } from './components/messages'
import MessageHistory from './components/MessageHistory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  )
}

export default App
