import React, { useCallback, useReducer } from 'react'

const todosReducer = (state, action) => {
  if (action.type === 'REMOVE_TODO') {
    return {
      ...state,
      todos: state.todos.filter((t) => t.id !== action.payload)
    }
  }

  if (action.type === 'ADD_TODO') {
    const newTodo = {
      id: new Date().getTime(),
      name: action.payload,
      completed: false
    }
    return {
      ...state,
      todos: [newTodo, ...state.todos]
    }
  }

  if (action.type === 'TOGGLE_TODO') {
    return {
      ...state,
      todos: state.todos.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      )
    }
  }

  if (action.type === 'CLEAR_COMPLETED') {
    return {
      ...state,
      todos: state.todos.filter((todo) => !todo.completed)
    }
  }

  if (action.type === 'CLEAR_ALL') {
    localStorage.removeItem('todos')
    return {
      ...state,
      todos: []
    }
  }

  if (action.type === 'UPDATE_FILTER') {
    return {
      ...state,
      filter: action.payload
    }
  }
}

const FILTER_ALL = 'FILTER_ALL'
const FILTER_COMPLETED = 'FILTER_COMPLETED'
const FILTER_UNCOMPLETED = 'FILTER_UNCOMPLETED'

export function UseTodos() {
  const existingTodos = localStorage.getItem('todos')

  const [state, dispatch] = useReducer(todosReducer, {
    todos: existingTodos ? JSON.parse(existingTodos) : [],
    filter: FILTER_ALL
  })

  const filteredTodos = state.todos.filter((todo) => {
    switch (state.filter) {
      case FILTER_ALL:
        return true
      case FILTER_COMPLETED:
        return todo.completed
      case FILTER_UNCOMPLETED:
        return !todo.completed
    }
  })

  return {
    todos: state.todos,
    filter: state.filter,
    filteredTodos,
    FILTER_ALL,
    FILTER_COMPLETED,
    FILTER_UNCOMPLETED,
    toggleTodo: useCallback((id) => {
      dispatch({ type: 'TOGGLE_TODO', payload: id })
    }, []),
    removeTodo: useCallback(
      (id) => dispatch({ type: 'REMOVE_TODO', payload: id }),
      []
    ),
    addTodo: useCallback(
      (text) => dispatch({ type: 'ADD_TODO', payload: text }),
      []
    ),
    clearCompleted: useCallback(
      () => dispatch({ type: 'CLEAR_COMPLETED' }),
      []
    ),
    clearAll: useCallback(() => dispatch({ type: 'CLEAR_ALL' }), []),
    updateFilter: useCallback(
      (filter) => dispatch({ type: 'UPDATE_FILTER', payload: filter }),
      []
    )
  }
}
