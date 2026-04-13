import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './Component/Profile'
import Gallery from './Component/Gallery'


function App() {

  return (
    <>
      <div className='text-center '>
      <div className='bg-amber-500 '>Welcom.to React App</div>
      <div>
        <Profile/>
      </div>
      {/* <div>
        <Gallery/>
      </div> */}
      </div>
    </>
  )
}

export default App
