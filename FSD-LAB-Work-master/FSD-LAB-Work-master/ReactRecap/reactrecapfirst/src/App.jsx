import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ICard from './component/ICard'
import Gallery from './component/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Abes
      </div>
      <Gallery/>
    </>
  )
}

export default App
