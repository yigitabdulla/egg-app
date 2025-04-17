import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../styles/ToDoList.scss"

export default function ToDoList() {

    const [newListItem, setNewListItem] = useState("")

    const [list,setList] = useState([
        {
          "id": 1,
          "title": "Buy groceries",
          "completed": false
        },
        {
          "id": 2,
          "title": "Finish project report",
          "completed": true
        },
        {
          "id": 3,
          "title": "Book dentist appointment",
          "completed": false
        },
        {
          "id": 4,
          "title": "Workout",
          "completed": true
        },
        {
          "id": 5,
          "title": "Read a book",
          "completed": false
        }
      ]
      )

      const handleListAdd = () => {
        if (!newListItem.trim()) return;
      
        const newItem = {
          id: Date.now(),
          title: newListItem,
          completed: false
        };
      
        setList(prev => [...prev, newItem]);
        setNewListItem("");
      };
      

  return (
    <div className='list-container'>
        <div className='add-list-item'>
          <input value={newListItem} placeholder='Add to-do' onChange={(e) => setNewListItem(e.target.value)} className='list-input'></input>
          <button onClick={() => handleListAdd()} className='list-add'>Add</button>
        </div>
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
