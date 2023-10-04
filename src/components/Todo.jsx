import React from 'react'

const Todo = ({ todo, onRemove, onToggle }) => {
  const onToggleCompleted = (todo) => {
    onToggle(todo.id)
  }

  const onDeleteTodo = (todo) => {
    onRemove(todo.id)
  }

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo)}
      />
      <div className={todo.completed ? 'todoLabel completed' : 'todoLabel'}>
        {todo.name}
      </div>
      <button className="deleteBtn" onClick={() => onDeleteTodo(todo)}>
        X
      </button>
    </div>
  )
}

export default Todo
