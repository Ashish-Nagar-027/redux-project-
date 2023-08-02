
import './App.css'
import Operations from './components/Operations'
import InputBoxes from './components/InputBoxes'
import Buttons from './components/Buttons'
import BottomSection from './components/BottomSection'
import { useState } from 'react'


function App() {



  return (
    <div className="App">

      <h1 className="text-3xl font-bold underline">
          Simple calculator using redux
      </h1>

      <div className='container border-2 mt-10 p-10 rounded-2xl border-black'>
  
          <Operations  />
     
          <InputBoxes />
         
          <Buttons />
     
          <BottomSection/>
  
       </div>
       
    </div>

  )
}

export default App
