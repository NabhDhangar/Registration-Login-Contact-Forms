import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShortCircuit } from './components/ShortCircuit'
import { CounterChallenge } from './components/CounterChallenge'
import { RegistrationReact } from './components/RegistrationReact'
import { LoginReact } from './components/LoginReact'
import { ContactForm } from './components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <LoginReact/>
    <ContactForm/>
  )
}

export default App
