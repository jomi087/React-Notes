import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../store/sliceStore'

const List = () => {
    const todos = useSelector((state) => {
        console.log(state.todo.task) 
        return state.todo.task
    })
    const dispatch = useDispatch()


    return (
    <>
        <ul>
            {todos.map((task)=>{
                return(
                    <li key={task.id} className="d-flex justify-content-between ">
                        <input type="checkbox" className="form-check-input fs-2" />
                        <p className="fs-2 ms-4">{task.text}</p>
                        <div className="">
                            <button className="fs-5 mt-3 mx-1 rounded-4 bg-info ">edit</button>
                            <button className="fs-5 mt-3 mx-1 rounded-4 bg-danger" onClick={() =>dispatch(removeTodo(task.id))}>delete</button>    
                        </div>
                    </li>
                )
            })}
        </ul>  
        
    </>
  )
}

export default List