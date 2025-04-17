import React from 'react'
import ToDoList from './ToDoList'
import Egg from './Egg'
import Stats from './Stats'
import "../styles/Home.scss"
export default function Home() {
  return (
    <div className="component-container">
          <ToDoList/>
          <Egg/>
          <Stats/>
    </div>
  )
}
