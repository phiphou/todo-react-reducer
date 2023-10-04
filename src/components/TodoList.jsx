import React, { useEffect } from 'react'
import { UseTodos } from '../UseTodos'
import Todo from './Todo'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'

const TodoList = () => {
  const {
    filteredTodos,
    todos,
    removeTodo,
    toggleTodo,
    updateFilter,
    filter,
    addTodo,
    clearAll,
    clearCompleted
  } = UseTodos()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <h3>Todos</h3>
      <div className="infos">
        {todos.filter((todo) => todo.completed).length} of {todos.length}{' '}
        completed
      </div>
      <TodoFilter onUpdateFilter={updateFilter} />
      <TodoForm
        onTodoAdd={addTodo}
        onClearCompleted={clearCompleted}
        onClearAll={clearAll}
      />
      <ul>
        {filteredTodos &&
          filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onRemove={removeTodo}
              onToggle={toggleTodo}
            />
          ))}
      </ul>
    </div>
  )
}

export default TodoList
