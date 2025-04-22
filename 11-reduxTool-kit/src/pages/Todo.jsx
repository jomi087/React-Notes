import React from 'react'
import Title from '../components/Title'
import List from '../components/List'
import Input from '../components/Input'

const Todo = () => {
  return (
    <div className="vh-100 align-items-center d-flex justify-content-center">
       <div className="p-5 bg-light border rounded">
        <Title title="Todo List" />
        <hr />
        <Input />
        <hr/>
        <List/>
      </div>
    </div>
  )
}

export default Todo


{/* <div class="d-flex justify-content-center  vh-100">
  <div class="p-5 bg-light border rounded">Your Content Here</div>
</div> */}
