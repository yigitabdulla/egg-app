import { useState } from 'react'
import ToDoList from './components/ToDoList'
import "./styles/App.scss"
import Navbar from './components/Navbar'
import Egg from './components/Egg'
import Stats from './components/Stats'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <ToastContainer position='bottom-right'/>
      </div>
        
    </>
  )
}

export default App
