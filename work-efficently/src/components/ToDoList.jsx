import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../styles/ToDoList.scss"

export default function ToDoList() {

    const [list,setList] = useState([
        {
          "id": 1,
          "title": "Buy groceries",
          "description": "Milk, eggs, bread, fruits",
          "completed": false
        },
        {
          "id": 2,
          "title": "Finish project report",
          "description": "Finalize and submit the report for the team project",
          "completed": true
        },
        {
          "id": 3,
          "title": "Book dentist appointment",
          "description": "Call and schedule a cleaning for next week",
          "completed": false
        },
        {
          "id": 4,
          "title": "Workout",
          "description": "30-minute run + core exercises",
          "completed": true
        },
        {
          "id": 5,
          "title": "Read a book",
          "description": "Read at least 20 pages of 'Atomic Habits'",
          "completed": false
        }
      ]
      )

  return (
    <div className='list-container'>
        <h3 className='list-title'>To-Do List</h3>
        <ul className='list'>
            {list.map(listItem => {
                return <li className='list-item' key={listItem.id}>
                      <p>{listItem.title}</p>
                      <div className="list-item-buttons">
                        <button className='list-button'><DeleteIcon/></button>
                        <button className='list-button'><EditIcon/></button>
                        <button className='list-button'><CheckCircleIcon/></button>
                      </div>
                    </li>
            })}
        </ul>
    </div>
  )
}
