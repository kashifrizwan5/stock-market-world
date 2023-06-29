import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
			<Header/>
			<Dashboard/>
			<Footer/>
    </div>
  )
}

export default App
