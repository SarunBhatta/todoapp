import React, { useState } from 'react'


const App = () => {
  const[userinput, setUserinput] =useState([])
  const[todos, setTodos] =useState([])

 const addData = () =>{
setTodos([...todos,userinput])
 }

  return (
    <div>
      <h1>Todo-List</h1>
      <input  onChange={(event)=> setUserinput(event.target.value) } type="text"></input>
<button onClick={()=> addData()}>Add</button>
      <ul>
        {
          todos.map((todo ,index)=><li key={index}>{todo}</li>)
        }
      </ul>
    </div>
  )
}

export default App
