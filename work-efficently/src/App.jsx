import { useState } from 'react'
import ToDoList from './components/ToDoList'
import "./styles/App.scss"
import Navbar from './components/Navbar'
import Egg from './components/Egg'
import Stats from './components/Stats'

function App() {
  

  return (
    <>
      <div className="main-container">
        <Navbar/>
        <div className="component-container">
          <ToDoList/>
          <Egg/>
          <Stats/>
        </div>
      </div>
        
    </>
  )
}

export default App
