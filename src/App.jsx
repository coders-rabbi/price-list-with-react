import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PiceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-5xl text-fuchsia-500 font-bold'>Hello World!</h1>
      <PriceList></PriceList>
       
    </div>
  )
}

export default App
