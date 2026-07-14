import { useState } from 'react'
import User from './User'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter the user username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        {/* <button onClick={(e) => setUsername(e.target.value)}>Search</button> */}
      </div>

      <div>
        <User username={username}/>
      </div>
    </div>
  )
}

export default App
