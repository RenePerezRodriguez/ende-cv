import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Input from './components/input'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (  
    <div>
      <Input/>
    </div>
  )
}

export default App
