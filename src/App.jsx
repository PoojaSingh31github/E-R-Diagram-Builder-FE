import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import AllRoutes from './pages/AllRoutes'
import RegisterForm from './pages/Tryresgister'
import LoginForm from './pages/Trylogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginForm/>
    <RegisterForm/>
    </>

  )
}

export default App
