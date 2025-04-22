import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/sliceStore'

const Input = () => {
  const [task, setTask] = useState("")
  const dispatch = useDispatch()

  const handleTask = () => {
    if (!task) return alert("empty")
      dispatch(addTodo(task))
      setTask("")
    }
  return (
    <div className="input-group "> 
      <input
        type="text"
        placeholder=" Enter a task"
        className="fs-2 rounded-3"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />
      <button
        className="fs-2 rounded-3"
        onClick ={handleTask}
      >
        enter
      </button>
    </div>
  )
}

export default Input

// className=""