import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import LandingPage from './landing-page/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-red-600'>hello</div>
      <LandingPage />
    </>
  )
}

export default App
