import React, { useState } from 'react'

const TodoForm = ({ onTodoAdd, onClearCompleted, onClearAll }) => {
  const [todo, setTodo] = useState('')

  const OnTodoAddHandler = (e) => {
    e.preventDefault()
    onTodoAdd(todo)
    setTodo('')
  }

  const onClearCompletedHandler = (e) => {
    e.preventDefault()
    onClearCompleted()
    setTodo('')
  }

  const onClearAllHandler = (e) => {
    e.preventDefault()
    onClearAll()
    setTodo('')
  }

  return (
    <div>
      <form onSubmit={(e) => OnTodoAddHandler(e)}>
        <input
          type="text"
          value={todo}
          placeholder="Thing to be done?"
          onInput={(e) => setTodo(e.target.value)}
        />
        <button type="submit" disabled={todo === ''}>
          Add Todo
        </button>
      </form>
      <div className="clearBtns">
        <button
          className="clearBtn"
          onClick={(e) => onClearCompletedHandler(e)}
        >
          Clear completed
        </button>
        <button className="clearBtn" onClick={(e) => onClearAllHandler(e)}>
          Clear all tasks
        </button>
      </div>
    </div>
  )
}

export default TodoForm
